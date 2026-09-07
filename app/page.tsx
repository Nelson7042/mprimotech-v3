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
      title: "Admin Workflow Automation",
      description:
        "Stop double-handling paperwork and spreadsheets. We connect your daily tools and automate repetitive admin tasks.",
      icon: <Zap className="h-6 w-6" />,
      href: "/services/managed-it",
    },
    {
      title: "On-Site Workflow Audits",
      description:
        "We visit your care home or venue in person to shadow your staff, identify bottlenecks, and map your actual processes.",
      icon: <FileSearch className="h-6 w-6" />,
      href: "/services/risk-analysis",
    },
    {
      title: "Cloud & Systems Integration",
      description:
        "Get your rota, CRM, billing, and care planning software talking to each other without messy CSV exports.",
      icon: <Cloud className="h-6 w-6" />,
      href: "/services/cloud",
    },
    {
      title: "Digital Workplace Setup",
      description:
        "Equip carers, managers, and front-of-house staff with reliable tablets, shared folders, and simple secure logins.",
      icon: <Users className="h-6 w-6" />,
      href: "/services/digital-workplace",
    },
    {
      title: "Reliable Site Connectivity",
      description:
        "WiFi dead zones in care homes or restaurants stop work in its tracks. We audit and stabilize your on-site network.",
      icon: <TrendingUp className="h-6 w-6" />,
      href: "/services/network",
    },
    {
      title: "Backup & Data Protection",
      description:
        "Ensure resident records, financial details, and guest data are securely backed up with rapid recovery.",
      icon: <Lock className="h-6 w-6" />,
      href: "/services/backup",
    },
  ];

  const sectors = [
    "Healthcare",
    "Retail",
    "Education",
    "Manufacturing",
    "Financial Services",
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
              Get an on-site admin & workflow review for your care or hospitality business
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              (No cost, no jargon, no sales pitch)
            </p>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-white text-base sm:text-lg py-6"
            >
              <Link href="/contact">→ Yes, Request a Review</Link>
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
                We come on site to map your messy admin — and automate it.
              </h1>
              <ul className="space-y-4 max-w-xl mx-auto mb-8 text-left">
                {[
                  "Small UK firm supporting care homes, healthcare & hospitality venues",
                  "Hands-on site visits to map paper records, spreadsheets & duplicate tasks",
                  "Clean automations that connect your existing systems",
                  "Direct UK team support with zero tech jargon",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-lg sm:text-xl"
                  >
                    <CheckCircle
                      className="text-[#2D60A3] mr-3 flex-shrink-0"
                      size={24}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* Middle Section: Alert/Banner */}
              <div className="bg-[#FFFBEB] border border-[#FEEBC8] rounded-xl p-4 sm:p-3 flex items-center space-x-4 mb-8 max-w-[550px] mx-auto text-left">
                <Bell
                  className="text-[#D69E2E] flex-shrink-0 mt-0.5"
                  size={24}
                  fill="currentColor"
                />
                <div>
                  <p className="font-semibold text-lg text-blue-800 mb-1">
                    On-Site Admin & Workflow Review
                  </p>
                  <p className="text-sm text-blue-800">
                    Speak directly with our UK team about your workflow. No obligation.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 text-base sm:text-lg px-8 py-6"
                >
                  <Link href="/contact">Schedule On-Site Discovery</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="mt-8 sm:mt-12 lg:mt-16 rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-secondary h-48 sm:h-64 lg:h-80 flex items-center justify-center relative md:hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img
                src="./assets/enterprise.jpg"
                alt="On-Site IT and Automation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-[#1A2B6B] py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 leading-tight">
              How We Work With You On Site
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard
                icon={Users}
                value="01"
                title="We Come On Site"
                description="We visit your care home or venue in person to see how your team really works."
              />
              <StatCard
                icon={FileSearch}
                value="02"
                title="Map the Messy Admin"
                description="We trace every spreadsheet, paper form, rota clash, and duplicated task."
              />
              <StatCard
                icon={Rocket}
                value="03"
                title="Automate It"
                description="We connect systems and build clean automations that give your team hours back each week."
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
                We don't offer a confusing menu of 100 options. We focus on the
                six pillars that make modern enterprises resilient and
                efficient.
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
                Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                The Full Spectrum
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From day-to-day support to high-level strategy, we handle the
                technology lifecycle.
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
                        { name: "Managed IT Services", icon: "🖥️" },
                        { name: "Risk Analysis & Audits", icon: "📋" }, // Updated Marquee item
                        { name: "Cloud & Infrastructure", icon: "☁️" },
                        { name: "Digital Workplace", icon: "💼" },
                        { name: "Network & Connectivity", icon: "🌐" },
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
                        { name: "Backup & Continuity", icon: "💾" },
                        { name: "Strategic Consultancy", icon: "💡" },
                        { name: "Project Rollouts", icon: "⚙️" },
                        { name: "B2B Contracts", icon: "🤝" },
                        { name: "24/7 Support", icon: "📞" },
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
                Why Care & Hospitality Teams Choose Us
              </h2>
            </div>
            <div className="grid gap-4 sm:gap-5">
              {[
                "Direct on-site visits across the UK to understand your actual setup",
                "Plain English guidance — zero confusing IT jargon or vendor buzzwords",
                "Built around your existing tools, rotas, and daily operations",
                "Hands-on staff training and side-by-side walk-throughs",
                "A dedicated UK point of contact who picks up the phone",
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
                We Speak Your Language
              </h2>
              <p className="text-muted-foreground">
                Whether you manage resident care plans, shift rotas, or front-of-house operations, we understand the daily workflow.
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
              Stop wasting hours on messy admin.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-8 px-2 max-w-2xl mx-auto">
              Every week lost to paper records, duplicate spreadsheets, and clunky systems is time taken away from your residents and guests. Let's have a 15-minute conversation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 shadow-lg px-6 sm:px-10 h-16 sm:h-14 text-base sm:text-lg w-full sm:w-auto"
            >
              <Link href="/contact">Schedule Free Discovery Call</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
