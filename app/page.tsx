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
  const stats = [
    { label: "Enterprise Trust Us", value: "50+" },
    { label: "Deployments", value: "150+" },
    { label: "Client Retention Rate", value: "98%" },
  ];

  const newServices = [
    "Managed IT Services",
    "Cloud & Remote Infrastructure",
    "B2B IT Support Contracts",
    "24/7 Global Monitoring",
  ];

  const services = [
    {
      title: "Managed IT Services",
      description:
        "We watch the screens so you don't have to. 24/7 monitoring that catches issues before they interrupt your day.",
      icon: <Zap className="h-6 w-6" />,
      href: "/services/managed-it",
    },
    {
      title: "Risk Analysis",
      description:
        "You can't fix what you can't see. We find the blind spots and vulnerabilities in your stack before the bad guys do.",
      icon: <FileSearch className="h-6 w-6" />, // Updated icon
      href: "/services/risk-analysis", // Updated link
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Modernize your backbone. We build scalable environments that grow effortlessly alongside your revenue.",
      icon: <Cloud className="h-6 w-6" />,
      href: "/services/cloud",
    },
    {
      title: "Digital Workplace",
      description:
        "Work is an activity, not a place. Give your team the tools to collaborate securely from anywhere.",
      icon: <Users className="h-6 w-6" />,
      href: "/services/digital-workplace",
    },
    {
      title: "Network & Connectivity",
      description:
        "Slow WiFi kills momentum. We design high-performance networks that keep your team moving fast.",
      icon: <TrendingUp className="h-6 w-6" />,
      href: "/services/network",
    },
    {
      title: "Backup & Continuity",
      description:
        "Your safety net. If disaster strikes, we ensure your data is safe and your recovery is rapid.",
      icon: <Lock className="h-6 w-6" />,
      href: "/services/backup",
    },
  ];

  const sectors = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Education",
    "Government",
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
              Get a complimentary IT review for your next bid or project
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              (No cost, no sales pitch)
            </p>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-white text-base sm:text-lg py-6"
            >
              <Link href="/contact">→ Yes, Send me the checklist</Link>
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
                Reliable IT that keeps your business running securely,
                efficiently, and 24/7.
              </h1>
              <ul className="space-y-4 max-w-md mx-auto mb-8 text-left">
                {newServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center text-lg sm:text-xl"
                  >
                    <CheckCircle
                      className="text-[#2D60A3] mr-3 flex-shrink-0"
                      size={24}
                    />
                    <span>{service}</span>
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
                    Free IT Strategy Session – Only 5 Slots Left This Week
                  </p>
                  <p className="text-sm text-blue-800">
                    Book in 60 seconds. No obligation.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 text-base sm:text-lg px-8 py-6"
                >
                  <Link href="/contact">Book Consultation</Link>
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

        {/* Stats Section */}
        <section className="bg-[#1A2B6B] py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 leading-tight">
              Why Enterprises Trust <br /> MPrimo Tech
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard
                icon={Lock}
                value="50+"
                title="Enterprise Clients"
                description="Trusted globally across finance, government, logistics & tech"
              />
              <StatCard
                icon={Rocket}
                value="150+"
                title="Successful Deployments"
                description="Cloud, automation, cybersecurity & full IT infrastructure"
              />
              <StatCard
                icon={Briefcase}
                value="98%"
                title="Client Retention Rate"
                description="Because our support actually solves problems."
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
                Why Contractors Choose MPrimo
              </h2>
            </div>
            <div className="grid gap-4 sm:gap-5">
              {[
                "One partner for everything – no more juggling vendors",
                "Dedicated manager who knows your projects",
                "White-label options – your brand, our backbone",
                "24/7 real engineers (US | UK | Africa)",
                "Proven in government, finance & manufacturing bids",
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

        {/* Testimonials Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50/50 to-white">
          <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                What Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trusted by organisations across defense, finance, and technology
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-border">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-base sm:text-lg text-foreground mb-4 italic">
                  "MPrimo's uptime record helped us win a $14 million government
                  contract."
                </p>
                <p className="text-sm sm:text-base text-muted-foreground font-semibold">
                  — CTO
                </p>
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mt-2">Defense Contractor</div>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-border">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-base sm:text-lg text-foreground mb-4 italic">
                  "White-labeled their service - clients think it's my team, I
                  keep the margin."
                </p>
                <p className="text-sm sm:text-base text-muted-foreground font-semibold">
                  — Independent IT Reseller
                </p>
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mt-2">MSP Partner</div>
              </div>
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
                Whether you are handling patient data or processing payments, we
                know the regulations.
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
              Enough reading. Let's fix your IT.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-8 px-2 max-w-2xl mx-auto">
              Every day you wait is another day dealing with slow systems and
              security risks. Let's have a 15-minute conversation about your
              goals.
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
