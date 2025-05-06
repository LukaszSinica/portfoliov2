import AboutMe from "@/components/aboutme";
import Experience from "@/components/experience";
import FeaturedProjects from "@/components/projects/featuredprojects";
import TechStack from "@/components/techstack";

export default function Home() {
  return (
    <main >
      <article className="mt-8 flex flex-col gap-16 pb-16">
       <AboutMe/>
       <TechStack/>
       <Experience/>
       <FeaturedProjects/>
      </article>
    </main>
  );
}
