"use client"
import { TitleProps, useTranslation } from '@/lib/utils';
import React from 'react'

export default function LocaleText({name}: TitleProps) {
    const { t } = useTranslation();

    return (
        <span>{t(name)}</span>
    )
}
