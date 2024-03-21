'use client';

import type { JobType } from "@/types";
import { getSingleJob } from "@/sanity/sanity.query";
import { getJob } from "@/sanity/sanity.query";

import React, { Suspense, lazy } from 'react';

import Slider from "./CustomCarousel";


export default async function Job() {

    const jobs = await getJob()

    const random = Math.floor(Math.random() * jobs.length);
    const randomJob = jobs[random];

    const job: JobType = await getSingleJob(randomJob.slug);

    const slides = job.imageUrls

    return (
        <section className="">



            <div className="h-2/4 flex justify-center">

                <div
                    key={job._id}
                    className=""
                >

                    <div>
                            <Slider slides={slides} />

                    </div>
                </div>

            </div>
        </section>
    );

}