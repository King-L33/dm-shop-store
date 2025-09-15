// @ts-nocheck
"use client";

import React from "react";
import { IntlProvider } from "react-intl";
import en from "@/public/locales/messages/en";
import fr from "@/public/locales/messages/fr";
import ar from "@/public/locales/messages/ar";

const messages = { en, fr, ar };

type IntProviderProps = {
  locale: string;
  children: React.ReactNode;
};

function I18nProvider({ locale, children }: IntProviderProps) {
  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale="en"
    >
      {children}
    </IntlProvider>
  );
}

export default I18nProvider;
