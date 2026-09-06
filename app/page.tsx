"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Map,
  Zap,
  CheckCircle,
  FileSpreadsheet,
  Users,
  CalendarCheck,
  MessageSquare,
  Hotel,
  HeartHandshake,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Process review",
    description:
      "We look at the admin that takes up your team's time and identify where the process is getting stuck.",
  },
  {
    number: "02",
    icon: Map,
    title: "Map the workflow",
    description:
      "We map how the work actually moves between people, spreadsheets, inboxes and existing systems.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Automate",
    description:
      "We automate the repetitive parts using tools you already have, where that makes sense.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Hand over",
    description:
      "We leave you with a practical process your team can understand, use and maintain.",
  },
];

const problems = [
  {
    icon: Users,
    title: "Rotas and allocations",
    description:
      "Reduce the manual work involved in organising people, shifts and allocations.",
  },
  {
    icon: MessageSquare,
    title: "Handovers",
    description:
      "Make information easier to capture, organise and pass between teams.",
  },
  {
    icon: CalendarCheck,
    title: "Review-date tracking",
    description:
      "Replace scattered reminders and spreadsheets with a clearer way to keep track.",
  },
  {
    icon: FileSpreadsheet,
    title: "Paperwork and spreadsheets",
    description:
      "Find the repetitive admin hiding across inboxes, documents and spreadsheets.",
  },
];

const tools = [
  "Excel",
  "SharePoint",
  "Power Automate",
  "Simple web apps",
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-white via-blue-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm sm:text-base font-semibold tracking-wide text-primary uppercase mb-4">
                On-site process improvement
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
                Process improvement and automation for care and hospitality.
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                We map the admin that slows your team down, then automate it.
                On site, using the tools you already have.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 text-base sm:text-lg px-8 py-6"
              >
                <Link href="/book-consultation">
                  Book a 20-minute process review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-3">
                How we work
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                From messy admin to a clearer process.
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We work alongside your team to understand the process first,
                then improve the parts that are slowing people down.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative p-6 sm:p-8 rounded-2xl border border-border bg-white shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold text-primary">
                        {step.number}
                      </span>

                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50/50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-3">
                  What we improve
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Less chasing. Less repetition. Clearer processes.
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Many teams already have the tools they need. The problem is
                  often the way information moves between people, systems,
                  spreadsheets and inboxes.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {problems.map((problem) => {
                  const Icon = problem.icon;

                  return (
                    <div
                      key={problem.title}
                      className="p-6 rounded-xl bg-white border border-border shadow-sm"
                    >
                      <Icon className="h-7 w-7 text-primary mb-4" />

                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {problem.title}
                      </h3>

                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-3">
              Work with what you have
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">
              No need to replace everything.
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We look at the tools your team already uses and find practical
              ways to improve the workflow around them.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="px-5 py-3 rounded-full bg-white border border-border shadow-sm text-sm sm:text-base font-medium text-foreground"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50/50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-3">
                Where we work
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                Built around care and hospitality.
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We focus on the everyday admin that gets in the way of teams
                doing their actual work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              <Link
                href="/sectors/care"
                className="group block"
              >
                <div className="h-full p-7 sm:p-9 rounded-2xl bg-white border border-border shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300">
                  <HeartHandshake className="h-10 w-10 text-primary mb-6" />

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Care
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    For care homes and care providers dealing with rotas,
                    staff allocations, handovers, review dates, paperwork and
                    spreadsheets.
                  </p>

                  <span className="inline-flex items-center font-semibold text-primary">
                    Explore care
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>

              <Link
                href="/sectors/hospitality"
                className="group block"
              >
                <div className="h-full p-7 sm:p-9 rounded-2xl bg-white border border-border shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300">
                  <Hotel className="h-10 w-10 text-primary mb-6" />

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Hospitality
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    For hotels, pubs and restaurants dealing with rotas, shift
                    handovers, booking administration and shared spreadsheets.
                  </p>

                  <span className="inline-flex items-center font-semibold text-primary">
                    Explore hospitality
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Have an admin process that keeps getting in the way?
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's look at it together and see where a simpler process or
              automation could help.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 shadow-lg px-8 h-14 text-base sm:text-lg"
            >
              <Link href="/book-consultation">
                Book a 20-minute process review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
