"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "IT Support for Care Homes | MPrimo Tech",
  description: "We visit care homes to untangle messy admin, automate manual work, and fix tech. UK-based on-site IT support for care homes.",
};

export default function CareHomesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">IT Support for Care Homes</h1>
            <p className="text-lg opacity-90">We visit your site, untangle messy admin, and automate manual work.</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold mb-6">We Understand Care Homes</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Care homes have unique IT challenges – paper trails, legacy software, and staff who need tech to work reliably. We come to your site and fix it.
            </p>
            
            <div className="grid gap-4 mb-8">
              {[
                "We visit your care home in person",
                "We untangle messy admin and spreadsheets",
                "We automate manual processes",
                "We fix slow WiFi and network issues",
                "We provide ongoing IT support"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-white border rounded-lg">
                  <CheckCircle className="text-primary h-6 w-6" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Book a site visit</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
