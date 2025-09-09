"use client";
import type { Experience } from "@/data/experience";

export default function ExperienceItem({ x }: { x: Experience }) {
  const openCard = () => {
    if (x.link) window.open(x.link, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className={`rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/20 transition
                  ${x.link ? "cursor-pointer" : ""}`}
      role={x.link ? "link" : undefined}
      tabIndex={x.link ? 0 : undefined}
      onClick={openCard}
      onKeyDown={(e) => {
        if (!x.link) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openCard();
        }
      }}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{x.company}</h3>
        <span className="text-xs text-slate-400">{x.period}</span>
      </div>

      <p className="mt-1 text-sm text-slate-200">{x.role}</p>

      {x.bullets?.length > 0 && (
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-1">
          {x.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      {x.links && x.links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {x.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm ring-1 ring-white/10 hover:ring-white/20"
              onClick={(e) => e.stopPropagation()} // don't trigger the card link
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
