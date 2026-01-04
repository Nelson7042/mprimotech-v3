import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "MPrimo Tech - Enterprise IT Services & Solutions",
    template: "%s | MPrimo Tech"
  },
  description: "Leading enterprise IT services provider offering managed IT, cybersecurity, cloud infrastructure, remote support, and B2B IT contracts. Transform your business with reliable technology solutions.",
  keywords: ["enterprise IT services", "managed IT", "cybersecurity", "cloud infrastructure", "remote desktop support", "IT consulting", "B2B IT contracts", "digital workplace", "network connectivity", "backup solutions"],
  authors: [{ name: "MPrimo Tech" }],
  creator: "MPrimo Tech",
  publisher: "MPrimo Tech",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mprimotech.com",
    title: "MPrimo Tech - Enterprise IT Services & Solutions",
    description: "Leading enterprise IT services provider offering managed IT, cybersecurity, cloud infrastructure, and comprehensive technology solutions.",
    siteName: "MPrimo Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPrimo Tech - Enterprise IT Services",
    description: "Transform your business with reliable enterprise IT solutions and services.",
    creator: "@mprimotech",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://mprimotech.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
