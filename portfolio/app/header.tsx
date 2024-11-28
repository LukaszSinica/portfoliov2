import ThemeToggle from '@/components/ui/themeToggler'
import React from 'react'

export default function Header() {

  return (
    <header className='sticky top-0 z-50 py-6 backdrop-blur-sm flex justify-between'>
        <nav className='flex w-3/4 justify-between items-center'>
            <a>home</a>
            <a>projects</a>
            <a>contact</a>
       </nav>
       <ThemeToggle/>

    </header>
  )
}
