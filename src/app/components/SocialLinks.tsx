import { SITE } from "@/data/site";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm ring-1 ring-white/10 hover:ring-white/20" href={SITE.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm ring-1 ring-white/10 hover:ring-white/20" href={SITE.socials.github} target="_blank" rel="noreferrer">GitHub</a>
      <a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-cyan-400 text-black" href="/resume.pdf" target="_blank" rel="noreferrer">View CV</a>
    </div>
  );
}
