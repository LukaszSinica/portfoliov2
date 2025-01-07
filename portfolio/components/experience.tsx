import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import careerData from "@/data/career.json";
import educationData from "@/data/education.json";
import { careerSchema, educationSchema } from "@/lib/schemas";
import Timeline from "./timeline/timeline";
import LocaleText from "./ui/localeText";

export default function Experience() {
  const career = careerSchema.parse(careerData).career;
  const education = educationSchema.parse(educationData).education;

  return (
    <Tabs defaultValue="work">
      <TabsList className="mb-2 grid w-full grid-cols-2">
        <TabsTrigger value="work"><LocaleText name="tabs.work" /></TabsTrigger>
        <TabsTrigger value="education"><LocaleText name="tabs.education" /></TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Timeline experience={career}></Timeline>
      </TabsContent>
      <TabsContent value="education">
        <Timeline experience={education}></Timeline>
      </TabsContent>
    </Tabs>
  );
}