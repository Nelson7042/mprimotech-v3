"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Book a Process Review | MPrimo Tech",
  description: "Book a 20-minute process review with our UK-based IT team. We'll visit your site and show you what we can automate.",
};

export default function BookConsultationPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Book a 20-Minute Process Review</h1>
            <p className="text-lg opacity-90">We'll visit your site and show you what we can automate.</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4">
            <div className="bg-white border rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Contact us to arrange a site visit</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form on our contact page and we'll be in touch within 1 working day.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Go to Contact Page</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
