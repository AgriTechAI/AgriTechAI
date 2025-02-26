"use client";
import { useCartStore } from "@/store/useCartStore";
import Drawer from "../ui/Drawer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>🛒 Open Cart ({cart.length})</Button>

      <Drawer isOpen={open} onCartIconClick={() => setOpen(false)}>
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-lg font-bold">Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b p-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))
          )}
        </div>
      </Drawer>
    </>
  );
}
