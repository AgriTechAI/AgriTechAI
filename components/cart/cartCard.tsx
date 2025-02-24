import React from "react";
import { CartProduct } from "@/types";
import { useCartStore } from "@/store/useCartStore";
import { Trash2 } from "lucide-react"; // Importing a trash icon for the delete button

interface Props {
  product: CartProduct;
}

const CartCard: React.FC<Props> = ({ product }) => {
  const removeFromCart = useCartStore(state => state.removeFromCart);

  // Ensure price_per_kg is a number and provide a default value of 0 if undefined
  const price = product.price_per_kg ?? 0;

  // Handle remove from cart
  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <li className="flex items-center justify-between p-4 mb-4 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div>
        <h4 className="text-lg font-bold text-green-800">{product.name}</h4>
        <p className="text-sm text-green-600">Category: {product.name}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-green-900">${price.toFixed(2)}</p>
        <p className="text-sm text-green-700">Qty: {product.quantity ?? 1}</p>
      </div>
      <button 
        onClick={handleRemove} 
        className="ml-4 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none transition-colors duration-200"
        title="Remove from cart"
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
};

export default CartCard;
