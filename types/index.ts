// types/index.ts

import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string,
  fullName: string,
  headline: string,
  profileImage: {
    alt: string,
    image: string
  },
  shortBio: string,
  email: string,
  fullBio: PortableTextBlock[],
  location: string,
  socialLinks: string[],
};


export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  url: string;
  description: string;
  imageUrls: string[];
  slug: string;
 
};