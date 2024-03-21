// app/projects/[project]/page.tsx

import Image from "next/image";
import { Metadata } from "next";
import { getSingleJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "@/public/project.png";

type Props = {
    params: {
        job: string;
    };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.job;
    const job: JobType = await getSingleJob(slug);

    return {
        title: `${job.name} | Project`,
        description: job.jobTitle,
        openGraph: {
            images: job.imageUrls || "add-a-fallback-project-image-here",
            title: job.name,
            description: job.jobTitle,
        },
    };
}

export default async function Job({ params }: Props) {
    const slug = params.job;
    const job: JobType = await getSingleJob(slug);

    return (
        <main className="max-w-6xl mx-auto lg:px-16 px-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-start justify-between mb-4">
                    <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
                        {job.name}
                    </h1>
                </div>

                {job.imageUrls.map((image, index) =>
                    <Image width={400} height={400} src={image} alt="gay" key={index} />
                )}

            </div>
        </main>
    );
}