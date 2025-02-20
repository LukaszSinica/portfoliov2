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

const resolveNestedKey = <T extends object>(obj: T, key: string): string | undefined => {
  return key.split(".").reduce((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj as unknown) as string | undefined;
};

export const useTranslation = () => {
  const { locale } = useLocale();

  const t = (key: string): string => {
    const localizedStrings = translations[locale as keyof typeof translations];
    return resolveNestedKey(localizedStrings, key) || key;
  };

  return { t, locale };
};