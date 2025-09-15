import * as React from "react";
import "./globals.css";
import { publicSans } from "./fonts";
import Providers from "@/providers";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className={`${publicSans.className} antialiased`}>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
