import data from "@/data/projects.json";
import { projectSchema } from "@/lib/schemas";
import { ProjectCard } from "./projectcard";

interface Props {
  limit?: number;
  carousel?: boolean;
}

export default function Projects({ limit, carousel = false }: Props) {
  let projects = projectSchema.parse(data).projects;
  if (limit) {
    projects = projects.slice(0, limit);
  }

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-h-[428px]">
      {projects.map((project, id) => (
        <ProjectCard key={id} project={project} carousel={carousel} />
      ))}
    </section>
  );
}