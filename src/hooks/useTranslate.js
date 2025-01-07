import en from "@/locales/en.json";
import fa from "@/locales/fa.json";

const translations = { en, fa };

export function useTranslation(locale) {
  const t = (key) => {
    return translations[locale][key] || key;
  };
  return { t };
}