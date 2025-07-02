/* app/blog/[slug]/page.tsx (or .jsx) */
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";

export async function generateStaticParams() {
  return getBlogPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = getBlogPosts().find((p) => p.slug === params.slug);
  if (!post) return;

  const {
    title,
    author,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const ogImage = image ?? `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      author,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  const post = getBlogPosts().find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <section>
      <h1 className="title font-semibold text-4xl tracking-tighter">
        {post.metadata.title}
      </h1>

      <p className="mt-2 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        {formatDate(post.metadata.publishedAt)}
      </p>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </section>
  );
}
