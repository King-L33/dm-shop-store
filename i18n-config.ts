export const i18n = {
  locales: [
    {
      lang: "en",
      image: "https://cdn-icons-png.flaticon.com/128/9906/9906532.png",
    },
    {
      lang: "fr",
      image: "https://cdn-icons-png.flaticon.com/128/197/197560.png",
    },
    {
      lang: "ar",
      image: "https://cdn-icons-png.flaticon.com/128/5373/5373320.png",
    },
  ],
  defaultLocale: "en",
};

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];
