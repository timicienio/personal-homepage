"use client";

import { useState } from "react";
import type { Publication } from "./utils";

export function PublicationItem({ pub }: { pub: Publication }) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <p className="font-medium leading-snug">{pub.title}</p>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        {pub.authors.join(", ")}
      </p>
      <p className="mt-0.5 text-sm italic text-neutral-500 dark:text-neutral-500">
        {pub.venue}
      </p>
      <div className="mt-1 flex flex-wrap gap-2 text-xs">
        {pub.note && (
          <span className="rounded border border-neutral-300 px-1.5 py-0.5 dark:border-neutral-700">
            {pub.note}
          </span>
        )}
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            DOI
          </a>
        )}
        {pub.url && (
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            PDF
          </a>
        )}
      </div>
      {pub.abstract && (
        <div className="mt-2">
          <p
            className={`text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed ${open ? "" : "line-clamp-3"}`}
          >
            {pub.abstract}
          </p>
          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-1 flex items-center gap-0.5 text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors cursor-pointer"
          >
            <svg
              className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
            {open ? "Collapse" : "Expand"}
          </button>
        </div>
      )}
    </li>
  );
}
