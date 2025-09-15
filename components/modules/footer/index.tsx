"use client";
import { Badge } from "@/components/custom/Badge";
import Container from "@/components/custom/Container";
import Logo from "@/components/custom/Logo";
import { productTags } from "@/constants";
import { IRootState } from "@/store";
import { ArrowRight } from "lucide-react";
// import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";

export default function Footer() {
  const { config } = useSelector((state: IRootState) => ({ ...state }));

  return (
    <footer className="bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 py-[72px] gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <Logo />
            <ul className="flex flex-col gap-[12px]">
              <li className="flex flex-col gap-1">
                <span className="text-body-sm-400 text-gray-500">
                  customer support
                </span>
                <span className="text-body-l-500 text-white">
                  {config.siteDetails.phone}
                </span>
              </li>
              <li>
                <span className="text-body-md-400 text-gray-300">
                  {config.siteDetails.address}
                </span>
              </li>
              <li>
                <span className="text-body-md-500 text-white">
                  {config.siteDetails.email}
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[12px]">
            <p className="text-white my-2 text-label2 capitalize">
              top category
            </p>
            <ul className="flex flex-col gap-[4px] text-gray-400">
              <li>
                <Link
                  href="/categories/computer-laptop/products"
                  className="text-body-sm-500"
                >
                  Computer & Laptop
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/smartphones/products"
                  className="text-body-sm-500"
                >
                  Smartphones
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/headphones/products"
                  className="text-body-sm-500"
                >
                  Headphones
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/"
                  className="text-body-sm-500 before:absolute before:h-1 before:w-[24px] before:bg-warning-500 before:top-3 before:rounded-md"
                >
                  <span className="text-white ml-8">Accesories</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/camera-photo/products"
                  className="text-body-sm-500"
                >
                  Camera & photo
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/tv-homes/products"
                  className="text-body-sm-500"
                >
                  TV & Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-body-sm-500 text-warning-500 flex gap-[8px]"
                >
                  <span> browse-all-products</span>
                  <ArrowRight className="" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[12px]">
            <p className="text-white my-2 text-label2 capitalize">
              quick-links
            </p>
            <ul className="flex flex-col gap-[4px]  text-gray-400">
              <li>
                <Link href="/products" className="text-body-sm-500">
                  Shop product
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-body-sm-500">
                  Shopping Cart
                </Link>
              </li>

              <li>
                <Link href="/track-order" className="text-body-sm-500">
                  <FormattedMessage id={`header.track-order`} />
                </Link>
              </li>

              <li>
                <Link href="/need-help" className="text-body-sm-500">
                  <FormattedMessage id={`header.need-help`} />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[12px]">
            <p className="text-white my-2 text-label2 capitalize">
              download app
            </p>
            <ul className="flex flex-col gap-[12px] text-gray-400">
              <li>
                <Link
                  href="/"
                  className="text-body-sm-500 flex justify-center gap-[16px] bg-gray-800 px-[20px] py-[16px] w-[200px]"
                >
                  <Image
                    src="https://res.cloudinary.com/didbxg1f9/image/upload/v1728686255/images/uwjooywyhvikxcixvwxd.png"
                    alt="google play"
                    width="32"
                    height="32"
                    className="w-auto h-auto"
                  />
                  <div className="flex flex-col gap-[4px] items-start">
                    <h6 className="text-body-xs-400  text-gray-500">
                      Get it now
                    </h6>
                    <h6 className="text-body-sm-500  text-white">
                      Google Play
                    </h6>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-body-sm-500 flex justify-center gap-[16px] bg-gray-800 px-[20px] py-[16px] w-[200px]"
                >
                  <Image
                    src="https://res.cloudinary.com/didbxg1f9/image/upload/v1728686255/images/s4m7cutnctnxpp5qiucj.png"
                    alt="Apple store"
                    width="32"
                    height="32"
                    className="w-auto h-auto"
                  />
                  <div className="flex flex-col gap-[4px] items-start">
                    <h6 className="text-body-xs-400  text-gray-500">
                      Get it now
                    </h6>
                    <h6 className="text-body-sm-500  text-white">
                      Google Play
                    </h6>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[12px]">
            <p className="text-white my-2 text-label2 capitalize">
              popular tags
            </p>

            <ul className="flex flex-wrap text-balance gap-[8px] text-gray-400">
              {productTags.map((item, idx) => (
                <li key={idx}>
                  <Link href="/" className="text-body-sm-500">
                    <Badge variant="outline" className="">
                      {item.name}
                    </Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <section className="py-[24px] border-t">
        <Container>
          <p className="flex justify-center text-center text-white text-body-sm-400">
            {config.siteDetails.copyright}
          </p>
        </Container>
      </section>
    </footer>
  );
}
