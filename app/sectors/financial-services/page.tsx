import SectorTemplate from "@/components/sector-template"
import { Shield, Lock, TrendingUp } from "lucide-react"

export default function FinancialServicesPage() {
  return (
    <SectorTemplate
      sectorName="Financial Services"
      icon="🏦"
      overview="Secure, compliant IT infrastructure for financial institutions, banks, insurance companies, and fintech organizations"
      challenges={[
        "Regulatory Compliance (SOX, GDPR, CCPA, HIPAA)",
        "Protecting sensitive financial and customer data",
        "Maintaining 99.99% uptime for mission-critical systems",
        "Managing complex legacy systems alongside modern infrastructure",
        "Preventing fraud and cyber attacks",
      ]}
      solutions={[
        {
          title: "Advanced Cybersecurity",
          description: "Multi-layered security with encryption, threat detection, and fraud prevention systems.",
        },
        {
          title: "Compliance Management",
          description: "Automated compliance monitoring for SOX, GDPR, and industry-specific regulations.",
        },
        {
          title: "High Availability Infrastructure",
          description: "Redundant systems and disaster recovery ensuring continuous service availability.",
        },
        {
          title: "Data Protection",
          description: "Encryption at rest and in transit, with advanced backup and recovery systems.",
        },
        {
          title: "Audit & Reporting",
          description: "Comprehensive logging and reporting for regulatory audits and compliance verification.",
        },
        {
          title: "Penetration Testing",
          description: "Regular security assessments and vulnerability testing to identify threats.",
        },
      ]}
      relatedServices={[
        {
          title: "Cybersecurity",
          description: "Advanced threat detection and compliance solutions.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/cybersecurity",
        },
        {
          title: "Managed IT Services",
          description: "24/7 monitoring and support for critical systems.",
          icon: <Lock className="h-6 w-6" />,
          href: "/services/managed-it",
        },
        {
          title: "B2B IT Contracts",
          description: "Enterprise-grade contracts with SLA guarantees.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/b2b-contracts",
        },
      ]}
      caseStudyTitle="Global Bank Upgrade & Security Implementation"
      caseStudyDescription="A major international bank partnered with MPrimo Tech to upgrade their data center infrastructure and implement advanced cybersecurity measures. We successfully migrated their systems to a modern cloud infrastructure while maintaining SOX compliance. Result: 40% reduction in infrastructure costs, 99.99% uptime, and zero security breaches."
      testimonial={{
        text: "MPrimo Tech understands the financial services landscape. Their security expertise and compliance knowledge give us confidence that our systems and customer data are protected.",
        name: "Margaret Chen",
        company: "Global Capital Partners",
      }}
    />
  )
}
