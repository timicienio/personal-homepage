import fs from "fs";
import path from "path";
import bibtexParse from "bibtex-parse";

export type Publication = {
  key: string;
  type: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  url?: string;
  note?: string;
  abstract?: string;
};

function formatAuthors(raw: string): string[] {
  return raw
    .split(" and ")
    .map((a) => {
      a = a.trim();
      // "Last, First" → "First Last"
      if (a.includes(",")) {
        const [last, first] = a.split(",").map((s) => s.trim());
        return first ? `${first} ${last}` : last;
      }
      return a;
    });
}

function getVenue(entry: Record<string, unknown>): string {
  return (
    (entry["BOOKTITLE"] as string) ||
    (entry["JOURNAL"] as string) ||
    (entry["SCHOOL"] as string) ||
    (entry["INSTITUTION"] as string) ||
    ""
  );
}

export function getPublications(): Publication[] {
  const bibPath = path.join(
    process.cwd(),
    "app",
    "publications",
    "publications.bib"
  );
  const raw = fs.readFileSync(bibPath, "utf-8");
  const entries = bibtexParse.entries(raw) as Record<string, unknown>[];

  return entries
    .map((entry) => ({
      key: entry["key"] as string,
      type: entry["type"] as string,
      title: (entry["TITLE"] as string) ?? "",
      authors: formatAuthors((entry["AUTHOR"] as string) ?? ""),
      venue: getVenue(entry),
      year: Number(entry["YEAR"]) || 0,
      doi: (entry["DOI"] as string) || undefined,
      url: (entry["URL"] as string) || undefined,
      note: (entry["NOTE"] as string) || undefined,
      abstract: (entry["ABSTRACT"] as string) || undefined,
    }))
    .sort((a, b) => b.year - a.year);
}
