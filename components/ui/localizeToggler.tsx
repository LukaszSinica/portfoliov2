"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { useLocale } from "@/app/localeprovider";

export default function LocalizeToggler() {
    const [mounted, setMounted] = useState(false);

    const { locale, setLocale } = useLocale(); 
    const toggleLocale = () => {
      setLocale(locale === "en" ? "pl" : "en"); 
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
      <Button
        size="icon"
        variant="ghost"
        onClick={toggleLocale}
      >
        {locale === "pl" ? (
          "PL"
        ) : (
          "EN"
        )}
        <span className="sr-only">Language Toggle</span>
      </Button>
    );
  }