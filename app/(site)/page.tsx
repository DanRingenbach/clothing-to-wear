// app/page.tsx
import RandomGallery from "../../components/RandomGallery"


export default async function Home() {

 
    return (
      <main className="max-w-7xl mx-auto lg:px-16 px-6">
          <RandomGallery />
      </main>
    );
  }