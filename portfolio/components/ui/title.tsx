"use client"
import { TranslationKeys, useTranslation } from '@/lib/utils';
import React from 'react'

interface TitleProps {
    text: TranslationKeys;
}

export default function Title({text}: TitleProps) {
  const { t } = useTranslation();

  return (
    <h1 className="title">{t(text)}</h1>

  )
}
