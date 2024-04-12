// 'use client'
import React, { useState, useEffect } from 'react';
import Slider from "./CustomCarousel";

// Assuming synchronous versions of the functions are available
import { getJob } from "@/sanity/sanity.query";
import { JobType } from "@/types";

const random = function() {
    Math.floor(Math.random() * 10)
}

export default async function Job(){
    const job: JobType[] = await getJob();
    const singleJob = job[Math.floor(Math.random() * job.length)]
    const slides = singleJob.imageUrls
    return (
        <section className="">
            <div className="h-2/4 flex justify-center">
                <div key={singleJob._id} className="">
                    <div>
                        <Slider slides={slides} />
                    </div>
                </div>
            </div>
        </section>
    );
}