import Image from "next/image";
import type { JobType } from "@/types";
import { getSingleJob } from "@/sanity/sanity.query";
import { getJob } from "@/sanity/sanity.query";




export default async function Job() {
    const jobs = await getJob() 
    
    
    const random = Math.floor(Math.random() * jobs.length);
    const randomJob = jobs[random];

    const job: JobType = await getSingleJob(randomJob.slug);

    return (
        <section className="mt-32">
           
           

            <div className="flex flex-col gap-y-12">
               
                    <div
                        key={job._id}
                        className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
                    >
                       {job.imageUrls.map((image, index) =>
                            <Image width={100} height={100} src={image} alt="gay" key={index} />
                        )}
                        <a
                            href={job.url}
                            rel="noreferrer noopener"
                            className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
                        >
                        </a>
                        <div className="flex flex-col items-start">
                            <h3 className="text-xl font-bold">{job.name}</h3>
                            <p>{job.jobTitle}</p>
                            <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">

                            </small>
                        </div>
                        <div>
                        </div>
                    </div>
                
            </div>
        </section>
    );

}