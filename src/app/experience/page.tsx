import Section from "../components/Section";
import ExperienceItem from "../components/ExperienceItem";
import { EXPERIENCE } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Experience</h1>
      <Section title="Roles">
        {EXPERIENCE.map((x) => (
          <ExperienceItem key={`${x.company}-${x.role}-${x.period}`} x={x} />
        ))}
      </Section>
    </>
  );
}
