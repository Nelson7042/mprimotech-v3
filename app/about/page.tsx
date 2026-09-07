"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About MPrimo Tech</h1>
            <p className="text-xl opacity-90">We're a UK-based IT team that comes to your site.</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold mb-6">We're a Small UK Team</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're based in the UK and we visit our clients in person. We specialise in care homes and hospitality – we know the admin pain points you deal with.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We're not a big corporate. We're a hands-on team that untangles messy systems, automates manual work, and makes tech work for your staff.
            </p>
            <div className="grid gap-4 mt-8">
              {[
                "UK-based – we come to your site",
                "We specialise in care and hospitality",
                "We automate admin and manual processes",
                "We're honest, practical, and straightforward"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-white border rounded-lg">
                  <CheckCircle className="text-primary h-6 w-6" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Book a site visit</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
