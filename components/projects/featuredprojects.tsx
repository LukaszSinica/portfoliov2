import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import LinkWithIcon from '../linkwithicon'
import Projects from './projects'
import Title from '@/components/ui/title'

const LIMIT = 2;

export default function FeaturedProjects() {
  return (
    <section className="flex flex-col gap-8">
        <div className="flex justify-between">
        <span className='title text-2xl sm:text-3xl'>
          <Title name={'projects.Featured'} level='h2'/>
        </span>
        <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="viewmore"
        />
        </div>
        <Projects limit={LIMIT} />
    </section>
  )
}
