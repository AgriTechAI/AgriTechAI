"use client"; // ✅ Add this at the top

import { useCartStore } from "@/store/useCartStore";
import { CartProduct } from "@/types";
import CartCard from "@/components/cart/cartCard";
import Link from "next/link";
import { Component } from "@/components/ui/breadCrumb";

export default function Pages() {
  const cart = useCartStore((state) => state.cart as CartProduct[]);
  
  const total = cart.reduce(
    (acc, product) => acc + (product.price_per_kg ?? 0) * (product.quantity ?? 1),
    0
  );

  return (
    <>
      <Component />
      <div className="p-4 m-4 flex flex-col sm:flex-row">
        {/* Product Table */}
        <div className="bg-lime-200 p-4 m-2 w-full sm:w-2/3 rounded-md">
          <h1 className="text-2xl text-black mb-4">Your Cart</h1>
          <div className="flex justify-between items-center gap-x-4 border-b-2 p-4 border-gray-300 text-black font-bold mb-4">
            <div>Product</div>
            <div>Quantity</div>
            <div>Price</div>
            <div>Action</div>
          </div>
          <ul>
            {cart.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}
          </ul>
        </div>

        {/* Cart Total Section */}
        <div className="bg-black text-white flex flex-col p-4 m-2 rounded-md w-full sm:w-1/3">
          <h2 className="text-xl font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between text-xl border-b-2 py-2 border-b-slate-400 font-bold my-2">
            <p>Sub total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="flex w-full">
            <Link
              href={"/checkout"}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
