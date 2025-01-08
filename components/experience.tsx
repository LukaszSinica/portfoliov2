import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import careerData from "@/data/career.json";
import educationData from "@/data/education.json";
import { careerSchema, educationSchema } from "@/lib/schemas";
import type { Experience, IconLink } from "@/lib/schemas";
import Timeline from "./timeline/timeline";
import LocaleText from "./ui/localeText";

export default function Experience() {
  const career = careerSchema.parse(careerData).career;
  const education = educationSchema.parse(educationData).education;

  const translateExperience = (experience: Experience[], type: string) => {
    return experience.map(item => ({
      ...item,
      name: `${type}.${item.name}.name`,
      title: `${type}.${item.name}.title`,
      start: `${type}.${item.name}.start`,
      end: `${type}.${item.name}.end`,
      description: item.description?.map((desc: string) => `${type}.${item.name}.description.${desc}`),
      links: item.links?.map((link: IconLink ) => ({
        ...link,
        name: `${type}.${item.name}.links.${link.name}`
      }))
    }));
  };


  return (
    <Tabs defaultValue="work">
      <TabsList className="mb-2 grid w-full grid-cols-2">
        <TabsTrigger value="work"><LocaleText name="tabs.work" /></TabsTrigger>
        <TabsTrigger value="education"><LocaleText name="tabs.education" /></TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Timeline experience={translateExperience(career, 'career')}/>   </TabsContent>
      <TabsContent value="education">
        <Timeline experience={translateExperience(education, 'education')}/>
      </TabsContent>
    </Tabs>
  );
}