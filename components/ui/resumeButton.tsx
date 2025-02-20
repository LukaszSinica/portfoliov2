"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import LocaleText from './localeText'
import { Download } from 'lucide-react'
import { useTranslation } from '@/lib/utils'

function LinkButton(link: string) {
    return (
        <Link href={link} target="_blank">
        <Button variant="outline" className="hover:dark:text-white">
            <LocaleText name="resume"/>
            <Download className="dark:text-white" size={24}/>
        </Button>
    </Link>
    )
}
export default function ResumeButton() {
    const { locale } = useTranslation();
    
    return locale === "en" ? LinkButton("/Łukasz_Sinica_resume.pdf") : LinkButton("/Łukasz_Sinica_CV.pdf")
}
