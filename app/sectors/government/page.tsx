import SectorTemplate from "@/components/sector-template"
import { Shield, Lock, TrendingUp } from "lucide-react"

export default function GovernmentPage() {
  return (
    <SectorTemplate
      sectorName="Government"
      icon="🏛️"
      overview="Government-grade security and compliance for public sector organizations and agencies"
      challenges={[
        "FISMA and FedRAMP compliance requirements",
        "Data sovereignty and security clearances",
        "Legacy system modernization",
        "Citizen data privacy protection",
        "Budget constraints and public accountability",
      ]}
      solutions={[
        {
          title: "FISMA Compliance",
          description: "Federal Information Security Management Act compliance and controls.",
        },
        {
          title: "FedRAMP Certification",
          description: "Cloud services certified and authorized under FedRAMP.",
        },
        {
          title: "Security Clearance Ready",
          description: "Secure infrastructure supporting security clearances and sensitive data.",
        },
        {
          title: "Legacy Modernization",
          description: "Gradual migration of legacy government systems to modern platforms.",
        },
        {
          title: "Data Sovereignty",
          description: "Data residency and sovereignty compliance for government data.",
        },
        {
          title: "Citizen Privacy",
          description: "Protection of citizen personal information and privacy compliance.",
        },
      ]}
      relatedServices={[
        {
          title: "Cybersecurity",
          description: "Government-grade security and compliance.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/cybersecurity",
        },
        {
          title: "Compliance & Consultancy",
          description: "FISMA and FedRAMP compliance guidance.",
          icon: <Lock className="h-6 w-6" />,
          href: "/services/consultancy",
        },
        {
          title: "Cloud & Infrastructure",
          description: "FedRAMP-authorized cloud infrastructure.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/cloud",
        },
      ]}
      caseStudyTitle="Federal Agency Cloud Migration"
      caseStudyDescription="A federal agency required modernization with FISMA compliance. MPrimo Tech designed and implemented a FedRAMP-authorized cloud infrastructure. We migrated 50+ legacy systems while maintaining security clearances and data sovereignty. Result: 60% cost reduction, modern infrastructure, full compliance."
      testimonial={{
        text: "MPrimo Tech understands government IT requirements. Their FISMA and FedRAMP expertise guided us through a successful cloud migration while maintaining compliance.",
        name: "Director Robert Thompson",
        company: "Federal Agency",
      }}
    />
  )
}
