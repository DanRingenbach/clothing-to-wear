import Image from "next/image";
import Link from "next/link";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";
import job from "@/schemas/job";
import Job from "@/components/Job";

export default async function Jobs() {
    const jobs: JobType[] = await getJob();

    return (
        <main className="max-w-7xl mx-auto md:px-16 px-6">
            <section className="max-w-2xl mb-16">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
                    Featured Jobs
                </h1>

            </section>

            <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
               
                  
                        <Job />
                       
              
            </section>
        </main>
    );
}