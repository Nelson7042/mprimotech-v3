import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function SectorsPage() {
  const sectors = [
    {
      name: "Financial Services",
      slug: "financial-services",
      description:
        "Specialized IT solutions for banks, insurance, and fintech companies with regulatory compliance and security focus.",
      icon: "",
      challenges: ["Regulatory Compliance", "Data Security", "High Availability"],
    },
    {
      name: "Healthcare",
      slug: "healthcare",
      description:
        "HIPAA-compliant IT infrastructure for hospitals, clinics, and healthcare providers ensuring data privacy.",
      icon: "",
      challenges: ["Patient Data Protection", "System Uptime", "HIPAA Compliance"],
    },
    {
      name: "Manufacturing",
      slug: "manufacturing",
      description:
        "Production support and industrial IT solutions for manufacturing facilities and supply chain optimization.",
      icon: "",
      challenges: ["Production Uptime", "Supply Chain Integration", "IoT Systems"],
    },
    {
      name: "Retail",
      slug: "retail",
      description: "Point-of-sale systems, customer analytics, and omnichannel IT solutions for retail businesses.",
      icon: "",
      challenges: ["POS Reliability", "Customer Data", "Inventory Management"],
    },
    {
      name: "Education",
      slug: "education",
      description: "Learning management systems, student data protection, and campus-wide IT infrastructure.",
      icon: "",
      challenges: ["Learning Continuity", "Data Protection", "System Scalability"],
    },
    {
      name: "Government",
      slug: "government",
      description: "Government-grade security and compliance for public sector organizations and agencies.",
      icon: "",
      challenges: ["Security Standards", "Compliance Requirements", "Data Sovereignty"],
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Specialized IT solutions tailored to the unique requirements and challenges of your industry.
            </p>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector) => (
                <Link key={sector.slug} href={`/sectors/${sector.slug}`}>
                  <div className="group h-full flex flex-col p-8 rounded-lg border border-border bg-white hover:shadow-lg hover:border-primary transition-all duration-300">
                    <div className="text-5xl mb-4">{sector.icon}</div>
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition">
                      {sector.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 flex-grow">{sector.description}</p>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      Explore Solutions
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't see your industry?</h2>
            <p className="text-lg opacity-90 mb-8">
              We work with organizations across all sectors. Let's discuss your specific IT needs.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
