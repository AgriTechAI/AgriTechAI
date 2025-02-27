"use server";

import {
  getUserCart,
  addProductToCart,
  updateProductQuantity,
  removeProductFromCart,
  clearCart,
  getCartItems,
} from "@/lib/db/helper";

export async function fetchCartAction(userId: string) {
  const cart = await getUserCart(userId);
  if (cart) {
    const items = await getCartItems(cart.id);
    return items;
  }
  return [];
}

export async function addToCartAction(userId: string, productId: number, quantity: number) {
  await addProductToCart(userId, productId, quantity);
}

export async function updateCartItemAction(userId: string, productId: number, quantity: number) {
  await updateProductQuantity(userId, productId, quantity);
}

export async function removeFromCartAction(userId: string, productId: number) {
  await removeProductFromCart(userId, productId);
}

export async function clearCartAction(userId: string) {
  await clearCart(userId);
}
