import Link from "next/link";

export default function Section(props: {
  title: string;
  children: React.ReactNode;
  hint?: string;
  href?: string; // optional URL for the hint
}) {
  const { title, children, hint, href } = props;

  return (
    <section className="space-y-3">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-bold">{title}</h2>

        {hint
          ? href
            ? (
              <Link href={href} className="text-xs text-cyan-300 hover:underline">
                {hint}
              </Link>
            )
            : <span className="text-xs text-slate-400">{hint}</span>
          : null}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}
