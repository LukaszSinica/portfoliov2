import ContactForm from '@/components/contact/contactForm'
import LocaleText from '@/components/ui/localeText'
import Title from '@/components/ui/title'
import React from 'react'

export default function ContactPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
        <Title name="contact_me"/>
        <section className='flex flex-col'>
            <LocaleText name={'email_directly'}/>
            <hr className='my-4'/>
            <LocaleText styles='text-center font-bold ' name={'email_or'} />
            <hr className='my-4'/>
            <ContactForm/>
        </section>
    </article>
  )
}
