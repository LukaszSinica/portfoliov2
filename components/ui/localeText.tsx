"use client"
import { TitleProps, useTranslation } from '@/lib/utils';
import React from 'react'

interface LocaleTextComponentProps extends TitleProps {
    styles?: string;
}

export default function LocaleText({name, styles}: LocaleTextComponentProps) {
    const { t } = useTranslation();

    return (
        <span className={styles}>{t(name)}</span>
    )
}
