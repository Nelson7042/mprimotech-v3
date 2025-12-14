import SectorTemplate from "@/components/sector-template"
import { Shield, Lock, TrendingUp } from "lucide-react"

export default function RetailPage() {
  return (
    <SectorTemplate
      sectorName="Retail"
      icon="🛍️"
      overview="Point-of-sale systems, customer analytics, and omnichannel IT solutions for retail businesses"
      challenges={[
        "POS system reliability during peak hours",
        "Payment Card Industry (PCI) compliance",
        "Customer data privacy and protection",
        "Omnichannel inventory management",
        "Real-time analytics for customer insights",
      ]}
      solutions={[
        {
          title: "POS System Reliability",
          description: "Redundant POS infrastructure ensuring continuous sales capability.",
        },
        {
          title: "PCI Compliance",
          description: "Payment data protection and PCI-DSS compliance for payment systems.",
        },
        {
          title: "Customer Data Protection",
          description: "Secure storage and management of customer information.",
        },
        {
          title: "Inventory Integration",
          description: "Real-time inventory sync across all channels and locations.",
        },
        {
          title: "Analytics Platform",
          description: "Customer behavior analytics for personalization and sales optimization.",
        },
        {
          title: "Mobile & Omnichannel",
          description: "Seamless omnichannel experience across web, mobile, and physical stores.",
        },
      ]}
      relatedServices={[
        {
          title: "Cybersecurity",
          description: "PCI-DSS and customer data protection.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/cybersecurity",
        },
        {
          title: "Cloud & Infrastructure",
          description: "Scalable retail infrastructure.",
          icon: <Lock className="h-6 w-6" />,
          href: "/services/cloud",
        },
        {
          title: "Managed IT Services",
          description: "24/7 retail IT support.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/managed-it",
        },
      ]}
      caseStudyTitle="Omnichannel Retail Transformation"
      caseStudyDescription="A national retail chain upgraded to an omnichannel platform with MPrimo Tech's infrastructure support. We implemented cloud-based POS systems, inventory management, and customer analytics. Result: 60% improvement in inventory accuracy, seamless customer experience, and 35% increase in mobile sales."
      testimonial={{
        text: "Our omnichannel strategy needed reliable IT infrastructure. MPrimo Tech delivered the platform that connects our stores, website, and mobile app seamlessly.",
        name: "Lisa Anderson",
        company: "Fashion Retail Group",
      }}
    />
  )
}
