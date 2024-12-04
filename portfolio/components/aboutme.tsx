import { Button } from '@/components/ui/button'
import { Download, GithubIcon, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div>
            <h1>Hi Lucas here </h1>
            <p>26-year-old software developer from Poland</p>
            <p>I like to develop full-stack, play games and trying out new things in life</p>
            <section className="mt-8 flex items-center gap-8">
                <Link href="/resume_en.pdf" target="_blank">
                <Button variant="outline" className="hover:dark:text-white">
                    <span className="font-semibold">resume </span>
                    <Download className="dark:text-white" size={24}/>
                </Button>
                </Link>
                <Link href="https://github.com/LukaszSinica" target="_blank" rel="noopener noreferrer">
                <GithubIcon  size={24} className="dark:text-gray-400 hover:dark:text-white" />
                </Link>
                <Link href="https://www.linkedin.com/in/lukasz-sinica/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} className="dark:text-gray-400 hover:dark:text-white" />
                </Link>
                <Link href="mailto:sinicalukasz@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail size={24} className="dark:text-gray-400 hover:dark:text-white" />
                </Link>
            </section>
        </div>
        <Image
            alt="Next.js Logo"
            className="rounded-full"
            priority
            src="/face.jpg"
            width={180}
            height={180}
            />
    </section>
  )
}
