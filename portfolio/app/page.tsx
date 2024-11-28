import { Button } from "@/components/ui/button";
import { Download, GithubIcon, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <article className="mt-8 flex flex-col gap-16 pb-16">
        <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h1>Hi Lucas here </h1>
            <p>26-year-old software developer from Poland</p>
            <p>I like to develop full-stack, play games and trying out new things in life</p>
            <section className="mt-8 flex items-center gap-8">
              <Link href="/resume_en.pdf" target="_blank">
                <Button variant="outline" className="hover:dark:text-white">
                  <span className="font-semibold">resume </span>
                  <Download className="dark:text-gray-400" size={24}/>
                </Button>
              </Link>
              <a href="https://github.com/LukaszSinica" target="_blank" rel="noopener noreferrer">
                <GithubIcon  size={24} className="dark:text-gray-400 hover:dark:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/lukasz-sinica/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} className="dark:text-gray-400 hover:dark:text-white" />
              </a>
              <a href="mailto:sinicalukasz@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail size={24} className="dark:text-gray-400 hover:dark:text-white" />
              </a>
            </section>
          </div>
          <Image
          alt="Next.js Logo"
          className="rounded-full"
          priority
          src="/face.jpg"
          width={180}
          height={180}
          />
        </section>
      </article>
    </main>
  );
}
