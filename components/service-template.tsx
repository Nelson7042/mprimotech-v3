import type React from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, CircleX } from "lucide-react"

interface ServiceTemplateProps {
  title: string
  subtitle: string
  problems?: string[]
  solutions?: string[]
  overview: string
  features: string[]
  benefits: string[]
  relatedServices: Array<{
    title: string
    description: string
    icon: React.ReactNode
    href: string
  }>
  testimonial: {
    text: string
    name: string
    company: string
  }
  faqs: Array<{
    question: string
    answer: string
  }>
}

export default function ServiceTemplate({
  title,
  subtitle,
  problems,
  solutions,
  overview,
  features,
  benefits,
  relatedServices,
  testimonial,
  faqs,
}: ServiceTemplateProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4 text-white/80 text-sm">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ArrowRight className="h-4 w-4" />
              <span>{title}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl opacity-90 max-w-2xl">{subtitle}</p>
          </div>
        </section>

        {/* Problems & Solutions Section */}
        {problems && solutions && (
          <section className="py-16 bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-red-600 mb-6">Common Problems</h2>
                  <div className="space-y-4">
                    {problems.map((problem, index) => (
                      <div key={index} className="flex gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                        <CircleX className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{problem}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-green-600 mb-6">Our Solutions</h2>
                  <div className="space-y-4">
                    {solutions.map((solution, index) => (
                      <div key={index} className="flex gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{overview}</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/book-consultation">Request a Consultation</Link>
            </Button>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg bg-white border border-border hover:shadow-md transition"
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Business Benefits</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition">
                  <div className="h-8 w-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    {index + 1}
                  </div>
                  <p className="text-foreground leading-relaxed pt-1">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <p className="text-xl mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="opacity-90">{testimonial.company}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Complementary Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-border rounded-lg p-4 hover:border-primary transition cursor-pointer"
                >
                  <summary className="flex justify-between items-center font-semibold text-foreground">
                    {faq.question}
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground hidden group-open:block">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* B2B Contract Badge */}
        <section className="py-12 bg-gradient-to-r from-accent/10 to-accent/5 border-t border-accent/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground mb-2">This service is available under</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">B2B IT Contracts</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get this service with guaranteed SLAs, compliance standards, and dedicated account management.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/services/b2b-contracts">Learn About Enterprise Contracts</Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8">Let's discuss how {title} can benefit your organization.</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/book-consultation">Schedule Your Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
