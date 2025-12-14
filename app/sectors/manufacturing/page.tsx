import SectorTemplate from "@/components/sector-template"
import { Shield, Lock, TrendingUp } from "lucide-react"

export default function ManufacturingPage() {
  return (
    <SectorTemplate
      sectorName="Manufacturing"
      icon=""
      overview="Production support and industrial IT solutions for manufacturing facilities and supply chain optimization"
      challenges={[
        "Zero downtime requirement for production lines",
        "Integration of Industrial IoT (IIoT) systems",
        "Supply chain visibility and integration",
        "Cybersecurity for production systems",
        "Legacy system modernization",
      ]}
      solutions={[
        {
          title: "Production System Reliability",
          description: "Redundant infrastructure ensuring manufacturing continuity with zero unplanned downtime.",
        },
        {
          title: "IIoT Integration",
          description: "Secure connection and management of industrial IoT devices and sensors.",
        },
        {
          title: "Supply Chain Integration",
          description: "ERP and supply chain system integration for end-to-end visibility.",
        },
        {
          title: "Production Monitoring",
          description: "Real-time monitoring and analytics for production optimization.",
        },
        {
          title: "Cybersecurity for OT",
          description: "Operational Technology (OT) security protecting production systems from cyber threats.",
        },
        {
          title: "Legacy Modernization",
          description: "Gradual migration from legacy systems to modern manufacturing IT platforms.",
        },
      ]}
      relatedServices={[
        {
          title: "Cloud & Infrastructure",
          description: "Modern manufacturing infrastructure.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/cloud",
        },
        {
          title: "Network & Connectivity",
          description: "Reliable production network.",
          icon: <Lock className="h-6 w-6" />,
          href: "/services/network",
        },
        {
          title: "Managed IT Services",
          description: "24/7 production system support.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/managed-it",
        },
      ]}
      caseStudyTitle="Smart Factory Implementation"
      caseStudyDescription="A major manufacturing plant implemented Industry 4.0 technologies with MPrimo Tech's support. We designed and deployed IIoT infrastructure, production monitoring systems, and supply chain integration. Result: 25% increase in production efficiency, real-time supply chain visibility, and zero security incidents."
      testimonial={{
        text: "MPrimo Tech helped us become a smart factory. Their expertise in IIoT and production systems was invaluable. We now have real-time visibility across our entire operation.",
        name: "Robert Martinez",
        company: "Advanced Manufacturing Corp",
      }}
    />
  )
}
