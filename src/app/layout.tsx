import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../style/globals.css";
import { Providers } from "./providers";
import Layout from "@/components/Layout";
import ScrollToTopButton from "@/components/ScrollToTopPage";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwindyt blog content",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={outfit.className}>
        <Providers>
          <div className="flex w-full dark:bg-black bg-light overflow-hidden scroll-smooth md:scroll-auto">
            <Layout>{children}</Layout>
            <ScrollToTopButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
