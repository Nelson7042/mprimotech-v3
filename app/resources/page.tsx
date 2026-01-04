import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, BookOpen, Briefcase } from "lucide-react"

export default function ResourcesPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Managed IT Services in 2025",
      excerpt:
        "Explore emerging trends in managed IT services including AI-driven monitoring, zero-trust security, and hybrid work support.",
      category: "IT Trends",
      date: "2025-11-15",
      readTime: "8 min read",
      slug: "future-managed-it-2025",
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Workers",
      excerpt:
        "Protect your distributed workforce with comprehensive cybersecurity strategies tailored for remote and hybrid environments.",
      category: "Security",
      date: "2025-11-08",
      readTime: "6 min read",
      slug: "cybersecurity-remote-workers",
    },
    {
      id: 3,
      title: "Cloud Migration: Avoiding Common Pitfalls",
      excerpt:
        "Learn from real-world cloud migrations. We identify common mistakes and provide strategies to ensure successful transitions.",
      category: "Cloud",
      date: "2025-11-01",
      readTime: "10 min read",
      slug: "cloud-migration-pitfalls",
    },
    {
      id: 4,
      title: "Ransomware Prevention & Recovery Strategies",
      excerpt: "Understand ransomware threats and implement multi-layered defenses to protect your organization.",
      category: "Security",
      date: "2025-10-25",
      readTime: "7 min read",
      slug: "ransomware-prevention",
    },
    {
      id: 5,
      title: "Cost Optimization: Reduce Your Cloud Spending",
      excerpt: "Practical strategies to optimize cloud costs without sacrificing performance or reliability.",
      category: "Cloud",
      date: "2025-10-18",
      readTime: "9 min read",
      slug: "cloud-cost-optimization",
    },
    {
      id: 6,
      title: "Digital Transformation: Starting Your Journey",
      excerpt:
        "A strategic guide to beginning your digital transformation with realistic timelines and expected outcomes.",
      category: "Strategy",
      date: "2025-10-11",
      readTime: "11 min read",
      slug: "digital-transformation-guide",
    },
  ]

  const caseStudies = [
    {
      id: 1,
      title: "Global Bank Infrastructure Modernization",
      company: "International Banking Group",
      industry: "Financial Services",
      excerpt:
        "How we migrated a major international bank to modern cloud infrastructure while maintaining SOX compliance.",
      slug: "bank-infrastructure-modernization",
      results: ["40% reduction in infrastructure costs", "99.99% uptime achievement", "Zero security incidents"],
    },
    {
      id: 2,
      title: "Healthcare Network Security Implementation",
      company: "Regional Medical Center",
      industry: "Healthcare",
      excerpt: "Implementing HIPAA-compliant security across a multi-facility healthcare network.",
      slug: "healthcare-security-implementation",
      results: ["100% HIPAA compliance", "Zero patient data breaches", "Improved operational efficiency"],
    },
    {
      id: 3,
      title: "Manufacturing Smart Factory Deployment",
      company: "Advanced Manufacturing Inc.",
      industry: "Manufacturing",
      excerpt: "Deploying IIoT infrastructure and production monitoring for Industry 4.0 transformation.",
      slug: "manufacturing-smart-factory",
      results: [
        "25% increase in production efficiency",
        "Real-time supply chain visibility",
        "Zero security incidents",
      ],
    },
    {
      id: 4,
      title: "Retail Omnichannel Platform Launch",
      company: "Fashion Retail Group",
      industry: "Retail",
      excerpt: "Building omnichannel infrastructure connecting physical stores, web, and mobile platforms.",
      slug: "retail-omnichannel-platform",
      results: [
        "60% improvement in inventory accuracy",
        "35% increase in mobile sales",
        "Seamless customer experience",
      ],
    },
    {
      id: 5,
      title: "University Campus IT Modernization",
      company: "State University",
      industry: "Education",
      excerpt: "Upgrading university infrastructure for hybrid learning and modern student experience.",
      slug: "university-it-modernization",
      results: ["50% improvement in network capacity", "Seamless hybrid learning", "Enhanced student satisfaction"],
    },
    {
      id: 6,
      title: "Federal Agency Cloud Migration",
      company: "Federal Government Agency",
      industry: "Government",
      excerpt: "FedRAMP-authorized cloud migration for federal agency maintaining FISMA compliance.",
      slug: "federal-agency-cloud-migration",
      results: ["60% cost reduction", "Full FISMA compliance", "Modern infrastructure"],
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Learn from our expertise through blog articles, case studies, and IT resources to guide your digital
              transformation journey.
            </p>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12">Latest Blog Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/resources/blog/${post.slug}`}>
                  <div className="group h-full flex flex-col p-6 rounded-lg border border-border bg-white hover:shadow-lg hover:border-primary transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                <Link href="/resources/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12">Case Studies</h2>
            <div className="space-y-6">
              {caseStudies.map((study) => (
                <Link key={study.id} href={`/case-studies/${study.slug}`}>
                  <div className="group p-6 rounded-lg border border-border bg-secondary/30 hover:shadow-lg hover:border-primary transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <span className="text-xs font-semibold text-primary">{study.industry}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition">
                          {study.title}
                        </h3>
                        <p className="text-foreground font-semibold mb-3">{study.company}</p>
                        <p className="text-muted-foreground mb-4">{study.excerpt}</p>
                        <div className="flex items-center gap-2 text-primary font-medium text-sm">
                          Read Case Study
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      <div className="md:min-w-fit">
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="text-sm text-foreground flex items-start gap-2">
                              <span className="text-primary font-bold flex-shrink-0">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resources CTA */}
        <section className="py-16 bg-background border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-lg bg-white border border-border hover:shadow-lg transition">
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">IT Guides & Whitepapers</h3>
                <p className="text-muted-foreground mb-4">
                  Download comprehensive guides on cloud migration, cybersecurity, and digital transformation.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  <Link href="/resources/guides">Explore Guides</Link>
                </Button>
              </div>
              <div className="p-8 rounded-lg bg-white border border-border hover:shadow-lg transition">
                <Briefcase className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Success Stories</h3>
                <p className="text-muted-foreground mb-4">
                  See how we've helped organizations transform their IT and achieve business goals.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  <Link href="/resources/success-stories">View Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to our newsletter for the latest IT insights, trends, and best practices delivered to your
              inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-3 rounded-lg text-foreground focus:outline-none"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
