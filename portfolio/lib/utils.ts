import { useLocale } from "@/app/localeprovider";
import { translations } from "@/translations/translations";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface TitleProps {
  name: string;
}

type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? `${K}` | `${K}.${NestedKeys<T[K]>}`
        : never;
    }[keyof T]
  : never;

export type TranslationKeys = NestedKeys<typeof translations["en"]>;
export type Translations = typeof translations;

const resolveNestedKey = (obj: any, key: string): string | undefined => {
  return key.split(".").reduce((acc, part) => acc && acc[part], obj);
};

export const useTranslation = () => {
  const { locale } = useLocale();

  const t = (key: string): string => {
    const localizedStrings = translations[locale as keyof typeof translations];
    return resolveNestedKey(localizedStrings, key) || key;
  };

  return { t };
};