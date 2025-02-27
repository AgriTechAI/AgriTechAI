"use client";
import { useCartStore } from "@/store/useCartStore";
import Drawer from "../ui/Drawer";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function CartDrawer() {
  const { cart, fetchCart, removeFromCart, updateCartItem } = useCartStore();
  const userId = "123456789";
  const [open, setOpen] = useState(false);

  // Fetch cart when the drawer is opened
  useEffect(() => {
    if (open) {
      fetchCart(userId);
    }
  }, [open, fetchCart, userId]);

  const totalAmount = cart.reduce((total, item) => total + item.quantity * (item.price_per_kg || 0), 0);

  return (
    <>
      <Button onClick={() => setOpen(true)}>🛒 Open Cart ({cart.length})</Button>

      <Drawer isOpen={open} onCartIconClick={() => setOpen(false)}>
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-lg font-bold">Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.productId} className="flex justify-between items-center border-b p-2">
                  <div>
                    <p className="font-semibold text-black">{item.name || "Product Name"}</p>
                    <p>Price: ₹{item.price_per_kg || 0}</p>
                    <p>Quantity: {item.quantity}</p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateCartItem(userId, item.productId, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateCartItem(userId, item.productId, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromCart(userId, item.productId)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <div className="mt-4 font-bold text-lg">
                Total: ₹{totalAmount.toFixed(2)}
              </div>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
}
