import CurrencyFormat from "@/components/custom/CurrencyFormat";
import ProductItem from "@/components/custom/ProductItem";
import { RectangleButton } from "@/components/custom/RectangleButton";
import { cn } from "@/lib/utils";
import { TypeCartItemModel, TypeCartModel } from "@/types/models";
import { Loader2Icon, LucideMoveUp } from "lucide-react";
import React from "react";

export default function Checkout({
  subtotal,
  shipping,
  total,
  className,
  placeOrder,
  proceedToShipping,
  loading,
  cart,
}: {
  subtotal: number;
  coupon?: number;
  tax?: number;
  shipping?: number;
  total: number;
  className: string;
  placeOrder?: () => void;
  proceedToShipping?: () => void;
  loading: boolean;
  cart?: TypeCartModel;
}) {
  return (
    <div
      className={`flex h-fit border boder-border p-4 w-full lg:w-fit min-w-[360px] flex-col gap-4 ${className}`}
    >
      {cart && (
        <div className="flex flex-col gap-4 pb-4">
          <h3>Order summary</h3>
          <div className="flex flex-col gap-1">
            {cart.cartItems.length > 0 &&
              cart.cartItems.map((item: TypeCartItemModel, idx) => (
                <ProductItem item={item} key={idx} />
              ))}
          </div>
        </div>
      )}
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>
          <CurrencyFormat className="text-right" value={subtotal} />
        </span>
      </div>
      <hr />

      <div className="flex justify-between">
        <div className="flex">
          <span>Shipping</span>
          <LucideMoveUp size={12} className="text-red-500" />
        </div>
        <span className="">
          <CurrencyFormat
            className="text-right"
            value={shipping ? shipping : 0}
          />
        </span>
      </div>
      <hr />

      {/* //TODO:Create discount */}
      {/* <div className="flex justify-between">
        <div className="flex">
          <span>Discount</span>
          <MoveDown size={12} className="text-green-500" />
        </div>

        <span className="">
          <CurrencyFormat className="text-right" value={coupon ? coupon : 0} />
        </span>
      </div>
      <hr /> */}

      {/* //TODO:Create tax on ckeckout */}
      {/* <div className="flex justify-between">
        <div className="flex">
          <span>Tax (TVQ+TPS)</span>
          <LucideMoveUp size={10} className="text-red-500" />
        </div>

        <span className="">
          <CurrencyFormat className="text-right" value={tax ? tax : 0} />
        </span>
      </div> 
      <hr />
      */}

      <div className="flex justify-between">
        <strong>Grand Total</strong>
        <strong>
          <CurrencyFormat className="text-right" value={total} />
        </strong>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {proceedToShipping && (
          <RectangleButton
            variant="primary"
            icon="none"
            size="lg"
            onClick={() => proceedToShipping()}
            disabled={loading}
            className="rounded-none"
          >
            Proceed to shipping
          </RectangleButton>
        )}

        {placeOrder && (
          <RectangleButton
            variant="primary"
            icon="none"
            size="lg"
            onClick={() => placeOrder()}
            disabled={loading}
            className="rounded-none"
          >
            <Loader2Icon
              className={cn(
                "hidden mr-2 h-6 w-6 animate-spin ",
                loading && "block"
              )}
            />
            Proceed to payment
          </RectangleButton>
        )}
      </div>
    </div>
  );
}
