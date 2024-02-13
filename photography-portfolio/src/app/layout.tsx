import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "./globals.css";
import Socialmedia from "./components/Socialmedia";
import HeroSection from "./components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Studios",
  description: "We deliver quality",

  icons:{
    icon:['/favicon.ico?v=4',],
    apple: ['/apple-touch-icon.png?v=4',],
    shortcut: ['/apple-touch-icon.png'],


  },
  manifest:'site.webmanifest'

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navbar/>
        <Socialmedia />
        {children}</body>
    </html>
  );
}
