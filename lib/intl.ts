import "server-only";

import { createIntl } from "@formatjs/intl";
import type { Locale } from "@/i18n-config";

export async function getIntl(locale: Locale) {
  return createIntl({
    locale: locale.lang,
    messages: (await import(`../public/locales/messages/${locale}.json`)).default,
  });
}

export function getDirection(locale: Locale) {
  switch (locale.lang) {
    case "ar":
      return "rtl";
    case "en":
    case "fr":
    case "nl-NL":
      return "ltr";
  }
}
