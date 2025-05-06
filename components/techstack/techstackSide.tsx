"use client"

import LocaleText from '../ui/localeText'
import { useLocale } from '@/app/localeprovider'

type Category = 'frontend' | 'backend' | 'tools'

export default function TechstackSide() {
  const { activeCategory, setActiveCategory } = useLocale()
  
  return (
    <div className="w-48 space-y-2">
        {(['frontend', 'backend', 'tools'] as Category[]).map((category) => (
        <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex flex-row gap-2 items-center w-full p-3 text-left rounded-lg transition-colors ${
            activeCategory === category ? 'bg-muted text-foreground' : 'hover:bg-muted'
            }`}
        >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-muted to-muted-foreground p-1"></div>
            <LocaleText name={`tech.${category}`} />
        </button>
        ))}
    </div>
  )
}
