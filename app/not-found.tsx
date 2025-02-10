import LocaleText from '@/components/ui/localeText';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold"><LocaleText name="not_found_title" /></h1>
        <p className="text-lg"><LocaleText name="not_found_message"/></p>
        <Link href="/" className='mt-4 text-blue-500 hover:underline'>
            <LocaleText name="go_back_home" />
        </Link>
    </div>
  );
}