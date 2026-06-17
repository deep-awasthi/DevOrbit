import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexengineer.dev"),

  title: {
    default: "NexEngineer",
    template: "%s | NexEngineer",
  },

  description:
    "Master Java, DSA, Spring Boot, Docker, Kubernetes, LLD, HLD, Python, AI and Go through structured learning paths and interview-focused content.",

  keywords: [
    "Java",
    "DSA",
    "Spring Boot",
    "Docker",
    "Kubernetes",
    "LLD",
    "HLD",
    "Python",
    "AI",
    "Go",
    "System Design",
  ],

  openGraph: {
    title: "NexEngineer",
    description:
      "Master Software Engineering through structured learning paths.",
    siteName: "NexEngineer",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.className}>
        <Navbar />

        {children}
        <GoogleAnalytics />

        <Footer />
      </body>
    </html>
  );
}