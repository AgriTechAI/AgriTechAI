import { db } from "@/lib/db";
import {
  agriculturalMachinesTable,
  fertilizersTable,
  productsTable,
  seedsTable,
  carts,
  cartItems,
} from "./schema";
import { eq, and } from "drizzle-orm";

export async function getProductsByType(
  type: "Fertilizer" | "Seeds" | "Agricultural Machines"
) {
  switch (type) {
    case "Fertilizer":
      return await db
        .select()
        .from(productsTable)
        .where(eq(productsTable.category, "Fertilizers"));
    case "Seeds":
      return await db
        .select()
        .from(productsTable)
        .where(eq(productsTable.category, "Seeds"));
    case "Agricultural Machines":
      return await db
        .select()
        .from(productsTable)
        .where(eq(productsTable.category, "Agricultural Machines"));
  }
}

export async function getProductById(id: number) {
  const product = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.productId, id));
  switch (product[0].category) {
    case "Fertilizers":
      return {
        ...product[0],
        ...(
          await db
            .select()
            .from(fertilizersTable)
            .where(eq(fertilizersTable.productId, id))
        )[0],
      };
    case "Seeds":
      return {
        ...product[0],
        ...(
          await db.select().from(seedsTable).where(eq(seedsTable.productId, id))
        )[0],
      };
    case "Agricultural Machines":
      return {
        ...product[0],
        ...(
          await db
            .select()
            .from(agriculturalMachinesTable)
            .where(eq(agriculturalMachinesTable.productId, id))
        )[0],
      };
  }
}
export async function getUserCart(userId: string) {
  if (!userId) throw new Error("User ID is required");

  const cart = await db
    .select()
    .from(carts)
    .where(eq(carts.userId, userId))
    .limit(1)
    .then((result) => result[0]);

  return cart;
}

// Fetch Cart Items by Cart ID
export async function getCartItems(cartId: number) {
  return await db
    .select({
      id: cartItems.id,
      cartId: cartItems.cartId,
      quantity: cartItems.quantity,
      createdAt: cartItems.createdAt,
      updatedAt: cartItems.updatedAt,
      product: {
        productId: productsTable.productId,
        name: productsTable.name,
        description: productsTable.description,
        category: productsTable.category,
        price: productsTable.price,
        stock: productsTable.stock,
        imageUrl: productsTable.imageUrl,
        createdAt: productsTable.createdAt,
      },
    })
    .from(cartItems)
    .innerJoin(productsTable, eq(cartItems.productId, productsTable.productId))
    .where(eq(cartItems.cartId, cartId));
}
// Add Product to Cart
export async function addProductToCart(userId: string, productId: number, quantity: number = 1) {
  if (!userId || !productId) throw new Error("Invalid input");

  let cart = await getUserCart(userId);

  if (!cart) {
    const [newCart] = await db.insert(carts).values({ userId }).returning();
    cart = newCart;
  }

  const existingItem = await db
    .select()
    .from(cartItems)
    .where(and(eq(cartItems.cartId, cart.id), eq(cartItems.productId, productId)))
    .then((result) => result[0]);

  if (existingItem) {
    await db.update(cartItems)
      .set({ quantity: existingItem.quantity + quantity })
      .where(eq(cartItems.id, existingItem.id));
  } else {
    await db.insert(cartItems).values({
      cartId: cart.id,
      productId,
      quantity,
    });
  }

  return { message: "Item added to cart" };
}

export async function removeProductFromCart(userId: string, productId: number) {
  if (!userId || !productId) throw new Error("Invalid input");

  const cart = await getUserCart(userId);
  if (!cart) return;

  await db.delete(cartItems)
    .where(and(eq(cartItems.cartId, cart.id), eq(cartItems.productId, productId)));

  return { message: "Item removed from cart" };
}

export async function updateProductQuantity(userId: string, productId: number, quantity: number) {
  if (!userId || !productId || quantity < 1) throw new Error("Invalid input");

  const cart = await getUserCart(userId);
  if (!cart) return;

  await db.update(cartItems)
    .set({ quantity })
    .where(and(eq(cartItems.cartId, cart.id), eq(cartItems.productId, productId)));

  return { message: "Cart item updated" };
}

export async function clearCart(userId: string) {
  const cart = await getUserCart(userId);
  if (!cart) return;

  await db.delete(cartItems).where(eq(cartItems.cartId, cart.id));

  return { message: "Cart cleared" };
}

export async function createOrder(userId: string) {
  const cart = await getUserCart(userId);
  if (!cart) return;

  await db.delete(cartItems).where(eq(cartItems.cartId, cart.id));

  return { message: "Order placed and cart cleared" };
}

export async function getOrders(userId: string) {
  return await db
    .select()
    .from(carts)
    .where(eq(carts.userId, userId));
}

export async function getOrderItems(cartId: number) {
  return await db
    .select()
    .from(cartItems)
    .where(eq(cartItems.cartId, cartId));
}
