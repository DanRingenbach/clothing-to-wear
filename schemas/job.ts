// schemas/job.ts

import { BiBriefcase } from "react-icons/bi";
import { defineField } from "sanity";


const job = {
    name: "job",
    title: "Job",
    type: "document",
    icon: BiBriefcase,
    fields: [
        {
            name: "name",
            title: "Company Name",
            type: "string",
            description: "What is the name of the company?",
        },
        {
            name: "jobTitle",
            title: "Job Title",
            type: "string",
            description: "Enter the job title. E.g: Software Developer",
        },
        {
            name: "url",
            title: "Company Website",
            type: "url",
        },
        {
            name: "description",
            title: "Job Description",
            type: "text",
            rows: 3,
            description: "Write a brief description about this role",
        },
        {
            name: "imageArray",
            title: "Image Array",
            type: "array",
            description: "Image Array",
            of: [{
                type:'image'
            }]
        },
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            description:
              "Add a custom slug for the URL or generate one from the name",
            options: { source: "name" },
            validation: (rule) => rule.required(),
          }),

    ],
};

export default job;