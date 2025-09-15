import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import { Heart, Shuffle, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { SiMeta } from "react-icons/si";

export default function ProductShare() {
  const handleHeart = () => {
    toast({
      variant: "default",
      title: "Great✔️",
      description:
        "You just found out a new feature subscribe to get notified.",
      action: (
        <ToastAction altText={`Subsribe`}>
          <Link href={`https://www.youtube.com/@sylvaincodes593`}>
            Subscribe
          </Link>
        </ToastAction>
      ),
    });
  };
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-between">
      <div className="flex gap-1 text-body-sm-400 text-gray-700">
        <Button
          onClick={handleHeart}
          variant="outline"
          className="flex gap-[6px] border-none"
        >
          <Heart size={24} /> Add to Whishlist
        </Button>
        <Button
          onClick={handleHeart}
          variant="outline"
          className="flex gap-[6px] border-none"
        >
          <Shuffle size={24} /> Add to compare
        </Button>
      </div>

      <div className="flex items-center">
        <div className="inline-flex items-center gap-8">
          <h6 className="capitalize text-body-sm-400 text-gray">Share:</h6>
          <div className=" capitalize inline-flex gap-2 ms-auto text-slate-700">
            <Link
              target="_blank"
              href={`https://x.com/intent/post?url=${process.env.NEXT_PUBLIC_SERVER_URL}${pathname}`}
            >
              <Twitter size={24} className="hover:text-primary-500" />
            </Link>
            <Link
              target="_blank"
              href={`https://www.linkedin.com/shareArticle?url=${process.env.NEXT_PUBLIC_SERVER_URL}${pathname}`}
            >
              <BsLinkedin size={24} className="hover:text-primary-500" />
            </Link>
            <Link
              target="_blank"
              href={`https://facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SERVER_URL}${pathname}`}
            >
              <SiMeta size={24} className="hover:text-primary-500" />
            </Link>
            <Link
              target="_blank"
              href={`https://web.whatsapp.com/send?text=${process.env.NEXT_PUBLIC_SERVER_URL}${pathname}`}
            >
              <BsWhatsapp size={24} className="hover:text-primary-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
