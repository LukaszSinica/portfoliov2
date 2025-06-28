import { GithubIcon, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import Title from './ui/title';
import LocaleText from './ui/localeText';
import ResumeButton from './ui/resumeButton';

export default function AboutMe() {
  return (
    <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div>
        <section className="min-h-[120px]">            
          <Title name="hi" styles="font-bold pb-2 text-2xl"/>
          <div className='flex-col flex items-start gap-4  text-justify'>
            <p><LocaleText name="about_me_1"/></p>
            <p><LocaleText name="about_me_2"/></p>
            <p><LocaleText name="about_me_3"/></p>
            <p><LocaleText name="about_me_4"/></p>
          </div>

          </section>
          <section className="mt-8 flex items-center gap-8 min-h-[50px]">
              <ResumeButton/>
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
            alt="Łukasz Sinica Face"
            className="rounded-full"
            priority
            src="/face.jpg"
            width={180}
            height={180}
            />
    </section>
  )
}
