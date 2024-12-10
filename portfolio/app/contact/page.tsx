import LocaleText from '@/components/ui/localeText'
import Title from '@/components/ui/title'
import React from 'react'

export default function ContactPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
        <Title text="contact_me"/>
        <section>
            <span>
               <LocaleText text={'email_directly'}/>
            </span>
        </section>
    </article>
  )
}
