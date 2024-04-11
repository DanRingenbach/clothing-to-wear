// app/about/page.tsx

import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";

export default async function About() {
  const profile: ProfileType[] = await getProfile();
  

 

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6 bg-white text-black">
  {profile && profile.map((data) => (
      <div key={data._id}>
        <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
          <div className="order-2 lg:order-none">
            <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
              I&apos;m {data.fullName}
            </h1>

            <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
              <PortableText value={data.fullBio} />
            </div>
          </div>

          <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
            <div>

              <Image
                className="mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                src={data.profileImage.image}
                width={400}
                height={400}
                quality={100}
                alt={data.profileImage.alt}
              />
              

            </div>

            <ul>
              <li>
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                >
                  <BiEnvelope className="text-lg" />
                  {data.email}
                </a>
              </li>
              
              {Object.entries(data.socialLinks)
                    .sort()
                    .map(([key, value], id) => (
                      <li key={id}>
                        <a
                          href={value}
                          rel="noreferer noopener"
                          className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                        >
                        <BiFile className="text-lg" />
                          {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                        </a>
                      </li>
                    ))}
              
            </ul>
          </div>
        </section>
      </div>
    ))}
</main>
  );
}