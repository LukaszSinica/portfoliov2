"use client"
import { TitleProps, useTranslation } from '@/lib/utils';
import React from 'react'


export default function Title({name}: TitleProps) {
  const { t } = useTranslation();

  return (
    <h1 className="title">{t(name)}</h1>

  )
}
