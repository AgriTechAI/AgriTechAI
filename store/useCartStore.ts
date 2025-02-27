// "use client";
// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import { CarousalData } from "@/const/caraousals";

// export type CartProduct = CarousalData & { quantity: number };

// interface CartState {
//   cart: CartProduct[];
//   addToCart: (product: CartProduct) => void;
//   removeFromCart: (id: number) => void;
//   updateQuantity: (id: number, quantity: number) => void;
// }

// export const useCartStore = create<CartState>()(
//   persist(
//     (set, get) => ({
//       cart: [],
//       addToCart: (product) => {
//         set((state) => {
//           const existingProduct = state.cart.find((item) => item.id === product.id);
//           if (existingProduct) {
//             return {
//               cart: state.cart.map((item) =>
//                 item.id === product.id
//                   ? { ...item, quantity: item.quantity + (product.quantity ?? 1) }
//                   : item
//               ),
//             };
//           }
//           return {
//             cart: [...state.cart, { ...product, quantity: product.quantity ?? 1 }],
//           };
//         });
//       },
//       removeFromCart: (id) => {
//         set((state) => ({
//           cart: state.cart.filter((item) => item.id !== id),
//         }));
//       },
//       updateQuantity: (id, quantity) => {
//         set((state) => ({
//           cart: state.cart.map((item) =>
//             item.id === id ? { ...item, quantity } : item
//           ),
//         }));
//       },
//     }),
//     {
//       name: "cart-storage",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );

// useCartStore.ts
"use client";

import {create} from "zustand";
import {
  fetchCartAction,
  addToCartAction,
  updateCartItemAction,
  removeFromCartAction,
  clearCartAction,
} from "@/app/actions/cartActions";

export interface CartItem {
  productId: string;
  quantity: number;
  name?: string;
  price_per_kg?: number;
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
      const items = await fetchCartAction(userId);
      set({
        cart: items.map((item: any) => ({
          productId: item.product.productId.toString(),
          quantity: item.quantity,
          name: item.product.name,
          price_per_kg: Number(item.product.price),
        })),
      });
    } catch (error) {
      console.error("Error fetching cart", error);
      set({ cart: [] });
    }
  },
  addToCart: async (userId, productId, quantity) => {
    try {
      await addToCartAction(userId, Number(productId), quantity);
      await get().fetchCart(userId); 
    } catch (error) {
      console.error("Error adding product to cart", error);
    }
  },
  updateCartItem: async (userId, productId, quantity) => {
    try {
      await updateCartItemAction(userId, Number(productId), quantity);
      await get().fetchCart(userId);
    } catch (error) {
      console.error("Error updating cart item", error);
    }
  },
  removeFromCart: async (userId, productId) => {
    try {
      await removeFromCartAction(userId, Number(productId));
      await get().fetchCart(userId);
    } catch (error) {
      console.error("Error removing product from cart", error);
    }
  },
  clearCart: async (userId) => {
    try {
      await clearCartAction(userId);
      set({ cart: [] });
    } catch (error) {
      console.error("Error clearing cart", error);
    }
  },
}));

// async function getCartItems(cartId: number): Promise<CartItem[]> {
//   const response = await fetch(`/api/cart/${cartId}/items`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch cart items");
//   }
//   const data = await response.json();
//   return data.items;
// }

