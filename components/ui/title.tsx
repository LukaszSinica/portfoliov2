"use client"
import { TitleProps, useTranslation } from '@/lib/utils';
import React from 'react'

interface TitleComponentProps extends TitleProps {
  styles?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function Title({name, styles, level = 'h1'}: TitleComponentProps) {
  const { t } = useTranslation();
  const Heading = level;
  return (
    <Heading className={`title ${styles}`}>{t(name)}</Heading>

  )
}
