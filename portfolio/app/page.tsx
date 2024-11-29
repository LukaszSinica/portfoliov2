import AboutMe from "@/components/aboutme";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main >
      <article className="mt-8 flex flex-col gap-16 pb-16">
       <AboutMe/>
       <Experience/>
      </article>
    </main>
  );
}
