"use client";
import Container from "@/components/custom/Container";
import React from "react";
import ProductCard from "./ProductCard";
// import { useTranslations } from "next-intl";
import { TypeProductModel } from "@/types/models";

export default function Collections({
  products,
}: {
  products: TypeProductModel[];
}) {
  // const t = useTranslations("home.main");

  return (
    <section className="py-10">
      <Container>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-6">
          <div className="flex flex-col gap-4">
            <h6 className="text-body-md-600 capitalize">flash sale today</h6>
            <div className="flex flex-col gap-4">
              {products &&
                products
                  .slice(0, 3)
                  .map((item: TypeProductModel) => (
                    <ProductCard item={item} key={item._id} />
                  ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-body-md-600 capitalize">best sellers</h6>
            <div className="flex flex-col gap-4">
              {products &&
                products
                  .slice(0, 3)
                  .map((item: TypeProductModel) => (
                    <ProductCard item={item} key={item._id} />
                  ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-body-md-600 capitalize">top rated</h6>
            <div className="flex flex-col gap-4">
              {products &&
                products
                  .slice(0, 3)
                  .map((item: TypeProductModel) => (
                    <ProductCard item={item} key={item._id} />
                  ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-body-md-600 capitalize">new arrival</h6>
            <div className="flex flex-col gap-4">
              {products &&
                products
                  .slice(0, 3)
                  .map((item: TypeProductModel) => (
                    <ProductCard item={item} key={item._id} />
                  ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
