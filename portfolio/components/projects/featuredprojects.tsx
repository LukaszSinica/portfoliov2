import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import LinkWithIcon from '../linkwithicon'
import Projects from './projects'

const LIMIT = 2;

export default function FeaturedProjects() {
  return (
    <section className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
        <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
        />
        </div>
        <Projects limit={LIMIT} />
    </section>
  )
}
