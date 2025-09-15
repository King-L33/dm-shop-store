"use client";
import Container from "@/components/custom/Container";
import React from "react";
import SocialIcons from "./SocialIcons";
import LanguageCurrency from "./LanguageCurrency";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { FormattedMessage } from "react-intl";

export default function SocialMenu({ className }: { className?: string }) {
  return (
    <div className={cn("bg-secondary-700 h-[52px]", className)}>
      <Container>
        <div className="flex justify-between items-center h-full">
          <div>
            <p className="text-white">
              <FormattedMessage id={`header.welcom`} />
            </p>
          </div>
          <div className="flex  items-center space-x-6">
            <SocialIcons className="text-white" />
            <Separator
              orientation="vertical"
              className=" bg-white/20 h-[20px]"
            />
            <LanguageCurrency className="bg-secondary-700 w-[160px] border-0 text-white" />
          </div>
        </div>
      </Container>
    </div>
  );
}
