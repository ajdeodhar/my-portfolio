import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/20 transition h-full flex flex-col">
      <div className="mb-2">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        {p.period && <p className="text-xs text-slate-400">{p.period}</p>}
      </div>
      <p className="text-slate-300 text-sm flex-1">{p.blurb}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {p.repo && <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm ring-1 ring-white/10 hover:ring-white/20" href={p.repo} target="_blank">Repo</a>}
        {p.demo && <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm ring-1 ring-white/10 hover:ring-white/20" href={p.demo} target="_blank">Live Demo</a>}
      </div>
    </article>
  );
}
