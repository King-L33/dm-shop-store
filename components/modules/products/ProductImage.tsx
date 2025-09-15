import {
  Image as TypeImage,
  TypeProductModel,
  TypeProductVariantModel,
} from "@/types/models";
import React, { useEffect, useState, useMemo } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProductImage({
  activeOptionVariant,
  product,
}: {
  activeOptionVariant?: TypeProductVariantModel;
  product: TypeProductModel;
}) {
  // Derive current variant images using useMemo to avoid circular dependencies
  const currentVariantImages = useMemo(() => {
    if (activeOptionVariant?.sizeImages && activeOptionVariant.sizeImages.length > 0) {
      return activeOptionVariant.sizeImages;
    }
    if (activeOptionVariant?.colorImages && activeOptionVariant.colorImages.length > 0) {
      return activeOptionVariant.colorImages;
    }
    return product.images;
  }, [activeOptionVariant, product.images]);

  const [activeImage, setActiveImage] = useState<string>(
    currentVariantImages[0]?.url || product.images[0]?.url || '/assets/images/placeholder.png'
  );

  // Update active image when variant images change
  useEffect(() => {
    const newImageUrl = currentVariantImages[0]?.url || '/assets/images/placeholder.png';
    setActiveImage(newImageUrl);
  }, [currentVariantImages]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex-1 border border-gray-100">
        <Zoom>
          <Image
            priority
            src={activeImage || '/assets/images/placeholder.png'}
            width={0}
            height={0}
            sizes="100vw"
            alt="product detail picture"
            className="object-contain h-[464px] w-full p-8"
          />
        </Zoom>
      </div>
      <div className="flex gap-2 justify-between">
        <Swiper
          breakpoints={{
            // when window width is >= 340
            360: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            // when window width is >= 768
            575: {
              slidesPerView: 2,
              spaceBetween: 8,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            // when window width is >= 1024
            1024: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            1320: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
          }}
          autoplay={{
            delay: 10500,
            disableOnInteraction: false,
          }}
          spaceBetween={8}
          slidesPerView={1}
          navigation={true}
          pagination={false}
          modules={[Autoplay, Navigation, Pagination]}
          className={cn("productSwiper")}
        >
          {currentVariantImages &&
            currentVariantImages.map((item, idx) => (
              <SwiperSlide
                onMouseEnter={() => setActiveImage(item.url || '/assets/images/placeholder.png')}
                onClick={() => setActiveImage(item.url || '/assets/images/placeholder.png')}
                key={idx}
                className={cn(
                  "h-full border border-gray-100 hover:border-primary-500 !flex !items-center !justify-center",
                  activeImage === (item.url || '/assets/images/placeholder.png') && "border-primary-500 border-2"
                )}
              >
                <Image
                  src={item.url || '/assets/images/placeholder.png'}
                  alt="small image"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="h-[96px] w-auto  object-contain p-2 cursor-pointer"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
