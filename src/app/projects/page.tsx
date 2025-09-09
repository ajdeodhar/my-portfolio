import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <Section title="All Projects">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </Section>
    </>
  );
}
