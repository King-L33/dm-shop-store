"use client";
import React, { useState } from "react";

import { ShoppingCart, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ShoppingCartMenu from "./ShoppingCartMenu";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { memoize } from "proxy-memoize";

export default function IconsGroup({ className }: { className?: string }) {
  const router = useRouter();

  const [openShoppingCart, setOpenShoppingCart] = useState(false);
  const { cart } = useSelector(memoize((state: IRootState) => ({ ...state })));

  return (
    <div className={className}>
      <Button variant="icon">
        <ShoppingCart
          size={32}
          onClick={() => setOpenShoppingCart(!openShoppingCart)}
        />
        <span className="rounded-full grid bg-white place-content-center text-gray-700 font-bold h-6 w-6 -top-1 right-1 absolute">
          {cart.cartItems ? cart.cartItems.length : 0}
        </span>
      </Button>
      {/* <Button variant="icon" onClick={() => router.push('/wishlist')}>
        <Heart size={32} />
      </Button> */}
      <Button variant="icon" onClick={() => router.push("/customer/dashboard")}>
        <User2 size={32} />
      </Button>
      <ShoppingCartMenu
        openShoppingCart={openShoppingCart}
        setOpenShoppingCart={setOpenShoppingCart}
      />
    </div>
  );
}
