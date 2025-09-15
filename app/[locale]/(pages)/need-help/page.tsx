import Breadcrumbs from "@/components/custom/Breadcrumbs";
import Container from "@/components/custom/Container";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

export const revalidate = 3600;

export default function page() {
  return (
    <>
      <Breadcrumbs page="need help" />
      <section className="py-10">
        <Container>
          <div className="flex flex-col gap-4">
            <h1>Frequently asked questions</h1>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is multi-vendor in ecommerce?
                </AccordionTrigger>
                <AccordionContent>
                  A multi vendor ecommerce website is a platform where multiple
                  sellers can sell their products or services. This type of
                  marketplace is also sometimes called a marketplace model or
                  online marketplace. Some of the most popular examples of Multi
                  Vendor ecommerce marketplaces are Amazon, eBay, and Etsy.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How can I sell on the Marketplace?
                </AccordionTrigger>
                <AccordionContent>
                  Clik on become a seller button on the top right corner, you
                  will be redirected to the dashboard platform, click on join
                  for free and the create an account with a google account or
                  with a email. after logging create a new store and start
                  building your store with products. your store need to be
                  approve by the admin to be online.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Is there any fees for sellers ?
                </AccordionTrigger>
                <AccordionContent>
                  there is no fees when you are a seller but you have choice to
                  upgrade your account to premium in order to grow your store
                  quickly with a lot of features such as campaigns on the
                  marketplace, emailing, creating mutiple store and so.....
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How about shipping ?</AccordionTrigger>
                <AccordionContent>
                  As a seller you can manage shipping for a product at your own.
                  On your dashboard you have to create all shipping as much as
                  you can in order to fill your customer&apos;s need
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How about earning money from orders ?
                </AccordionTrigger>
                <AccordionContent>
                  Earnings from your sales will be credited to your Seller
                  Balance within 2 to 7 working days when either: Buyer confirms
                  order has been received or, The return/refund (RR) period
                  (i.e. buyers have up to 15 days after the order is delivered
                  to raise RR) for buyer ends and the order is completed
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How about withdrawal ?</AccordionTrigger>
                <AccordionContent>
                  After the completion of an order, your earnings will be
                  credited to your Seller Balance. You can then withdraw and
                  deposit the earnings into your paypal account manually.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Join customer support ?</AccordionTrigger>
                <AccordionContent>
                  You can join customer support by using the chat box on the
                  corner bottom of this page.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "FAQ - Orion - Ecommerce",
  description:
    "A Ecommerce app. We are selling everything, shoes for mens womens and kids",
  icons: {
    icon: "/assets/logo/mobile_black.svg",
  },
};
