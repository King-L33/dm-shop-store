"use client";
import Container from "@/components/custom/Container";
import { Input } from "@/components/custom/Input";
import { RectangleButton } from "@/components/custom/RectangleButton";
// import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import z from "zod";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

export default function Newsletters() {
  // const t = useTranslations("home.main");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);

    const Email = z.object({
      email: z.string().email().min(5).max(40),
    });

    const validatedFields = Email.safeParse({
      email: email,
    });

    if (!validatedFields.success) {
      toast({
        variant: "default",
        title: "Humm! 😏",
        description: "Try again, it's not a valid email.",
      });
      setLoading(false);
      return;
    }

    const sendEmail = async () => {
      const values = {
        subject: "Subscribe to newsletter",
        email: email,
        message: "I just subscribed to your newsletter",
      };

      await axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/api/public/sendemail", values)
        .then((response) => {
          const data = response.data;
          toast({
            variant: "default",
            title: "Fine✔️",
            description: data.message,
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    await sendEmail();
  };

  return (
    <section className="bg-secondary-700 py-[72px]">
      <Container>
        <div className="w-full flex flex-col justify-center gap-4 items-center text-white ">
          <div className="flex flex-col items-center gap-4 max-w-[660px]">
            <h1 className="text-center">subscribe to our newsletter</h1>
            <p className="text-body-md-400 opacity-70 text-center">
            Get all updates about products, categories, discounts, directly inot your mail so that you won&apos;t miss any opportunity
            </p>
          </div>
          <div className="flex items-center bg-white p-2 max-w-[560px]">
            <Input
              placeholder="Enter your email"
              className="text-black border-none"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <RectangleButton
              disabled={loading}
              size="sm"
              icon="after"
              onClick={handleSave}
            >
              <Loader2Icon
                className={cn(
                  "hidden mr-2 h-6 w-6 animate-spin",
                  loading && "block"
                )}
              />
              <span>subscribe</span>
            </RectangleButton>
          </div>

          <div className="flex flex-wrap justify-center gap-4 opacity-25">
            <Image
              src="/assets/logo/google.png"
              alt="image"
              width="72"
              height="72"
            />
            <Image
              src="/assets/logo/amazon.png"
              alt="image"
              width="72"
              height="72"
            />
            <Image
              src="/assets/logo/philips.png"
              alt="image"
              width="72"
              height="72"
            />
            <Image
              src="/assets/logo/toshiba.png"
              alt="image"
              width="72"
              height="72"
            />
            <Image
              src="/assets/logo/samsung.png"
              alt="image"
              width="72"
              height="72"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
