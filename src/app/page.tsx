import Image from "next/image";
import { SITE } from "@/data/site";
import SocialLinks from "./components/SocialLinks";
import Section from "./components/Section";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./components/ProjectCard";


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {SITE.name}
          </h1>
          <p className="text-slate-300">{SITE.role}</p>
          <div className="max-w-3xl space-y-4 text-slate-200">
  {SITE.summary
    .trim()
    .split(/\n\s*\n/)              // split on blank lines
    .map((para, i) => (
      <p key={i} className="leading-relaxed">{para}</p>
    ))}
</div>
          <SocialLinks />
        </div>
        <div className="shrink-0">
          <Image
            src="/avatar.jpg"     // matches your file in /public
            alt="Profile photo"
            width={160}
            height={160}
            className="rounded-full ring-2 ring-white/10 object-cover"
          />
        </div>
      </div>

      {/* Featured projects */}
      <Section title="Featured Projects" hint="See all → Projects" href="/projects">
        {PROJECTS.slice(0, 3).map(p => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </Section>
    </>
  );
}
