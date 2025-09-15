import { CartItem } from "@/types";
import Image from "next/image";
import React from "react";
import CurrencyFormat from "./CurrencyFormat";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import { updateToCart } from "@/store/cartSlice";
import { discountPrice } from "@/lib/utils";
import { memoize } from "proxy-memoize";

export default function ProductCardOne({ item }: { item: CartItem }) {
  const images =
    item.variant.sizeImages && item.variant.sizeImages.length > 0
      ? item.variant.sizeImages[0].url
      : item.variant.colorImages.length > 0 && item.variant.colorImages[0].url;

  const { cart } = useSelector(memoize((state: IRootState) => ({ ...state })));
  const dispatch = useDispatch();

  const handleRemoveItem = (item: CartItem) => {
    const newCart = cart.cartItems.filter(
      (p: CartItem) => p.variant._id !== item.variant._id
    );
    dispatch(updateToCart(newCart));
  };

  return (
    <div className="grid grid-cols-3">
      <Image
        src={images ? images : item.productImage}
        width={100}
        height={0}
        alt="product"
        className="object-contain h-10 w-20"
      />

      <div className="flex flex-col gap-[8px]">
        <p className="text-body-sm-400">{item.productName.substring(0, 40)}</p>
        <div className="inline-flex items-center gap-[4px]">
          <span className="text-body-sm-400 text-gray-600">{item.qty}</span>
          <span className="text-body-sm-400 text-gray-600">x</span>
          <span className="text-body-sm-600 text-secondary-500">
            <CurrencyFormat
              className=""
              value={
                item.variant.discount
                  ? discountPrice(item.variant.price, item.variant.discount)
                  : item.variant.price
              }
            />
          </span>
        </div>
      </div>
      <div className="ms-auto">
        <X
          className="text-gray-400 hover:text-primary-500"
          onClick={() => handleRemoveItem(item)}
        />
      </div>
    </div>
  );
}
