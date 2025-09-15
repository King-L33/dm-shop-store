"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypeProductModel } from "@/types/models";
import React from "react";
import Review from "../reviews";
import parse from "html-react-parser";

export function ProductTabs({
  className,
  product,
}: {
  className?: string;
  product: TypeProductModel;
}) {
  return (
    <section className="my-20">
      <Tabs defaultValue="descriptions" className={`${className}`}>
        <TabsList className="flex  w-full overflow-auto lg:overflow-hidden bg-transparent">
          <TabsTrigger
            className="w-fit lg:w-60 data-[state=active]:border-b-4 data-[state=active]:border-primary-500"
            value="descriptions"
          >
            DESCRIPTION
          </TabsTrigger>
          <TabsTrigger
            className="w-full lg:w-60 data-[state=active]:border-b-4 data-[state=active]:border-primary-500"
            value="additionnals"
          >
            ADDITIONAL INFORMATION
          </TabsTrigger>
          <TabsTrigger
            className="w-full lg:w-60 data-[state=active]:border-b-4 data-[state=active]:border-primary-500"
            value="specifications"
          >
            SPECIFICATION
          </TabsTrigger>
          <TabsTrigger
            className="w-fit lg:w-60 data-[state=active]:border-b-4 data-[state=active]:border-primary-500"
            value="reviews"
          >
            REVIEW
          </TabsTrigger>
        </TabsList>
        <TabsContent value="descriptions" className="mt-0">
          <Card className="rounded-none">
            <CardContent className="p-8 text-pretty leading-10">
              {parse(product.description)}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="additionnals" className="mt-0">
          <Card className="rounded-none">
            <CardContent className="p-8 text-pretty leading-10">
              {parse(product.additionnal)}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="specifications" className="mt-0">
          <Card className="rounded-none">
            <CardContent className="p-8 text-pretty leading-10">
              {parse(product.specification)}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews" className="mt-0">
          <Card className="rounded-none">
            <CardContent className="p-8">
              <Review product={product} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
