import { useLocale } from "@/app/localeprovider";
import { translations } from "@/translations/translations";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type TranslationKeys = keyof typeof translations["en"]; 
export type Translations = typeof translations;

export const useTranslation = () => {
  const { locale } = useLocale();

  const t = (key: TranslationKeys): string => {
    const localizedStrings = translations[locale as keyof typeof translations];
    return localizedStrings?.[key] || key; 
  };

  return { t };
};