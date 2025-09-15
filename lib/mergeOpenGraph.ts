import type { Metadata } from "next";

// Default open graph
const defaultOpenGraph: Metadata["openGraph"] = {
  title: "Orion - Multi Vendor Ecommerce platform.",
  description: "Orion - Multi Vendor Ecommerce platform",
  images: [
    {
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/logo/mobile_black.svg`,
    },
  ],
  type: "website",
  url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  siteName: "Orion",
};

// Dynamic open graph
export const mergeOpenGraph = (og?: Metadata["openGraph"]) => {
  return {
    ...defaultOpenGraph,
    ...og,
    image: og?.images ? og.images : defaultOpenGraph.images,
    title: og?.title ? og.title : defaultOpenGraph.title,
    url: og?.url ? og.url : defaultOpenGraph.url,
  };
};
