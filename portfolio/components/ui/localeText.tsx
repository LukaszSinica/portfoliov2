"use client"
import { TranslationKeys, useTranslation } from '@/lib/utils';
import React from 'react'

interface TitleProps {
    text: TranslationKeys;
}

export default function LocaleText({text}: TitleProps) {
    const { t } = useTranslation();

    return (
        <span>{t(text)}</span>
    )
}
