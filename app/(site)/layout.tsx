// app/layout.tsx
'use client'

import "../globals.css";
import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation'
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";

const inter = Inter({ subsets: ["latin"] });


// export const metadata: Metadata = {
//   title: "Sanity Next.js Portfolio Site",
//   description: "A personal portfolio site built with Sanity and Next.js",
//   openGraph: {
//     images: "add-your-open-graph-image-url-here",
//   },
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isSanityStudio = pathname.startsWith('/studio');
  return (
    <html lang="en">
      <body className={`${inter.className} text-black`}>
        {!isSanityStudio && <Navbar />}        
        {children}
        {!isSanityStudio && <Footer />}
      </body>
    </html>
  );
}