// sanity/sanity.query.ts

import { groq } from "next-sanity";
import  client  from "./sanity.client";

export async function getProfile() {
    return client.fetch(
        groq`*[_type == "profile"]{
          _id,
          fullName,
          headline,
          profileImage {alt, "image": asset->url},
          shortBio,
          location,
          fullBio,
          email,
          socialLinks,
        }`
    );
}


export async function getJob() {
  return client.fetch(
    groq`*[_type == "job"]{
      _id,
      name,
      jobTitle,
      url,
      description,
      'imageUrls' : imageArray[].asset->url,
      'slug': slug.current
    }`
  );
}

export async function getSingleJob(slug: string) {
  return client.fetch(
    groq`*[_type == "job" && slug.current == $slug][0]{
      _id,
      name,
      jobTitle,
      url,
      description,
      'imageUrls' : imageArray[].asset->url
    }`,
    { slug }
  );
}

