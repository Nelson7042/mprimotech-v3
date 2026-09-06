"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceCard from "@/components/service-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FileSearch,
  Cloud,
  Users,
  Lock,
  Zap,
  TrendingUp,
  CheckCircle,
  Bell,
  Briefcase,
  Rocket,
  X,
  Quote,
} from "lucide-react";

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  value,
  title,
  description,
}) => {
  return (
    <div className="bg-[#263877] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-[#3A4D8C]">
      <Icon
        className={`w-12 h-12 flex-shrink-0 mb-4 ${
          Icon === Rocket ? "text-[#f4a300]" : "text-white"
        }`}
      />
      <p className="text-5xl font-bold text-white mb-2">{value}</p>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-base text-blue-100 leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exitPopupShown")) {
        setShowPopup(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const services = [
    {
      title: "On-Site IT Support",
      description:
        "We come to your location. No remote-only ticketing – we see your systems face-to-face.",
      icon: <Zap className="h-6 w-6" />,
      href: "/services/managed-it",
    },
    {
      title: "Admin Automation",
      description:
        "We find the manual processes, spreadsheets, and legacy software that eat your team's time – and automate them.",
      icon: <FileSearch className="h-6 w-6" />,
      href: "/services/risk-analysis",
    },
    {
      title: "System Untangling",
      description:
        "Got messy IT? We map what you have, simplify it, and make it work for your team – not the other way around.",
      icon: <Cloud className="h-6 w-6" />,
      href: "/services/cloud",
    },
    {
      title: "Team Productivity",
      description:
        "Give your staff tools that actually help them focus on residents or guests – not fighting with tech.",
      icon: <Users className="h-6 w-6" />,
      href: "/services/digital-workplace",
    },
    {
      title: "Network & WiFi",
      description:
        "Slow internet and dead zones kill productivity. We design networks that work reliably in your building.",
      icon: <TrendingUp className="h-6 w-6" />,
      href: "/services/network",
    },
    {
      title: "Backup & Safety",
      description:
        "Your data is too important to lose. We set up simple, reliable backups that give you peace of mind.",
      icon: <Lock className="h-6 w-6" />,
      href: "/services/backup",
    },
  ];

  const sectors = [
    "Care Homes",
    "Hospitality",
    "Healthcare",
    "Retail",
    "Education",
    "Remote & Desktop Support",
    "Rollouts & Refresh",
    "Hands & Eyes Services",
  ];

  return (
    <>
      <Header />

      {/* Exit Intent Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Before you go...
            </h3>
            <p className="text-base sm:text-lg text-foreground mb-6">
              Want to see how we'd untangle your admin mess?
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              We'll do a free, no-obligation site visit to understand your systems.
            </p>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-white text-base sm:text-lg py-6"
            >
              <Link href="/contact">→ Yes, book a site visit</Link>
            </Button>
          </div>
        </div>
      )}
      <main>
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-white">
          {/* Subtle background overlay */}
          <img
            src="/assets/bg-1.jpg"
            alt=""
            className="w-full object-cover absolute top-0 left-0 right-0 opacity-40 h-full z-0 "
          />
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 z-10 relative">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
                On-Site IT for UK Care Homes & Hospitality
              </h1>
              <ul className="space-y-4 max-w-md mx-auto mb-8 text-left">
                <li className="flex items-center text-lg sm:text-xl">
                  <CheckCircle className="text-[#2D60A3] mr-3 flex-shrink-0" size={24} />
                  <span>We come to your site – no remote-only ticketing</span>
                </li>
                <li className="flex items-center text-lg sm:text-xl">
                  <CheckCircle className="text-[#2D60A3] mr-3 flex-shrink-0" size={24} />
                  <span>Untangle messy admin systems and paper trails</span>
                </li>
                <li className="flex items-center text-lg sm:text-xl">
                  <CheckCircle className="text-[#2D60A3] mr-3 flex-shrink-0" size={24} />
                  <span>Automate manual work so your team can focus on care</span>
                </li>
              </ul>
              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 text-base sm:text-lg px-8 py-6"
                >
                  <Link href="/contact">Send Enquiry</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="mt-8 sm:mt-12 lg:mt-16 rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-secondary h-48 sm:h-64 lg:h-80 flex items-center justify-center relative md:hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img
                src="./assets/enterprise.jpg"
                alt="Modern IT Infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Core Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Where We Help
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                We focus on the problems that actually slow down care homes and hospitality businesses – messy admin, manual processes, and unreliable tech.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {services.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Rolling Service Portfolio */}
        <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50/50 to-white overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px]"></div>
          </div>

          <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                What We Do
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                We Sort Out the Tech That Gets in Your Way
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From site visits to system automation – we handle the tech so your team can focus on what matters.
              </p>
            </div>

            {/* Marquee Container */}
            <div className="relative py-4 mask-fade-sides">
              {/* First Row - Scroll Right */}
              <div className="overflow-hidden mb-6">
                <div className="flex animate-marquee-right">
                  {[...Array(2)].map((_, setIndex) => (
                    <div
                      key={setIndex}
                      className="flex shrink-0 gap-4 sm:gap-6 px-3"
                    >
                      {[
                        { name: "On-Site IT Support", icon: "🖥️" },
                        { name: "Admin Automation", icon: "📋" },
                        { name: "System Untangling", icon: "☁️" },
                        { name: "Team Productivity", icon: "💼" },
                        { name: "Network & WiFi", icon: "🌐" },
                      ].map((service, index) => (
                        <div
                          key={`${setIndex}-${index}`}
                          className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm whitespace-nowrap"
                        >
                          <span className="text-xl">{service.icon}</span>
                          <span className="text-foreground font-medium text-sm sm:text-base">
                            {service.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Row - Scroll Left */}
              <div className="overflow-hidden">
                <div className="flex animate-marquee-left">
                  {[...Array(2)].map((_, setIndex) => (
                    <div
                      key={setIndex}
                      className="flex shrink-0 gap-4 sm:gap-6 px-3"
                    >
                      {[
                        { name: "Backup & Safety", icon: "💾" },
                        { name: "IT Strategy", icon: "💡" },
                        { name: "Project Rollouts", icon: "⚙️" },
                        { name: "Ongoing Support", icon: "🤝" },
                        { name: "Site Visits", icon: "📞" },
                      ].map((service, index) => (
                        <div
                          key={`${setIndex}-${index}`}
                          className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm whitespace-nowrap"
                        >
                          <span className="text-xl">{service.icon}</span>
                          <span className="text-foreground font-medium text-sm sm:text-base">
                            {service.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why UK Care & Hospitality Teams Work With Us
              </h2>
            </div>
            <div className="grid gap-4 sm:gap-5">
              {[
                "We visit your site – we're a UK-based team that comes to you",
                "We specialise in care and hospitality – we know your admin pain points",
                "We untangle messy spreadsheets, legacy software, and manual processes",
                "We automate the boring stuff so your staff can focus on residents or guests",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border hover:border-primary/50 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg text-foreground font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                We Work Across the UK
              </h2>
              <p className="text-muted-foreground">
                From care homes to hotels – if you've got messy admin, we can help.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {sectors.map((sector, index) => (
                <Link
                  key={index}
                  href={`/sectors/${sector.toLowerCase().replace(/ /g, "-")}`}
                  className="group block"
                >
                  <div className="h-full p-4 sm:p-6 rounded-xl border border-border bg-white text-center hover:shadow-lg hover:border-primary/50 transition-all duration-300 flex items-center justify-center">
                    <span className="text-sm sm:text-base lg:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {sector}
                    </span>
                    <CheckCircle className="w-4 h-4 ml-2 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="mx-auto max-w-3xl px-3 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Let's talk about your admin headaches.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-8 px-2 max-w-2xl mx-auto">
              We'll visit your site, see the mess firsthand, and show you what we can automate. No sales pitch – just an honest look at what's possible.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 shadow-lg px-6 sm:px-10 h-16 sm:h-14 text-base sm:text-lg w-full sm:w-auto"
            >
              <Link href="/contact">Book a site visit</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
