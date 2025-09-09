'use client'; // must be the first byte

import Link from "next/link";
import { SITE } from "@/data/site";
// NOTE: We’re NOT using usePathname for now to avoid the hook issue while you iterate.

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/30">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight text-lg" aria-label="Home">
          <span className="text-cyan-300">/&gt;</span> {SITE.name}
        </Link>
        <ul className="flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-3 py-2 rounded-md text-sm hover:bg-white/5"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-cyan-400 text-black"
            >
              View Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
