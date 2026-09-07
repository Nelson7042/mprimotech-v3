import SectorTemplate from "@/components/sector-template"
import { Shield, Lock, TrendingUp } from "lucide-react"

export default function HealthcarePage() {
  return (
    <SectorTemplate
      sectorName="Healthcare & Care Homes"
      icon="🏥"
      overview="Practical IT and admin workflow automation for care homes, residential facilities, and clinics across the UK"
      challenges={[
        "Managing resident care plans and paper documentation",
        "Disjointed staff rotas and scheduling spreadsheets",
        "UK GDPR and data protection compliance",
        "Connecting disparate healthcare software systems",
        "WiFi dead zones and device connectivity on site",
      ]}
      solutions={[
        {
          title: "Admin Workflow Automation",
          description: "Connect care planning, rota, and billing tools to eliminate double-handling.",
        },
        {
          title: "Secure Digital Records",
          description: "Organized, secure access to resident documentation with role-based permissions.",
        },
        {
          title: "On-Site Connectivity Audits",
          description: "Ensure tablets and care devices stay connected everywhere across your facility.",
        },
        {
          title: "Data Backup & Recovery",
          description: "Automated, encrypted backups protecting sensitive patient and resident data.",
        },
        {
          title: "Practical Staff Training",
          description: "Hands-on, plain English onboarding so care staff are confident using digital tools.",
        },
      ]}
      relatedServices={[
        {
          title: "Risk Analysis",
          description: "On-site workflow and security reviews.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/risk-analysis",
        },
        {
          title: "Backup & Continuity",
          description: "Reliable data protection for care records.",
          icon: <Lock className="h-6 w-6" />,
          href: "/services/backup",
        },
        {
          title: "Managed IT Services",
          description: "Ongoing UK-based technical support.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/managed-it",
        },
      ]}
    />
  )
}
