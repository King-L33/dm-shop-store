import React from "react";
import TopBar from "./TopBar";
import SocialMenu from "./SocialMenu";
import MainMenu from "./MainMenu";
import Menus from "./Menus";
// import { getCategories } from "@/actions/category";
// import { getPages } from "@/actions/page";
// import { getProducts } from "@/actions/product";
// import { getCampaigns } from "@/actions/campaign";
import { getFallbackData } from "@/lib/api-fallback";

export default async function Header() {
  // Use fallback data directly to avoid API call issues
  const pages = getFallbackData('pages');
  const categories = getFallbackData('categories');
  const products = getFallbackData('products');
  const campaigns = getFallbackData('campaigns').filter(c => c.type === "homepage-product-best-deals-section");

  return (
    <header className="">
      <TopBar />
      <SocialMenu className="hidden lg:block" />
      <MainMenu />
      <Menus
        pages={pages}
        categories={categories}
        products={products}
        campaigns={campaigns}
      />
    </header>
  );
}
