import React, { useEffect, useState } from "react";
import { TypeProductModel, TypeProductVariantModel } from "@/types/models";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

export default function ProductDesription({
  product,
}: {
  product: TypeProductModel;
}) {
  const [activeOption, setActiveOption] = useState<string>(
    product.productVariants[0]?._id
  );
  const [activeOptionVariant, setActiveOptionVariant] =
    useState<TypeProductVariantModel>();
  const [activeSizes, setActiveSizes] = useState<
    TypeProductVariantModel[] | undefined
  >();

  // Derive colors using useMemo to prevent infinite re-renders
  const colors = React.useMemo(() => {
    const uniqueColors: TypeProductVariantModel[] = [];
    const seenColorIds = new Set<string>();
    
    product.productVariants.forEach((variant: TypeProductVariantModel) => {
      if (!seenColorIds.has(variant.color._id)) {
        seenColorIds.add(variant.color._id);
        uniqueColors.push(variant);
      }
    });
    
    return uniqueColors;
  }, [product.productVariants]);

  useEffect(() => {
    setActiveOptionVariant(
      product.productVariants.find((p) => p._id === activeOption)
    );
  }, [activeOption, product.productVariants]);

  useEffect(() => {
    setActiveSizes(
      product.productVariants.filter(
        (p) => activeOptionVariant?.color._id == p.color._id
      )
    );
  }, [activeOptionVariant]);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-[56px]`}>
      <ProductImage
        product={product}
        activeOptionVariant={activeOptionVariant}
      />

      <ProductDetails
        product={product}
        activeSizes={activeSizes}
        setActiveOption={setActiveOption}
        activeOptionVariant={activeOptionVariant}
        colors={colors}
      />
    </div>
  );
}
