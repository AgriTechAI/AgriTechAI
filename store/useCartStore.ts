"use client"
import { create } from "zustand";
import { CarousalData } from "@/const/caraousals";

// Define the type for the cart products
export type CartProduct = CarousalData & { quantity?: number };

interface CartState {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({ 
      cart: [...state.cart, { ...product, quantity: product.quantity ?? 1 }] 
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));
