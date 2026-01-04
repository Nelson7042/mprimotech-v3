import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Share2 } from "lucide-react"

// Sample blog data - in production, this would come from a database or CMS
const blogPosts: Record<string, any> = {
  "future-managed-it-2025": {
    title: "The Future of Managed IT Services in 2025",
    category: "IT Trends",
    date: "2025-11-15",
    readTime: "8 min read",
    author: "Michael Chen",
    content: `
    # The Future of Managed IT Services in 2025
    
    Managed IT services continue to evolve rapidly. As we look toward 2025, several key trends are reshaping how organizations approach IT management.
    
    ## AI-Driven Monitoring and Automation
    
    Artificial intelligence is revolutionizing IT operations. Predictive analytics can identify potential issues before they impact your business. This allows us to be even more proactive in our approach.
    
    ## Zero-Trust Security
    
    The traditional perimeter-based security model is obsolete. Zero-trust architecture assumes that every user and device requires authentication and authorization. This is now the standard for enterprise security.
    
    ## Hybrid Work Support
    
    Remote and hybrid work has normalized. Managed IT services now include comprehensive support for distributed teams, secure access, and collaboration tools.
    
    ## Sustainability in IT
    
    Green IT initiatives are becoming business requirements. Managed IT providers are helping organizations reduce their carbon footprint through efficient infrastructure.
    
    ## Conclusion
    
    The future of managed IT is intelligent, secure, and sustainable. Organizations that invest in modern managed IT services will have a competitive advantage.
    `,
  },
  "cybersecurity-remote-workers": {
    title: "Cybersecurity Best Practices for Remote Workers",
    category: "Security",
    date: "2025-11-08",
    readTime: "6 min read",
    author: "Sarah Johnson",
    content: `
    # Cybersecurity Best Practices for Remote Workers
    
    Remote work introduces unique security challenges. Here's how to protect your distributed workforce.
    
    ## Use VPN for All Connections
    
    VPNs encrypt data in transit and prevent attackers from intercepting sensitive information on public networks.
    
    ## Multi-Factor Authentication (MFA)
    
    MFA adds an extra layer of security. Even if passwords are compromised, MFA prevents unauthorized access.
    
    ## Regular Security Training
    
    Employees are often the first line of defense. Regular training on phishing, social engineering, and security awareness reduces risk.
    
    ## Secure Home Networks
    
    Ensure home networks have strong passwords and updated security software.
    
    ## Device Management
    
    Implement mobile device management (MDM) to ensure remote devices meet security standards.
    
    By implementing these practices, you significantly reduce security risks for remote workers.
    `,
  },
  "cloud-migration-pitfalls": {
    title: "Cloud Migration: Avoiding Common Pitfalls",
    category: "Cloud",
    date: "2025-11-01",
    readTime: "10 min read",
    author: "David Thompson",
    content: `
    # Cloud Migration: Avoiding Common Pitfalls
    
    Cloud migration is a significant undertaking. Learn from common mistakes to ensure your migration succeeds.
    
    ## Inadequate Planning
    
    Many organizations rush into migration without proper planning. A well-defined migration strategy is essential.
    
    ## Ignoring Compliance Requirements
    
    Different clouds have different compliance capabilities. Ensure your chosen cloud meets regulatory requirements.
    
    ## Underestimating Training Needs
    
    Your team needs training on new cloud tools and best practices. Invest in comprehensive training programs.
    
    ## Not Optimizing Costs
    
    Cloud cost optimization should be continuous. Monitor spending and adjust resources accordingly.
    
    ## Poor Communication
    
    Keep stakeholders informed throughout the migration process. Clear communication prevents surprises.
    
    By avoiding these pitfalls, your cloud migration will be successful.
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <>
        <Header />
        <main>
          <section className="py-20 bg-background">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
              <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
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
        <section className="py-8 bg-background border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="text-primary hover:bg-primary/10">
              <Link href="/resources" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Resources
              </Link>
            </Button>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 bg-white border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span>{post.author}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <button className="flex items-center gap-1 hover:text-primary transition">
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert max-w-none">
              <div className="text-foreground leading-relaxed whitespace-pre-wrap">{post.content}</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to discuss your IT needs?</h2>
            <p className="text-lg opacity-90 mb-8">Let's talk about how these insights apply to your organization.</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
