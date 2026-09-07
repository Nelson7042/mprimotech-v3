"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "On-Site IT Support | MPrimo Tech",
  description: "We visit your care home or hospitality business to fix tech issues, untangle admin, and automate manual work.",
};

export default function OnSiteITSupportPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">On-Site IT Support</h1>
            <p className="text-lg opacity-90">We come to your site and fix things in person.</p>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4">
            <p className="text-lg text-muted-foreground mb-6">No remote-only ticketing. We visit your care home or hospitality business, see your systems firsthand, and fix what's not working.</p>
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
