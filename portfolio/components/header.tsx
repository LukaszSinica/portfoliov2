import ThemeToggle from '@/components/ui/themeToggler'
import Link from 'next/link'
import React from 'react'
import LocalizeToggler from './ui/localizeToggler'
import LocaleText from './ui/localeText'

export default function Header() {

  return (
    <header className='sticky top-0 z-50 py-6 backdrop-blur-sm flex justify-between'>
        <nav className='flex w-3/4 items-center gap-8'>
            <Link href={"/"}><LocaleText name={'header.home'} /></Link>
            <Link href={"/projects"}><LocaleText name={'header.projects'}/></Link>
            <Link href={"/contact"}><LocaleText name={'header.contact'}/></Link>
       </nav>
       <LocalizeToggler/>
       <ThemeToggle/>
    </header>
  )
}
