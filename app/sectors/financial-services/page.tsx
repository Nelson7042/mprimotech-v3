import SectorTemplate from "@/components/sector-template"
import { Shield, Lock, TrendingUp } from "lucide-react"

export default function FinancialServicesPage() {
  return (
    <SectorTemplate
      sectorName="Financial Services"
      icon="🏦"
      overview="Secure, compliant IT infrastructure and workflow automation for financial practices, accounting firms, and advisors"
      challenges={[
        "UK GDPR and financial regulatory data privacy",
        "Protecting sensitive client financial information",
        "Ensuring high availability for day-to-day operations",
        "Managing software integrations between accounting and CRM tools",
        "Preventing phishing, fraud, and unauthorized access",
      ]}
      solutions={[
        {
          title: "System & Data Security",
          description: "Multi-layered security with encryption, multi-factor authentication, and threat protection.",
        },
        {
          title: "Compliance & Audit Support",
          description: "Organized data handling and access logs aligned with financial regulatory standards.",
        },
        {
          title: "Resilient Infrastructure",
          description: "Redundant systems and automated backup ensuring operational continuity.",
        },
        {
          title: "Data Backup & Recovery",
          description: "Automated, encrypted backups protecting accounting and client databases.",
        },
        {
          title: "Audit & Access Controls",
          description: "Comprehensive logging and role-based permissions for sensitive accounts.",
        },
      ]}
      relatedServices={[
        {
          title: "Risk Analysis",
          description: "Vulnerability and workflow assessments.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/risk-analysis",
        },
        {
          title: "Managed IT Services",
          description: "Proactive IT support for critical systems.",
          icon: <Lock className="h-6 w-6" />,
          href: "/services/managed-it",
        },
        {
          title: "B2B IT Contracts",
          description: "Structured service agreements with clear deliverables.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/b2b-contracts",
        },
      ]}
    />
  )
}
