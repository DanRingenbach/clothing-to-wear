import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";
import Link from "next/link";

export default async function Job() {
    const job: JobType[] = await getJob();

    return (
        <section className="mt-32">
            <div className="mb-16">
                <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
            </div>
           

            <div className="">
                {job.map((data) => (
                    <Link href={`/jobs/${data.slug}`}>
                    <div
                        key={data._id}
                        className=""
                    >
                       {data.imageUrls.map((image, index) =>
                            <Image width={400} height={400} src={image} alt="gay" key={index} />
                        )}
                        <a
                            href={data.url}
                            rel="noreferrer noopener"
                            className=""
                        >
                        </a>
                        <div className="">
                            <h3 className="text-xl font-bold">{data.name}</h3>
                            <p>{data.jobTitle}</p>
                            <small className="">

                            </small>
                            <p className="">{data.description}</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    </Link>
                    ))}
            </div>
        </section>
    );

}