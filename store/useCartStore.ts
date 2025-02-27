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

import { create } from "zustand";
import {
  getUserCart,
  addProductToCart,
  updateProductQuantity,
  removeProductFromCart,
  clearCart,
  getCartItems,
} from "@/lib/db/helper";

interface CartItem {
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

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  fetchCart: async (userId) => {
    const cart = await getUserCart(userId);
    if (cart) {
      const items = await getCartItems(cart.id);
      set({ cart: items.map(({ product, quantity }) => ({ productId: product.productId.toString(), quantity, price_per_kg: Number(product.price),name:product.name })) });
    } else {
      set({ cart: [] });
    }
  },

  addToCart: async (userId, productId, quantity) => {
    await addProductToCart(userId, Number(productId), quantity);
    await useCartStore.getState().fetchCart(userId); // Refresh cart from DB
  },

  updateCartItem: async (userId, productId, quantity) => {
    await updateProductQuantity(userId, Number(productId), quantity);
    await useCartStore.getState().fetchCart(userId); // Refresh cart from DB
  },

  removeFromCart: async (userId, productId) => {
    await removeProductFromCart(userId, Number(productId));
    await useCartStore.getState().fetchCart(userId); // Refresh cart from DB
  },

  clearCart: async (userId) => {
    await clearCart(userId);
    set({ cart: [] });
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

