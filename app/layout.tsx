import type { Metadata } from "next";

import "./globals.css";

import localFont from 'next/font/local';

// Load Hero New font with all weights and styles
const heroNew = localFont({
  src: [
    // Bold
    {
      path: '../fonts/hero-new-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/hero-new-extrabold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/hero-new-regular.otf',
      weight: '400',
      style: 'normal',
    },
    
  ],
  display: 'swap',
  variable: '--font-hero-new', // Optional: Define a CSS variable for the font
});

const neueRemanGt = localFont({
  src: [
    {
      path: "../fonts/neue-reman-gt/NeueRemanGt-Heavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/neue-reman-gt/NeueRemanGt-HeavyCondensed.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/neue-reman-gt/NeueRemanGt-HeavyCondIta.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/neue-reman-gt/NeueRemanGt-HeavyExpanded.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/neue-reman-gt/NeueRemanGt-HeavyExpIta.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/neue-reman-gt/NeueRemanGt-HeavyItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/neue-reman-gt/NeueRemanGt-HeavySemExpIta.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/neue-reman-gt/NeueRemanGt-HeavySemiCond.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/neue-reman-gt/NeueRemanGt-HeavySemiCondIta.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/neue-reman-gt/NeueRemanGt-HeavySemiExpanded.otf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-neue-reman-gt",
});

export const metadata: Metadata = {
  title: "GreenLight Digital | Next-Gen Web Solutions",
  description: "Innovative web solutions powered by Next.js. Built with create-next-app for seamless performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heroNew.variable} ${neueRemanGt.variable}`}>
       <body className={heroNew.className}>{children}</body>
    </html>
  );
}
