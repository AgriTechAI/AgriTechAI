"use client";
import React from "react";
import { useCartStore } from "@/store/useCartStore";
import { CarousalData } from "@/const/caraousals";

interface AddToCartButtonProps {
  product: CarousalData;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <button
      type="button"
      className="relative flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-2 px-6 rounded-2xl shadow-md hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300"
      onClick={handleAddToCart}
      aria-label={`Add ${product.name} to cart`}
    >
      <span className="text-lg">🛒</span>
      <span>Add to Cart</span>
    </button>
  );
};

export default AddToCartButton;
