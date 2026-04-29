import { BlogPosts } from "app/components/posts";

import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Yi-Tong&apos;s Corner
      </h1>
      <Image
        src="/images/profile.jpeg"
        alt="Yi-Tong Chen's profile picture"
        width={500}
        height={200}
        className="mb-4"
      />
      <p className="mb-4">
        I'm <strong>Yi-Tong Chen (陳以潼)</strong>, a Taiwan-based HCI
        researcher. I'm currently studying in the Dept. of Information
        Management at National Taiwan University as a Master's student. My
        research focuses on how marginalized positionalities and communities
        negotiate with technologies to foster resilience and creativity.
      </p>
      <p className="mb-4">
        I'm also a lover of music, places, and feeder of two cats.
      </p>
      {/* <p className="mb-4">
        {" "}
        I previously worked as software engineering intern at{" "}
        <a
          href="https://www.linkedin.com/company/linetaiwan"
          className="underline"
        >
          LINE Taiwan
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/company/25sprout"
          className="underline"
        >
          25Sprout
        </a>
        .
      </p> */}
      <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight">
        Blog Posts
      </h2>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
