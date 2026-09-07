import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MPrimo Tech – On-Site IT for UK Care Homes & Hospitality",
  description:
    "UK-based IT support that visits your site. We untangle messy admin, automate manual work, and fix tech for care homes and hospitality businesses.",
  keywords: [
    "IT support UK",
    "on-site IT support",
    "care home IT support",
    "hospitality IT support",
    "admin automation",
    "IT for care homes",
    "UK IT company",
    "site visit IT support",
    "small business IT support UK",
    "automate manual processes",
    "IT support for hospitality",
    "care home technology",
    "UK based IT support",
    "on-site IT services",
    "IT automation UK",
  ],
  openGraph: {
    title: "MPrimo Tech – On-Site IT for UK Care Homes & Hospitality",
    description:
      "UK-based IT support that visits your site. We untangle messy admin and automate manual work.",
    url: "https://mprimotech.com",
    siteName: "MPrimo Tech",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mprimotech.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
