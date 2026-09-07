"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    ongoingSupport: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateId = "template_hjm0zud";
      const serviceId = "service_u8ksijg";
      const publicKey = "ktFHFC2F9khjQQDVg";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        ongoing_support: formData.ongoingSupport ? "Yes" : "No",
        to_name: "MPrimo Tech Team",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      alert("Thanks! We'll be in touch within 1 working day.");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        ongoingSupport: false,
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Sorry, there was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's untangle your admin mess
            </h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              If you're in care or hospitality, we know exactly what you're dealing with.
              We'll visit your site and show you what we can automate.
            </p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-lg bg-white border text-center shadow-sm">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <a href="mailto:info@mprimotech.com" className="text-primary hover:underline">
                  info@mprimotech.com
                </a>
              </div>
              <div className="p-6 rounded-lg bg-white border text-center shadow-sm">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Phone</h3>
                <a href="tel:+443302237450" className="text-primary hover:underline">
                  +44 (330) 223-7450
                </a>
              </div>
              <div className="p-6 rounded-lg bg-white border text-center shadow-sm">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Response Time</h3>
                <p className="text-muted-foreground">We aim to reply within 1 working day</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form and we'll be in touch to arrange a site visit.
                We're a small UK team – you'll speak to a real person.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                      placeholder="+44 330 223 7450"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">What do you need help with?</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="">Select an option...</option>
                    <option value="site-visit">Site visit to see our systems</option>
                    <option value="admin-automation">Automating manual admin work</option>
                    <option value="spreadsheets">Untangling spreadsheets and legacy software</option>
                    <option value="network">Slow WiFi / network issues</option>
                    <option value="backup">Backup and data safety</option>
                    <option value="support">Ongoing IT support for my team</option>
                    <option value="other">Something else – tell us below</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Tell us about the admin headaches, manual processes, or IT problems you're dealing with..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="ongoingSupport"
                    checked={formData.ongoingSupport}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <label className="text-sm text-muted-foreground">
                    I'd like ongoing IT support, not just a one-off fix
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
