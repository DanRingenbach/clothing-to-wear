'use client';

import type { JobType } from "@/types";
import { getSingleJob, getJob } from "@/sanity/sanity.query";

import React, { useState, useEffect } from 'react';
import Slider from "./CustomCarousel";

export default function Job() {
    const [job, setJob] = useState<JobType | null>(null);
    const [slides, setSlides] = useState<string[]>([]);

    useEffect(() => {
        async function fetchData() {
            const jobs = await getJob();
            const random = Math.floor(Math.random() * jobs.length);
            const randomJob = jobs[random];
            const jobData = await getSingleJob(randomJob.slug);
            setJob(jobData);
            setSlides(jobData.imageUrls);
        }

        fetchData();
    }, []);

    if (!job) {
        return null; // or Loading indicator
    }

    return (
        <section className="">
            <div className="h-2/4 flex justify-center">
                <div key={job._id} className="">
                    <div>
                        <Slider slides={slides} />
                    </div>
                </div>
            </div>
        </section>
    );
}