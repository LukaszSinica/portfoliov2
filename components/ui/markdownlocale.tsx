"use client"
import { TitleProps, useTranslation } from '@/lib/utils';
import React from 'react'
import Markdown from 'react-markdown';


export default function MarkdownLocale({name}: TitleProps) {
    const { t } = useTranslation();

    return (
        <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {t(name)}
        </Markdown>

    )
}
