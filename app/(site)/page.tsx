// app/page.tsx


import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import RandomGallery from "../../components/RandomGallery"


export default async function Home() {
  const profile: ProfileType[] = await getProfile();

 
  

    return (
      <main className="max-w-7xl mx-auto lg:px-16 px-6">
        <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">

          {profile &&
            profile.map((data) => (
              <div key={data._id} className="lg:max-w-2xl max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                  {data.headline}

                </h1>
                <p className="text-base text-zinc-400 leading-relaxed">
                  {data.shortBio}
                </p>
              </div>
            ))}
        </section>
        
          <RandomGallery />
      </main>
    );
  }