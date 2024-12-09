import ThemeToggle from '@/components/ui/themeToggler'
import Link from 'next/link'
import React from 'react'
import LocalizeToggler from './ui/localizeToggler'

export default function Header() {

  return (
    <header className='sticky top-0 z-50 py-6 backdrop-blur-sm flex justify-between'>
        <nav className='flex w-3/4 items-center gap-8'>
            <Link href={"/"}>home</Link>
            <Link href={"/projects"}>projects</Link>
            <Link href={"/contact"}>contact</Link>
       </nav>
       <LocalizeToggler/>
       <ThemeToggle/>
    </header>
  )
}
