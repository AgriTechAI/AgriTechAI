import { CarousalData } from "@/const/caraousals";

// Define the type for CartItem's props
type CartProduct = CarousalData & { quantity?: number };

interface Props {
  product: CartProduct;
}

export default function CartItem({ product }: Props) {
  return (
    <li className="flex justify-between items-center bg-green-100 p-4 rounded-lg shadow-sm">
      <div>
        <h4 className="font-semibold text-green-800">{product.name}</h4>
        <p className="text-sm text-green-600">Category: {product.name}</p>
      </div>
      <span className="text-lg font-bold text-green-900">
        ${(product.price_per_kg ?? 0).toFixed(2)}
      </span>
    </li>
  );
}
