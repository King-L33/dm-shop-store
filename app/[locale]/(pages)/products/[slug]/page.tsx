import { getProduct, getProducts } from "@/actions/product";
import Breadcrumbs from "@/components/custom/Breadcrumbs";
import Collections from "@/components/modules/collections";
import Products from "@/components/modules/products";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { TypeProductModel } from "@/types/models";
import React from "react";

export const revalidate = 3600; // 1h

// Helper function to sanitize product data and break circular references
function sanitizeProductData(product: TypeProductModel): TypeProductModel {
  if (!product) return product;

  return {
    ...product,
    // Break circular reference in store
    store: product.store ? {
      ...product.store,
      products: [], // Remove circular reference
      orders: [], // Remove potential circular reference
      slides: [] // Remove potential circular reference
    } : product.store,
    
    // Break circular reference in category
    category: product.category ? {
      ...product.category,
      subCategory: [] // Remove potential circular reference
    } : product.category,
    
    // Break circular references in subCategories
    subCategories: product.subCategories?.map(subCat => ({
      ...subCat,
      category: subCat.category ? {
        _id: subCat.category._id,
        name: subCat.category.name,
        slug: subCat.category.slug,
        description: subCat.category.description,
        image: subCat.category.image,
        user_id: subCat.category.user_id,
        status: subCat.category.status,
        createdAt: subCat.category.createdAt,
        subCategory: [] // Remove circular reference
      } : subCat.category
    })) || [],
    
    // Break circular references in productVariants
    productVariants: product.productVariants?.map(variant => ({
      ...variant,
      // Break circular reference in color
      color: variant.color ? {
        ...variant.color,
        store: undefined // Remove circular reference
      } : variant.color,
      
      // Break circular reference in size
      size: variant.size ? {
        ...variant.size,
        store: undefined // Remove circular reference
      } : variant.size
    })) || [],
    
    // Break circular references in collections
    collections: product.collections?.map(collection => ({
      _id: collection._id,
      name: collection.name,
      description: collection.description,
      slug: collection.slug,
      color: collection.color,
      image: collection.image,
      user_id: collection.user_id,
      status: collection.status,
      createdAt: collection.createdAt
    })) || [],
    
    // Break circular references in tags
    tags: product.tags?.map(tag => ({
      _id: tag._id,
      name: tag.name,
      description: tag.description,
      slug: tag.slug,
      image: tag.image,
      user_id: tag.user_id,
      status: tag.status,
      createdAt: tag.createdAt
    })) || []
  };
}
// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function page({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  const products = await getProducts();

  // Sanitize product data to prevent circular references
  const sanitizedProduct = product ? sanitizeProductData(product) : null;
  const sanitizedProducts = products?.map(p => sanitizeProductData(p)) || [];
  return (
    <>
      <Breadcrumbs product={sanitizedProduct} />
      <Products product={sanitizedProduct} />
      <Collections products={sanitizedProducts} />
    </>
  );
}

// automatically add any further dynamic segment in generateStaticParams for example if a new product has been approved by admin it will added statically cached
export const dynamicParams = true;

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return [];
}

// SEO Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const product = await getProduct(params.slug);
  const images = product && product.images[0].url;
 
  return {
    title: `Buy ${params.slug} - Orion`,
    description: "Online Ecommerce for selling anything electronics",
    icons: {
      icon: "/assets/logo/mobile_black.svg",
    },

    //For SEO: Sharing on social media twitter, whatsapp, Linkeidn etc
    openGraph: mergeOpenGraph({
      title: `Buy ${product && product.name.substring(0, 60)}`,
      url: `/${params.locale}/products/${params.slug}`,
      images: `${images}`,
      description: `${
        product && product.seoDescription
          ? product.seoDescription.substring(0, 60)
          : product.description
      }`,
    }),
  };
}
