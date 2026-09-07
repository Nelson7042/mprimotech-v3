import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ClipboardList,
  Map,
  Zap,
  CheckCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Process Improvement & Automation | MPrimo Tech",
  description:
    "On-site process improvement and automation for UK care homes and hospitality businesses. We map messy admin and automate repetitive work using the tools you already have.",
}

const processSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Process review",
    description:
      "We come on site and look at the admin that takes up your team's time, from rotas and paperwork to handovers and tracking.",
  },
  {
    number: "02",
    icon: Map,
    title: "Map the workflow",
    description:
      "We map how the work actually moves through your team and identify where information gets lost, duplicated or delayed.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Automate",
    description:
      "We automate the repetitive parts using tools you already have, such as Excel, SharePoint, Power Automate or simple web apps.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Hand over",
    description:
      "We make sure your team understands the new process and can use it confidently after the work is complete.",
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-primary">
            What we do
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Process improvement and automation for care and hospitality.
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We come on site, map the admin that slows your team down, then
            automate the painful bits using the tools you already have.
          </p>

          <div className="mt-8">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a 20-minute process review
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              How we work
            </h2>

            <p className="mt-4 text-muted-foreground">
              A straightforward process designed around how your team
              actually works.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {processSteps.map((step) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="rounded-lg border p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-muted">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {step.number}
                      </p>

                      <h3 className="mt-1 text-xl font-semibold">
                        {step.title}
                      </h3>

                      <p className="mt-3 leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What we improve */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight">
            What we improve
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            We focus on the everyday admin that creates unnecessary work for
            care and hospitality teams.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Rotas and allocations",
              "Staff handovers",
              "SLA and review-date tracking",
              "Paperwork and spreadsheets",
              "Information stuck in inboxes",
              "Repetitive administrative tasks",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border p-4"
              >
                <CheckCircle className="h-5 w-5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="border-y">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Work with what you have
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              You don't need to replace everything to improve the way your
              team works. We use the tools that already fit into your
              organisation.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "Excel",
                "SharePoint",
                "Power Automate",
                "Simple web apps",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border px-4 py-2 text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Find out where your admin can be improved.
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Start with a short conversation about the process that's slowing
            your team down.
          </p>

          <div className="mt-8">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a 20-minute process review
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
