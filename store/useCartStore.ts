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
import { create } from "zustand";

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
    userId = "123456789";
    try {
      const response = await fetch(`/api/cart?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cart');
      }
      const items = await response.json();
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
      // Optimistic update
      set(state => ({
        cart: [
          ...state.cart,
          { productId, quantity, name: "", price_per_kg: 0 },
        ],
      }));

      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productId, quantity }),
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }

      // Re-fetch cart to sync with backend
      await get().fetchCart(userId);
    } catch (error) {
      console.error("Error adding product to cart", error);
      // Revert optimistic update
      set(state => ({
        cart: state.cart.filter(item => item.productId !== productId),
      }));
    }
  },
  updateCartItem: async (userId, productId, quantity) => {
    const previousCart = get().cart; // Store previous state for revert
    try {
      // Optimistic update
      set(state => ({
        cart: state.cart.map(item =>
          item.productId === productId
            ? { ...item, quantity }
            : item
        ),
      }));

      const response = await fetch('/api/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productId, quantity }),
      });

      if (!response.ok) {
        throw new Error('Failed to update cart item');
      }

      // Re-fetch cart to sync with backend
      await get().fetchCart(userId);
    } catch (error) {
      console.error("Error updating cart item", error);
      // Revert to previous state
      set({ cart: previousCart });
    }
  },
  removeFromCart: async (userId, productId) => {
    const itemToRemove = get().cart.find(item => item.productId === productId);
    try {
      // Optimistic update
      set(state => ({
        cart: state.cart.filter(item => item.productId !== productId),
      }));

      const response = await fetch('/api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productId }),
      });

      if (!response.ok) {
        throw new Error('Failed to remove from cart');
      }

      // Re-fetch cart to sync with backend
      await get().fetchCart(userId);
    } catch (error) {
      console.error("Error removing product from cart", error);
      // Revert by adding back the item
      if (itemToRemove) {
        set(state => ({
          cart: [...state.cart, itemToRemove],
        }));
      }
    }
  },
  clearCart: async (userId) => {
    const previousCart = get().cart; // Store previous state for revert
    try {
      const response = await fetch('/api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to clear cart');
      }

      set({ cart: [] });
    } catch (error) {
      console.error("Error clearing cart", error);
      // Revert to previous state or refetch
      set({ cart: previousCart });
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

