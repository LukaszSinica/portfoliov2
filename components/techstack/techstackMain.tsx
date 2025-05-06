"use client"
import { useLocale } from '@/app/localeprovider'
import { motion } from 'motion/react'
import React from 'react'
import techStackData from '@/data/techStack.json'
import { techStackSchema } from '@/lib/schemas'
import Image from 'next/image'
import LocaleYear from '../ui/localeYear'

export default function TechstackMain() {
  const { activeCategory } = useLocale()
  const techstack = techStackSchema.parse(techStackData).techStack;

  return (
    <motion.div 
    key={activeCategory}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="flex-1 space-y-4"
  >
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap- gap-y-4">
    {techstack[activeCategory].map((tech) => (
      <div 
      key={tech.title} 
      className="flex w-fit items-center justify-start"
    >
      <div className="flex items-center gap-4">
          <div className="bg-muted rounded-md p-1 w-12 h-12 flex " >
            <Image src={tech.avatar} width={40} height={40} alt={tech.title}/>
          </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="w-full font-medium group-hover:text-primary transition-colors">
              {tech.title}
            </h3>
          </div>
            <span className="text-sm text-muted-foreground">
            ~<LocaleYear years={tech.years} />
            </span>
        </div>
      </div>
    </div>
    ))}
    </div>
  </motion.div>
  )
}
