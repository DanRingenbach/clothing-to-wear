// app/jobs/page.tsx

import Image from "next/image";
import Link from "next/link";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";

export default async function Job() {
  const projects: JobType[] = await getJob();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
            href={`/jobs/${project.slug}`}
            key={project._id}
            className="flex items-center gap-x-4 border border-transparent hover:border-zinc-700 ease-in-out"
          >
            
            <div>
              <h2 className="font-semibold mb-1">{project.name}</h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}