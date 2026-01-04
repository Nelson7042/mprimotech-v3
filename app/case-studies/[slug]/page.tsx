import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Quote } from "lucide-react"

// Sample case study data
const caseStudies: Record<string, any> = {
  "bank-infrastructure-modernization": {
    title: "Global Bank Infrastructure Modernization",
    company: "International Banking Group",
    industry: "Financial Services",
    overview:
      "When a major international bank realized their legacy systems were becoming a bottleneck for innovation rather than a foundation for it, they came to us. They needed to modernize not just to check a compliance box, but to future-proof their entire operation.",
    challenge: `
      The bank was stuck in a difficult position. Their infrastructure was built on aging data centers that were expensive to maintain and increasingly difficult to secure. 
      
      They were facing:
      • Sky-high operational costs due to inefficient resource usage.
      • sleepless nights over SOX compliance risks.
      • A rigid system that made launching new digital features a months-long ordeal.
      • A lack of confidence in their disaster recovery plans.
    `,
    solution: `
      We didn't just "lift and shift" their mess to the cloud. We reimagined how their infrastructure should work. MPrimo Tech executed a complete modernization strategy that included:
      
      • Migrating critical workloads to a resilient, multi-region cloud architecture.
      • Automating the heavy lifting of compliance monitoring so their team could stop manually checking boxes.
      • Implementing a "security-first" design that protects data at every layer.
      • Training their internal team, ensuring they held the keys to their new kingdom.
    `,
    results: [
      "Cut infrastructure costs by 40% immediately",
      "Achieved 99.99% uptime (sleeping easier at night)",
      "Zero security incidents during and after migration",
      "New features now deploy in days, not months",
      "Disaster recovery time reduced to just 1 hour",
    ],
    testimonial:
      "MPrimo Tech didn't just upgrade our servers; they upgraded our confidence. We finally have a system that moves as fast as our customers do, without sacrificing the security a bank requires.",
    testimonialAuthor: "Chief Technology Officer, International Banking Group",
  },
  "healthcare-security-implementation": {
    title: "Healthcare Network Security Overhaul",
    company: "Regional Medical Center",
    industry: "Healthcare",
    overview:
      "In healthcare, data security isn't just about privacy—it's about patient safety. A multi-facility network needed to lock down their sensitive data without locking out their doctors and nurses.",
    challenge: `
      The medical center was growing, but their security posture hadn't kept up. With doctors needing instant access to records across different locations and devices, the IT team was overwhelmed.
      
      The friction points included:
      • Balancing strict HIPAA compliance with the need for speed in the ER.
      • Protecting patient data across a patchwork of legacy medical devices.
      • A staff that viewed security protocols as "barriers" rather than safeguards.
      • The looming threat of ransomware targeting healthcare providers.
    `,
    solution: `
      We implemented a security framework that works in the background, keeping data safe without slowing down care. Our approach included:
      
      • Designing a HIPAA-compliant network that follows the patient, not the device.
      • deploying military-grade encryption that is transparent to the end-user.
      • Setting up 24/7 threat hunting to stop attacks before they breach the perimeter.
      • Conducting human-focused security training that empowered staff rather than scaring them.
    `,
    results: [
      "Achieved 100% HIPAA compliance across all sites",
      "Zero patient data breaches in 18 months",
      "Doctors reported faster access to records despite higher security",
      "Staff phishing simulation pass-rates improved by 200%",
      "Passed external security audits with flying colors",
    ],
    testimonial:
      "Our biggest fear was that tighter security would slow down our ER. MPrimo Tech proved us wrong. They protected our data while actually making our systems more reliable for our clinical teams.",
    testimonialAuthor: "Chief Medical Officer, Regional Medical Center",
  },
  "manufacturing-smart-factory": {
    title: "Smart Factory Transformation",
    company: "Advanced Manufacturing Inc.",
    industry: "Manufacturing",
    overview:
      "A leading manufacturer wanted to stop guessing and start knowing. They needed to bridge the gap between their physical machinery and their digital data to embrace Industry 4.0.",
    challenge: `
      The factory floor was a black box. Management knew what went in and what came out, but everything in between was a mystery until the end-of-month reports.
      
      They struggled with:
      • Unpredicted downtime because machines broke before anyone noticed symptoms.
      • High material waste due to calibration drift.
      • A disconnect between the supply chain team and the production floor.
      • Vulnerable operational technology (OT) that wasn't designed for the internet.
    `,
    solution: `
      We gave the factory a nervous system. By deploying a Smart Factory infrastructure, we connected the dots between metal and code:
      
      • Rolled out an IIoT sensor network to monitor machine health in real-time.
      • Built "single pane of glass" dashboards for plant managers.
      • Integrated the production line directly with ERP systems to automate supply ordering.
      • Secured the operational network to prevent cyber-physical attacks.
    `,
    results: [
      "Production efficiency jumped by 25%",
      "Supply chain now reacts automatically to production speed",
      "Equipment uptime hit 98% thanks to predictive maintenance",
      "Material waste dropped by 40%",
      "Complete visibility from raw material to finished product",
    ],
    testimonial:
      "It feels like someone turned the lights on. We used to run on gut feeling; now we run on data. The efficiency gains paid for the project in less than a year.",
    testimonialAuthor: "Plant Manager, Advanced Manufacturing Inc.",
  },
  "retail-omnichannel-platform": {
    title: "Unified Retail Experience Launch",
    company: "Fashion Retail Group",
    industry: "Retail",
    overview:
      "A fashion powerhouse realized their customers didn't see 'online' and 'in-store' as different worlds—so why did their technology? They needed a platform that unified the shopping experience.",
    challenge: `
      The retailer was fighting their own systems. A customer could buy a shirt online, but the store couldn't process the return. Inventory looked available on the web but was missing from the shelf.
      
      The friction was causing:
      • Frustrated customers abandoning brands due to inconsistent experiences.
      • Inventory ghost towns (stock that existed but systems couldn't see).
      • Slow, crash-prone POS systems during peak sales events.
      • Data silos that made personalized marketing impossible.
    `,
    solution: `
      We built the bridge between clicks and bricks. Our omnichannel infrastructure created a single source of truth for the brand:
      
      • A cloud-native POS system that syncs inventory in real-time, everywhere.
      • A Unified Customer Data Platform (CDP) so staff knows a VIP client whether they walk in or log in.
      • High-performance mobile architecture to handle Black Friday traffic spikes.
      • Smart analytics to predict fashion trends based on cross-channel buying habits.
    `,
    results: [
      "Inventory accuracy improved by 60%",
      "Mobile sales grew by 35% within the first quarter",
      "Checkout abandonment dropped by half",
      "Customer satisfaction scores reached all-time highs",
      "Returns processing time cut by 70%",
    ],
    testimonial:
      "MPrimo Tech helped us stop thinking in channels and start thinking about the customer. The transition was seamless, and the impact on our bottom line was immediate.",
    testimonialAuthor: "Chief Technology Officer, Fashion Retail Group",
  },
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug]

  if (!study) {
    return (
      <>
        <Header />
        <main>
          <section className="py-20 bg-background min-h-[50vh] flex flex-col items-center justify-center">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Case Study Not Found</h1>
              <p className="text-muted-foreground mb-8">It seems we took a wrong turn. This case study doesn't exist.</p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/resources">Back to Resources</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="py-6 bg-background border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/resources" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>
          </div>
        </section>

        {/* Case Study Header */}
        <section className="py-16 sm:py-24 bg-primary text-white relative overflow-hidden">
           {/* Subtle background accent could go here */}
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/90 backdrop-blur-sm border border-white/20">
              {study.industry}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-xl opacity-90 font-medium">
              Client: {study.company}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">The Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {study.overview}
            </p>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-12 sm:py-16 bg-white border-y border-border/40">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">The Obstacle</h2>
            <div className="text-lg text-muted-foreground whitespace-pre-wrap leading-relaxed">
              {study.challenge}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">How We Helped</h2>
            <div className="text-lg text-muted-foreground whitespace-pre-wrap leading-relaxed">
              {study.solution}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">The Impact</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {study.results.map((result: string, index: number) => (
                <div key={index} className="flex gap-4 p-5 rounded-xl bg-secondary/30 border border-secondary">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium leading-snug">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 sm:py-24 bg-primary text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Quote className="absolute -top-6 -left-6 h-12 w-12 text-white/20" />
              <blockquote className="relative z-10">
                <p className="text-2xl sm:text-3xl font-medium leading-relaxed mb-8">
                  "{study.testimonial}"
                </p>
                <footer className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-white/30 rounded-full"></div>
                  <div>
                    <cite className="not-italic font-bold text-lg block">{study.testimonialAuthor}</cite>
                    <span className="text-white/80 text-sm">{study.company}</span>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Facing a similar challenge?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every business is unique, but the path to digital success doesn't have to be a mystery. Let's talk about what's next for you.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base">
              <Link href="/contact">Let's Discuss Your Project</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}