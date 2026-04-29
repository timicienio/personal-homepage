import { getPublications } from "./utils";
import { PublicationItem } from "./PublicationItem";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description: "Yi-Tong Chen's publications.",
};

export default function PublicationsPage() {
  const publications = getPublications();

  const byYear = publications.reduce<Record<number, typeof publications>>(
    (acc, pub) => {
      (acc[pub.year] ??= []).push(pub);
      return acc;
    },
    {},
  );

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Publications
      </h1>
      {years.map((year) => (
        <div key={year} className="mb-10">
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-neutral-500 dark:text-neutral-400">
            {year}
          </h2>
          <ul className="space-y-6">
            {byYear[year].map((pub) => (
              <PublicationItem key={pub.key} pub={pub} />
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
