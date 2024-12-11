import Projects from "@/components/projects/projects";
import Title from "@/components/ui/title";

export default function ProjectPage() {

  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <Title name="my_projects"/>
      <Projects />
    </article>
  );
}