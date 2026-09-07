"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | MPrimo Tech",
  description: "MPrimo Tech's privacy policy – how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4">
            <div className="prose prose-lg">
              <p className="text-muted-foreground">Last updated: September 2026</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you fill out our contact form. This includes your name, email, phone number, and company name.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p>We use your information to respond to your inquiries, arrange site visits, and provide our IT support services.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
              <p>We take reasonable measures to protect your personal information from loss, theft, and unauthorized access.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>If you have questions about this privacy policy, contact us at <a href="mailto:info@mprimotech.com" className="text-primary hover:underline">info@mprimotech.com</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
