import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, MessageCircle, Calendar, BookOpen } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting to Know Us",
      questions: [
        {
          q: "Why should we choose MPrimo over other IT providers?",
          a: "Honestly, most top-tier IT firms have similar certifications and tools. Where we differ is our mindset. We don't view ourselves as 'external support'—we act like your internal department that just happens to be in a different building. We don't just fix what breaks; we look for why it broke and how to stop it from happening again.",
        },
        {
          q: "Are we too small (or too big) for you?",
          a: "Our sweet spot is usually organizations with 200+ employees, as that's where IT complexity really starts to demand a dedicated enterprise strategy. However, if you're a rapidly growing smaller team with complex needs, we should definitely talk. We build systems that scale.",
        },
        {
          q: "How messy is the onboarding process?",
          a: "We hate disruption as much as you do. A typical onboarding takes 2-4 weeks because we measure twice and cut once. We spend the early days just mapping your environment so that when we flip the switch, your team hardly notices—until things start running faster, of course.",
        },
      ],
    },
    {
      category: "Support & Services",
      questions: [
        {
          q: "If our server goes down at 3 AM, who answers the phone?",
          a: "A human. Computers don't sleep, and neither do cyber threats, so we maintain true 24/7/365 coverage for critical issues. You won't get a voicemail; you'll get an engineer who knows your infrastructure.",
        },
        {
          q: "We have some on-premise servers and some Cloud. Can you handle the mix?",
          a: "Absolutely. In fact, that's the reality for 90% of our clients. We specialize in hybrid environments. Whether your data lives in AWS, Azure, Google Cloud, or a server closet down the hall, we manage it all through a single pane of glass.",
        },
        {
          q: "Do we have to buy a specific 'package'?",
          a: "No. cookie-cutter solutions rarely fit perfectly. We usually start with an assessment of what you have vs. what you need, then we build a service mix that fills the gaps. You shouldn't pay for services you don't use.",
        },
      ],
    },
    {
      category: "Contracts & Commitments",
      questions: [
        {
          q: "Are there hidden fees in the contract?",
          a: "We believe in 'No Surprise' billing. Our contracts (Master Service Agreement and Statement of Work) are written in plain English. We outline exactly what is covered and what isn't. If a project falls outside the scope, we discuss costs *before* we do the work, not after.",
        },
        {
          q: "What happens if you miss a guarantee (SLA)?",
          a: "We put our money where our mouth is. Our Service Level Agreements are legally binding. If we fall short of our guaranteed uptime or response times, we issue service credits. We are incentivized to keep you running perfectly.",
        },
        {
          q: "Can you handle our compliance paperwork?",
          a: "Yes. Whether it's GDPR, HIPAA, SOC 2, or ISO 27001, we don't just keep you secure—we help you prove it. We can manage the evidence collection and technical controls required to pass your audits.",
        },
      ],
    },
    {
      category: "Money Matters",
      questions: [
        {
          q: "How much is this going to cost?",
          a: "Because every IT environment is different (some have 500 users on iPads, others have 200 users on high-power workstations), we don't have a flat rate. We price based on complexity, user count, and your desired SLA tier. We'll provide a transparent proposal after a brief discovery call.",
        },
        {
          q: "Do you offer fixed-price projects?",
          a: "Yes. For specific initiatives like a cloud migration or a security audit, we prefer fixed pricing so you can budget accurately. For ongoing management, we use a predictable monthly flat fee.",
        },
        {
          q: "Is this really cheaper than hiring our own team?",
          a: "Usually, yes. To replicate what we offer, you'd need to hire a CIO, a CISO, Senior Network Engineers, and a Help Desk team—plus pay for their benefits and tools. With us, you get that entire bench of experts for less than the cost of a few full-time senior hires.",
        },
      ],
    },
    {
      category: "Security & Safety",
      questions: [
        {
          q: "How do you keep our data safe?",
          a: "We take a 'assume breach' mentality. We use multi-layered security: military-grade encryption, strict access controls, 24/7 threat hunting, and automated compliance checks. We treat your data like it's our own.",
        },
        {
          q: "What if we get hit by Ransomware?",
          a: "We design systems to survive the worst case. Our disaster recovery plans aim for an RTO (Recovery Time Objective) of 1-4 hours. We test these backups regularly to ensure that if the worst happens, it's a minor inconvenience, not a business-ending event.",
        },
      ],
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              You Have Questions. <br className="hidden sm:block" /> We Have Answers.
            </h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl">
              Hiring an IT partner is a big decision. Here is the honest truth about how we work, what we cost, and how we protect your business.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((faq, qIndex) => (
                    <details
                      key={qIndex}
                      className="group border border-border/60 bg-white dark:bg-card rounded-xl hover:border-primary/50 transition duration-200 overflow-hidden"
                    >
                      <summary className="flex justify-between items-center font-semibold text-foreground p-5 cursor-pointer list-none select-none focus:outline-none">
                        <span className="text-base sm:text-lg leading-snug pr-4">{faq.q}</span>
                        <ChevronDown className="h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 group-open:-rotate-180" />
                      </summary>
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-muted-foreground leading-relaxed text-base border-t border-border/40 pt-4">
                          {faq.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Help */}
        <section className="py-16 bg-white border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Still have questions?</h2>
              <p className="text-muted-foreground">We are happy to jump on a call and clarify anything that's unclear.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 sm:p-8 rounded-2xl bg-secondary/20 hover:bg-secondary/40 hover:shadow-sm transition border border-border/50 flex flex-col items-center text-center">
                <MessageCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Chat with Support</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Got a quick question? Our team is ready to help you find the right direction.
                </p>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-secondary/20 hover:bg-secondary/40 hover:shadow-sm transition border border-border/50 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3">
                   <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Popular</span>
                </div>
                <Calendar className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Book a Consultation</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Schedule a free 30-minute discovery call with a senior IT strategist.
                </p>
                <Button asChild className="w-full mt-auto bg-primary text-white hover:bg-primary/90">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-secondary/20 hover:bg-secondary/40 hover:shadow-sm transition border border-border/50 flex flex-col items-center text-center">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Read Success Stories</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  See how we've helped other companies navigate these exact challenges.
                </p>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="/resources">Explore Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's solve your IT challenges.</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Stop worrying about uptime, compliance, and security. Let us handle the tech so you can handle business.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 h-12">
              <Link href="/contact">Start the Conversation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}