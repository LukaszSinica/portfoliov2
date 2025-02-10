"use client"
import { TitleProps, useTranslation } from '@/lib/utils';
import React from 'react'

interface TitleComponentProps extends TitleProps {
  styles?: string;
}

export default function Title({name, styles}: TitleComponentProps) {
  const { t } = useTranslation();

  return (
    <h1 className={`title ${styles}`}>{t(name)}</h1>

  )
}
