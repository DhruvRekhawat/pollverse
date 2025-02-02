import type { Metadata } from "next";
import {Inter,Open_Sans} from 'next/font/google'
import "./globals.css";
import Topbar from "@/components/molecules/navigation/Topbar";


export const metadata: Metadata = {
  title: "PollVerse",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({weight:["400","600"],subsets:["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${openSans.className} antialiased`}
      >
            <Topbar/>
        <main className="relative top-4 px-2 md:px-8 ">
        {children}
        </main>
      </body>
    </html>
  );
}
