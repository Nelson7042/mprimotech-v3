"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function FAQPage() {
  const faqs = [
    {
      q: "What areas do you cover?",
      a: "We're based in the UK and visit client sites across the country. We specialise in care homes and hospitality businesses."
    },
    {
      q: "Do you come to our site?",
      a: "Yes – we visit you in person. We believe in seeing your systems face-to-face, not just remote ticketing."
    },
    {
      q: "What industries do you work with?",
      a: "We primarily work with care homes and hospitality businesses. We understand the admin challenges in these sectors."
    },
    {
      q: "What kind of problems do you solve?",
      a: "We untangle messy admin systems, automate manual processes, fix slow WiFi and networks, and provide ongoing IT support."
    },
    {
      q: "How long does it take to get started?",
      a: "After you reach out, we'll arrange a site visit to see your systems. From there, we'll give you a clear plan."
    },
    {
      q: "Are you a big company?",
      a: "No – we're a small UK team. You'll speak to real people who know their stuff."
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg opacity-90">Honest answers about how we work.</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-3xl px-4">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
