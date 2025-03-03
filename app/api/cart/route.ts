import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { cartItems, carts, productsTable } from "@/lib/db/schema";
import { InferModel, and, eq } from "drizzle-orm";

// GET /api/cart?userId=<userId>
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  const db = await getDb();
  try {
    // Fetch user's cart
    const cart = await db
      .select()
      .from(carts)
      .where(eq(carts.userId, userId))
      .limit(1)
      .then((result) => result[0]);

    if (!cart) {
      return NextResponse.json({ cartItems: [] }, { status: 200 });
    }

    // Fetch cart items with product details
    const items = await db
      .select({
        id: cartItems.id,
        productId: cartItems.productId,
        quantity: cartItems.quantity,
        name: productsTable.name,
        price: productsTable.price,
        imageUrl: productsTable.imageUrl,
      })
      .from(cartItems)
      .leftJoin(productsTable, eq(cartItems.productId, productsTable.productId))
      .where(eq(cartItems.cartId, cart.id));

    return NextResponse.json({ cartItems: items }, { status: 200 });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST /api/cart - Add item to cart
export async function POST(request: Request) {
  try {
    const { userId, productId, quantity } = await request.json();

    if (!userId || !productId || !quantity) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const db = await getDb();

    let cart = await db
      .select()
      .from(carts)
      .where(eq(carts.userId, userId))
      .limit(1)
      .then((result) => result[0]);

    if (!cart) {
      const [newCart] = await db.insert(carts).values({ userId }).returning();
      cart = newCart;
    }

    const existingItem = await db
      .select()
      .from(cartItems)
      .where(
        and(
          eq(cartItems.cartId, cart.id),
          eq(cartItems.productId, Number(productId))
        )
      )
      .then((result) => result[0]);

    if (existingItem) {
      await db
        .update(cartItems)
        .set({ quantity: existingItem.quantity + Number(quantity) })
        .where(eq(cartItems.id, existingItem.id));
    } else {
      await db.insert(cartItems).values({
        cartId: cart.id as InferModel<typeof cartItems>["cartId"],
        productId: Number(productId),
        quantity: Number(quantity),
      });
    }

    return NextResponse.json(
      { message: "Item added to cart" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PUT /api/cart - Update item quantity
export async function PUT(request: Request) {
  try {
    const { userId, productId, quantity } = await request.json();

    if (!userId || !productId || quantity < 1) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const db = await getDb();

    const cart = await db
      .select()
      .from(carts)
      .where(eq(carts.userId, userId))
      .limit(1)
      .then((result) => result[0]);

    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    await db
      .update(cartItems)
      .set({ quantity })
      .where(
        and(eq(cartItems.cartId, cart.id), eq(cartItems.productId, productId))
      );

    return NextResponse.json({ message: "Cart item updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating cart item:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// DELETE /api/cart - Remove item or clear cart
export async function DELETE(request: Request) {
  try {
    const { userId, productId } = await request.json();

    const db = await getDb();

    const cart = await db
      .select()
      .from(carts)
      .where(eq(carts.userId, userId))
      .limit(1)
      .then((result) => result[0]);

    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    if (productId) {
      await db
        .delete(cartItems)
        .where(
          and(eq(cartItems.cartId, cart.id), eq(cartItems.productId, productId))
        );
    } else {
      await db.delete(cartItems).where(eq(cartItems.cartId, cart.id)); // Clear all cart items
    }

    return NextResponse.json({ message: "Cart updated" }, { status: 200 });
  } catch (error) {
    console.error("Error in delete operation:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
