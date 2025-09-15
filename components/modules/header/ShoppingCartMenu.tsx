import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CurrencyFormat from "@/components/custom/CurrencyFormat";
import { RectangleButton } from "@/components/custom/RectangleButton";
import { cn, discountPrice } from "@/lib/utils";
import { m } from "framer-motion";
import { CartItem } from "@/types";
import ProductCardOne from "@/components/custom/ProductCardOne";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { ShoppingBasket } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import { memoize } from "proxy-memoize";

export default function ShoppingCartMenu({
  openShoppingCart,
  setOpenShoppingCart,
}: {
  openShoppingCart: boolean;
  setOpenShoppingCart: (v: boolean) => void;
}) {
  // const router = useRouter();
  const { cart } = useSelector(memoize((state: IRootState) => ({ ...state })));
  const subtotal =
    cart.cartItems && cart.cartItems.length > 0
      ? cart.cartItems.reduce(
          (accumulator: number, currentValue: CartItem) =>
            accumulator +
            discountPrice(
              currentValue.variant.price,
              currentValue.variant.discount
            ) *
              currentValue.qty,
          0
        )
      : 0;

  const router = useRouter();
  return (
    <m.div
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "hidden absolute top-[65px] right-5 w-[464px]  z-50 shadow-lg",
        openShoppingCart && "block"
      )}
      onMouseLeave={() => setOpenShoppingCart(!openShoppingCart)}
    >
      <Card className="rounded-none">
        <CardHeader className="py-[16px] px-[24px] border-b">
          <CardTitle className="font-[500] text-sm">
            Shopping Cart ({cart.cartItems && cart.cartItems.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="py-[16px] px-[24px] flex flex-col gap-[16px] h-[200px] overflow-auto">
          {cart.cartItems && cart.cartItems.length > 0 ? (
            cart.cartItems.map((item: CartItem, idx: number) => (
              <ProductCardOne key={idx} item={item} />
            ))
          ) : (
            <div className="flex flex-col gap-1 items-center">
              <ShoppingBasket className="text-slate-700 font-bold" size={100} />
              <h5 className="">Your cart is empty</h5>
            </div>
          )}
        </CardContent>
        <CardFooter className="py-[16px] px-[24px] flex flex-col gap-[16px] w-full border-t">
          <div className="flex justify-between w-full">
            <span className="text-body-sm-400">Sub-Total:</span>
            <CurrencyFormat
              className="text-right text-body-sm-500 font-[500]"
              value={subtotal}
              suffix={true}
            />
          </div>
          <RectangleButton
            onClick={() =>
              toast({
                variant: "default",
                title: "Great✔️",
                description:
                  "You just found out a new feature subscribe to get notified.",
                action: (
                  <ToastAction altText={`Subsribe`}>
                    <Link href={`https://www.youtube.com/@sylvaincodes593`}>
                      Subscribe
                    </Link>
                  </ToastAction>
                ),
              })
            }
            variant="primary"
            size="lg"
            icon="after"
            className="w-full uppercase"
          >
            Checkout now
          </RectangleButton>
          <RectangleButton
            onClick={() => router.push("/cart")}
            variant="primary-outline"
            size="lg"
            icon="none"
            className="uppercase w-full "
          >
            View Cart
          </RectangleButton>
          <div></div>
        </CardFooter>
      </Card>
    </m.div>
  );
}
