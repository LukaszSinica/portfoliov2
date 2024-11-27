import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { GithubIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grow">
        <article className="mt-8 flex flex-col gap-16 pb-16">
          <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h1>Hi Lucas here </h1>
              <p>26-year-old software developer from Poland</p>
              <p>I like to develop full-stack, play games and trying out new things in life</p>
              <section className="mt-8 flex items-center gap-8">
                <a href="https://github.com/LukaszSinica" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="dark:text-gray-400" size={24} />
                </a>
                <a href="https://www.linkedin.com/in/lukasz-sinica/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="dark:text-gray-400" size={24} />
                </a>
                <a href="mailto:sinicalukasz@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="dark:text-gray-400" size={24} />
                </a>
              </section>
            </div>
            <Image
            alt="Next.js Logo"
            className="dark:invert"
            src="/next.svg"
            width={180}
            height={38}
            />
          </section>
        </article>
        
    </main>
  );
}
