"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Terms of Service | MPrimo Tech",
  description: "MPrimo Tech's terms of service – our agreement with you.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4">
            <div className="prose prose-lg">
              <p className="text-muted-foreground">Last updated: September 2026</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Services</h2>
              <p>We provide on-site IT support, admin automation, and technology services for UK care homes and hospitality businesses.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Site Visits</h2>
              <p>We visit your site to assess your technology needs and provide hands-on support.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Payment</h2>
              <p>Payment terms will be agreed upon before any work begins.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>If you have questions about these terms, contact us at <a href="mailto:info@mprimotech.com" className="text-primary hover:underline">info@mprimotech.com</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
