import type React from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

interface SectorTemplateProps {
  sectorName: string
  icon: string
  overview: string
  challenges: string[]
  solutions: Array<{
    title: string
    description: string
  }>
  relatedServices: Array<{
    title: string
    description: string
    icon: React.ReactNode
    href: string
  }>
}

export default function SectorTemplate({
  sectorName,
  icon,
  overview,
  challenges,
  solutions,
  relatedServices,
}: SectorTemplateProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4 text-white/80 text-sm">
              <Link href="/sectors" className="hover:text-white">
                Sectors
              </Link>
              <ArrowRight className="h-4 w-4" />
              <span>{sectorName}</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              {/* <span className="text-5xl">{icon}</span> */}
              <h1 className="text-2xl md:text-5xl font-bold">{sectorName}</h1>
            </div>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl">{overview}</p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg md:text-3xl font-bold text-foreground mb-6">Industry Context</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Organizations in {sectorName.toLowerCase()} face unique operational and administrative challenges. Disconnected systems, manual forms, and repetitive processes create daily friction. MPrimo Tech brings practical on-site expertise to map out messy workflows and automate admin bottlenecks.
            </p>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">Common Challenges</h2>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg bg-white border border-border hover:shadow-md transition"
                >
                  <div className="h-5 w-5 md:h-8 md:w-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    {index + 1}
                  </div>
                  <p className="text-foreground font-medium pt-1">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-8">Our Approach</h2>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition">
                  <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-12 text-center">Recommended Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg md:text-3xl font-bold text-foreground mb-4">Ready to Streamline Admin for {sectorName}?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Speak with our UK team to discuss how we can review your workflow on site and remove administrative bottlenecks.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Schedule an On-Site Review</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
