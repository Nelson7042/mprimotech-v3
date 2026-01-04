import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Users, Zap, Target } from "lucide-react";

export default function AboutPage() {
  // Although currently commented out in your render, I've updated these just in case you use them.
  const team = [
    {
      name: "Robert Wilson",
      role: "Chief Executive Officer",
      bio: "Tech veteran with a passion for building teams that solve real-world problems.",
      icon: "👨💼",
    },
    {
      name: "Jennifer Martinez",
      role: "Chief Technology Officer",
      bio: "Cloud architect who believes technology should simplify work, not complicate it.",
      icon: "👩💼",
    },
    {
      name: "Michael Chen",
      role: "VP of Cybersecurity",
      bio: "Dedicated to keeping client data safe in an increasingly complex digital world.",
      icon: "👨💻",
    },
    {
      name: "Sarah Johnson",
      role: "VP of Client Services",
      bio: "Champion for the client voice, ensuring every partnership is built on trust.",
      icon: "👩💼",
    },
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Impact First",
      description:
        "We don't just close tickets; we solve problems. We focus on the outcomes that actually move the needle for your business.",
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Curiosity",
      description:
        "Technology never stops changing, and neither do we. We're constantly learning so we can bring you the best solutions, not just the easiest ones.",
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Pride in Craft",
      description:
        "We sweat the small stuff. From clean code to clear communication, we believe quality is found in the details.",
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "One Team",
      description: "We don't hide behind contracts. We work alongside you, celebrating the wins and tackling the challenges together.",
    },
  ];

  const timeline = [
    { year: "2010", event: "MPrimo Tech is born" },
    { year: "2013", event: "Grew to a family of 50+" },
    { year: "2016", event: "Solidified our security standards (ISO 27001)" },
    { year: "2018", event: "Expanded our footprint with a second office" },
    { year: "2021", event: "Welcomed our 250th team member" },
    { year: "2024", event: "Trusted by over 500 enterprises" },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              More Than Just Tech Support.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-3xl px-2">
              We strip away the complexity of enterprise IT so you can focus on what matters most-growing your company.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              How We Started
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                MPrimo Tech didn’t start in a boardroom; it started with a realisation. We noticed that too many organisations were drowning in tech complexity rather than being empowered by it. They were buying expensive tools but missing the human strategy to make them work. We wanted to change that.
              </p>
              <p>
                Over the years, we’ve learned that great IT is not just about servers, firewalls, and uptime statistics. It's about understanding the late-night deadlines you need to meet and the ambitious goals you’ve set for your stakeholders.
              </p>
              <p>
                Today, our team spans the globe, from the US and UK to Africa, Europe, and Asia, but our mindset remains local. Whether we're across the street or across the ocean, we are not just a supplier you call when things break. We are the partners you call to help you build what's next.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-8 sm:py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="p-4 sm:p-6 lg:p-8 rounded-lg bg-white border border-border">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To make technology the easiest part of your business day. We exist to handle the digital chaos, giving you the clarity and stability you need to drive transformation and growth.
                </p>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 rounded-lg bg-white border border-border">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We see a future where IT bridges the gap between where you are and where you want to go. We strive to be the partner that turns "technology" from a headache into your biggest competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 sm:mb-10 lg:mb-12">
              What Drives Us
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 rounded-lg bg-secondary/30 hover:shadow-lg transition"
                >
                  <div className="text-primary mb-3 sm:mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 sm:py-12 lg:py-16 bg-primary text-white">
          <div className="mx-auto max-w-3xl px-3 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Upgrade Your IT Experience?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-6 sm:mb-8 px-2">
              Every day you delay securing your IT, the risk and the cost grows. The smart companies fix it before it breaks. Let’s talk.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}