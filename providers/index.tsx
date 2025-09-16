import React from "react";
import StateProvider from "./state-provider";
import I18nProvider from "./i18n-provider";

export default function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <StateProvider>
      <I18nProvider locale={locale}>
        {children}
      </I18nProvider>
    </StateProvider>
  );
}
