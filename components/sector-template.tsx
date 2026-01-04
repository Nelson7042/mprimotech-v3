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
  caseStudyTitle: string
  caseStudyDescription: string
  testimonial: {
    text: string
    name: string
    company: string
  }
}

export default function SectorTemplate({
  sectorName,
  icon,
  overview,
  challenges,
  solutions,
  relatedServices,
  caseStudyTitle,
  caseStudyDescription,
  testimonial,
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
              <h1 className="text-2xl md::text-5xl font-bold">{sectorName}</h1>
            </div>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl">{overview}</p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg md:text-3xl font-bold text-foreground mb-6">Industry Context</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Organizations in the {sectorName.toLowerCase()} industry face unique IT challenges. Regulatory
              requirements, operational demands, and competitive pressures create complex IT environments. MPrimo Tech
              brings specialized expertise to deliver solutions that address these specific needs while supporting
              business growth.
            </p>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">Industry Challenges</h2>
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
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-8">Our Solutions</h2>
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

        {/* Case Study */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg md:text-3xl font-bold text-foreground mb-6">Case Study</h2>
            <div className="p-4 md:p-7 rounded-lg border border-border bg-secondary/30">
              <h3 className="text-lg md:text-2xl font-bold text-foreground mb-4">{caseStudyTitle}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">{caseStudyDescription}</p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/case-studies">View All Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {/* <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <p className="text-base md:text-xl mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-base md:text-lg">{testimonial.name}</p>
                <p className="text-sm md:text-base opacity-90">{testimonial.company}</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg md:text-3xl font-bold text-foreground mb-4">Ready to Transform IT for {sectorName}?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Let's discuss how MPrimo Tech can address your industry-specific IT challenges.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
