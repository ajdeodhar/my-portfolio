export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Your Name.</p>
        <p className="opacity-80">Built with Next.js + Tailwind</p>
      </div>
    </footer>
  );
}
