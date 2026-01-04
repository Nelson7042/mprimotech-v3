import ServiceTemplate from "@/components/service-template"
import { Shield, Zap, TrendingUp } from "lucide-react"

export default function CloudPage() {
  return (
    <ServiceTemplate
      title="Cloud & Infrastructure"
      subtitle="Scalable cloud solutions and infrastructure management for modern enterprises"
      problems={[
        "Your on-premise servers are expensive to maintain and upgrade",
        "You can't scale quickly when business demands change",
        "Disaster recovery is complex and untested",
        "Cloud costs are spiraling out of control with no visibility",
        "Your team lacks cloud expertise for secure migrations"
      ]}
      solutions={[
        "Modern cloud infrastructure that scales automatically with demand",
        "40-60% cost reduction through optimization and right-sizing",
        "Built-in disaster recovery with 99.99% uptime guarantee",
        "Complete cost visibility and optimization strategies",
        "Expert-managed migrations with zero downtime"
      ]}
      overview="Migrate to the cloud with confidence. We design, deploy, and manage cloud infrastructure tailored to your needs. From multi-cloud strategies to hybrid environments, we optimize cost, performance, and security. Our expertise spans AWS, Azure, GCP, and private cloud solutions."
      features={[
        "Multi-Cloud Strategy & Optimization",
        "Cloud Migration Planning & Execution",
        "Infrastructure as Code (IaC) Management",
        "Auto-Scaling & Load Balancing",
        "Disaster Recovery & High Availability",
        "Cloud Security & Compliance",
        "Cost Optimization & Right-Sizing",
        "Performance Monitoring & Analytics",
      ]}
      benefits={[
        "Reduce infrastructure costs by 40-60% through optimization and right-sizing",
        "Achieve 99.99% uptime with built-in redundancy and failover",
        "Scale infrastructure automatically based on demand",
        "Eliminate capital expenditure on hardware with OpEx model",
        "Improve disaster recovery capabilities",
        "Accelerate time-to-market for new applications",
      ]}
      relatedServices={[
        {
          title: "Managed IT Services",
          description: "Comprehensive monitoring and support.",
          icon: <Zap className="h-6 w-6" />,
          href: "/services/managed-it",
        },
        {
          title: "Cybersecurity",
          description: "Secure your cloud infrastructure.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/cybersecurity",
        },
        {
          title: "Network & Connectivity",
          description: "Optimize network for cloud.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/network",
        },
      ]}
      testimonial={{
        text: "The cloud migration was seamless. MPrimo Tech managed everything from planning to execution. We're now running on a modern, scalable infrastructure with reduced costs.",
        name: "David Thompson",
        company: "Tech Innovation Inc.",
      }}
      faqs={[
        {
          question: "How long does a cloud migration typically take?",
          answer:
            "Migration timelines vary based on complexity, data volume, and number of applications. Typically, migrations take 3-6 months, but we can accelerate with proper planning.",
        },
        {
          question: "Will there be downtime during migration?",
          answer:
            "We design migrations to minimize downtime. Most applications can be migrated with zero-downtime strategies like blue-green deployments.",
        },
        {
          question: "How do you manage multi-cloud environments?",
          answer:
            "We use Infrastructure as Code and cloud-agnostic tools to manage resources across multiple cloud providers seamlessly.",
        },
        {
          question: "What about cloud security?",
          answer:
            "We implement security best practices including encryption, IAM policies, network segmentation, and continuous monitoring.",
        },
      ]}
    />
  )
}
