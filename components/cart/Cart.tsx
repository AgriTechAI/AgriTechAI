import { CarousalData } from "@/const/caraousals";
import CartItem from "./cartitem";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";

// Define the type for the cart products
type CartProduct = CarousalData & { quantity?: number };

export default function Cart() {
  // Specify that cart is an array of CartProduct
  const cart = useCartStore(state => state.cart as CartProduct[]);

  // Calculate total price
  const total = cart.reduce((acc, product) => acc + (product.price_per_kg ?? 0), 0);

  return (
    <section className="bg-green-50 p-6 rounded-lg shadow-md max-w-3xl mx-auto my-8">
      <h3 className="text-3xl font-extrabold text-green-800 mb-6">Shopping Cart</h3>
      <ul className="space-y-4">
        {cart.map(product => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div className="flex justify-between items-center mt-6 border-t pt-4">
        <span className="text-xl font-bold text-green-700">Total:</span>
        <span className="text-2xl font-bold text-green-900">${total.toFixed(2)}</span>
      </div>
      <div className="mt-6 flex gap-4">
        <Link href={"/checkout"}>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none">
            Proceed to Checkout
          </button>
        </Link>
        <Link href={"/cart"}>
          <button className="w-full bg-green-400 text-white py-3 rounded-lg hover:bg-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none">
            Edit Cart
          </button>
        </Link>
      </div>
    </section>
  )
}
