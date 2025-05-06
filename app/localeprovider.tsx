"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Locale = "en" | "pl"; 
type Category = 'frontend' | 'backend' | 'tools'

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  activeCategory: Category;
  setActiveCategory: (locale: Category) => void;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [activeCategory, setActiveCategory] = useState<Category>('frontend')

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") as Locale;
    if (storedLocale) {
      setLocaleState(storedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, activeCategory, setActiveCategory }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
