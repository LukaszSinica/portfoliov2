"use client"
import { useTranslation, getYearText } from '@/lib/utils';
import React from 'react'

interface YearTextComponentProps {
    years: number;
    styles?: string;
}

export default function LocaleYear({years, styles}: YearTextComponentProps) {
    const { t, locale } = useTranslation();

    return (
        <span className={styles}>{years} {t(getYearText(years, locale))}</span>
    )
}