import { create } from "zustand";

export interface CartItem {
  productId: string;
  quantity: number;
  name?: string;
  price: number;
}

interface CartState {
  cart: CartItem[];
  fetchCart: (userId: string) => Promise<void>;
  addToCart: (userId: string, productId: string, quantity: number) => Promise<void>;
  updateCartItem: (userId: string, productId: string, quantity: number) => Promise<void>;
  removeFromCart: (userId: string, productId: string) => Promise<void>;
  clearCart: (userId: string) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  
  fetchCart: async (userId: string) => {
    try {
      const response = await fetch(`/api/cart?userId=${userId}`);
      if (!response.ok) throw new Error("Failed to fetch cart");
  
      const data = await response.json();
      set({
        cart: data.cartItems.map((item: any) => ({
          id: item.id,
          productId: item.productId,
          quantity: item.quantity,
          name: item.name || "Unknown Product",
          price: parseFloat(item.price) || 0,
          imageUrl: item.imageUrl || "",
        })),
      });
    } catch (error) {
      console.error("Error fetching cart", error);
      set({ cart: [] });
    }
  },

  addToCart: async (userId, productId, quantity) => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, productId, quantity }),
      });

      if (!response.ok) throw new Error('Failed to add to cart');
      await get().fetchCart(userId);
    } catch (error) {
      console.error("Error adding product to cart", error);
    }
  },

  updateCartItem: async (userId, productId, quantity) => {
    try {
      const response = await fetch('/api/cart', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, productId, quantity }),
      });

      if (!response.ok) throw new Error('Failed to update cart item');
      await get().fetchCart(userId);
    } catch (error) {
      console.error("Error updating cart item", error);
    }
  },

  removeFromCart: async (userId, productId) => {
    try {
      await fetch('/api/cart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, productId }),
      });
      await get().fetchCart(userId);
    } catch (error) {
      console.error("Error removing product from cart", error);
    }
  },

  clearCart: async (userId) => {
    const { cart } = get();
    for (const item of cart) {
      await get().removeFromCart(userId, item.productId);
    }
  },
}));
