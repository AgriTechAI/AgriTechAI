import { NextResponse } from 'next/server';
import {
  getUserCart,
  addProductToCart,
  updateProductQuantity,
  removeProductFromCart,
  clearCart,
  getCartItems,
} from "@/lib/db/helper";

// GET /api/cart?userId=<userId>
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
  }
  try {
    const cart = await getUserCart(userId);
    if (cart) {
      const items = await getCartItems(cart.id);
      return NextResponse.json(items, { status: 200 });
    }
    return NextResponse.json([], { status: 200 });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/cart
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, productId, quantity } = body;
    if (!userId || !productId || !quantity) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    await addProductToCart(userId, Number(productId), quantity);
    return NextResponse.json({ message: 'Added to cart' }, { status: 200 });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PUT /api/cart
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { userId, productId, quantity } = body;
    if (!userId || !productId || !quantity) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    await updateProductQuantity(userId, Number(productId), quantity);
    return NextResponse.json({ message: 'Cart item updated' }, { status: 200 });
  } catch (error) {
    console.error("Error updating cart item:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE /api/cart
export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { userId, productId } = body;
    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }
    if (productId) {
      // Remove specific product
      await removeProductFromCart(userId, Number(productId));
      return NextResponse.json({ message: 'Product removed from cart' }, { status: 200 });
    } else {
      // Clear entire cart
      await clearCart(userId);
      return NextResponse.json({ message: 'Cart cleared' }, { status: 200 });
    }
  } catch (error) {
    console.error("Error in delete operation:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}