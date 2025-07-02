import { BlogPosts } from "app/components/posts";

import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Yi-Tong Chen&apos;s Corner
      </h1>
      <Image
        src="/images/profile.jpeg"
        alt="Yi-Tong Chen's profile picture"
        width={500}
        height={200}
        className="mb-4"
      />
      <p className="mb-4">
        I'm <strong>Yi-Tong Chen (陳以潼)</strong>, a Taiwan-based master's
        student focusing on <strong>HCI</strong> and <strong>CSCW</strong>{" "}
        studying in the Dept. of Information Management at National Taiwan
        University. My research explores how technology can assume
        responsibility in shaping a more desirable future for all.
      </p>
      <p className="mb-4">
        I'm also lover of music, places, and owner of two cats.
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
