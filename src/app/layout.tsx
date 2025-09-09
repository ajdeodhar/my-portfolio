import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `${SITE.name} – Portfolio`,
  description: SITE.summary,
  openGraph: { title: `${SITE.name} – Portfolio`, description: SITE.summary },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
