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
        "Cost optimization through resource right-sizing and cloud efficiency",
        "Built-in disaster recovery and high-availability architecture",
        "Complete cost visibility and predictable budgeting",
        "Expert-managed migrations planned to avoid operational disruption"
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
        "Reduce infrastructure overhead through right-sizing and managed services",
        "Achieve high availability with built-in redundancy and failover",
        "Scale infrastructure automatically based on demand",
        "Eliminate capital expenditure on physical hardware",
        "Improve disaster recovery capabilities",
        "Accelerate deployment of new business tools and applications",
      ]}
      relatedServices={[
        {
          title: "Managed IT Services",
          description: "Comprehensive monitoring and support.",
          icon: <Zap className="h-6 w-6" />,
          href: "/services/managed-it",
        },
        {
          title: "Risk Analysis",
          description: "Assess systems and workflows.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/risk-analysis",
        },
        {
          title: "Network & Connectivity",
          description: "Optimize network for cloud.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/network",
        },
      ]}
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
