"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SectorsPage() {
  const sectors = [
    {
      name: "Care Homes",
      description: "We help care homes automate admin, fix unreliable tech, and give staff more time with residents.",
      href: "/sectors/care-homes"
    },
    {
      name: "Hospitality",
      description: "From hotels to restaurants – we untangle messy systems and keep your tech working reliably.",
      href: "/sectors/hospitality"
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Sectors We Work With</h1>
            <p className="text-lg opacity-90">We specialise in care homes and hospitality.</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {sectors.map((sector) => (
                <div key={sector.name} className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-lg transition">
                  <h2 className="text-2xl font-bold mb-3">{sector.name}</h2>
                  <p className="text-muted-foreground mb-6">{sector.description}</p>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                    <Link href="/contact">Get in touch</Link>
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-3">Not in care or hospitality?</h3>
              <p className="text-muted-foreground mb-4">We still help with IT challenges – get in touch and we'll see if we can help.</p>
              <Button asChild variant="outline">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
