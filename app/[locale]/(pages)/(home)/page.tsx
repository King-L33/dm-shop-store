// import Payments from "@/components/custom/Payments";
// import BestDeals from "@/components/modules/best-deals";
// import Categories from "@/components/modules/categories";
// import HomeSlide from "@/components/modules/hero/HomeSlide";
import { Metadata } from "next";
import * as React from "react";
// import Collections from "@/components/modules/collections";
// import Newsletters from "@/components/modules/newsletters";
// import { getProducts } from "@/actions/product";
// import { getCampaign, getCampaigns } from "@/actions/campaign";
// import Firework from "@/components/custom/Firework"

export const revalidate = 3600;

export default async function Home() {
  // Temporarily disable API calls to test components
  // const products = await getProducts();
  // const firstZone = await getCampaign("homepage-slideshow-first-zone");
  // const secondZone = await getCampaign("homepage-slideshow-second-zone");
  // const thirdZone = await getCampaign("homepage-slideshow-third-zone");
  // const campaigns = await getCampaigns("homepage-product-best-deals-section");
  // const campaignsCta = await getCampaigns("homepage-cta-small-first-zone");
  // const campaignsCtaTwo = await getCampaigns("homepage-cta-small-second-zone");

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to DM Shop
      </h1>
      <p className="text-center text-lg mb-8">
        Multi-vendor marketplace for South Africa
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Multi-Vendor</h3>
          <p>Browse products from multiple sellers in one place</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">South African</h3>
          <p>Designed specifically for the South African market</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
          <p>Safe and secure payment processing with Paystack</p>
        </div>
      </div>
      
      {/* Test individual components */}
      {/* <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
        <Payments />
      </div> */}
      
      {/* <HomeSlide
        firstZone={firstZone}
        secondZone={secondZone}
        thirdZone={thirdZone}
      />
      <BestDeals products={products} campaigns={campaigns} />
      <Categories campaigns={campaignsCta} campaignsTwo={campaignsCtaTwo} />
      <Collections products={products} />
      <Newsletters /> */}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Home - DM Shop - Ecommerce",
  description:
    "Multi-vendor marketplace customer storefront for the South African e-commerce market",
  icons: {
    icon: "/assets/logo/mobile_black.svg",
  },
};
