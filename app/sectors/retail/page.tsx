import SectorTemplate from "@/components/sector-template"
import { Shield, Lock, TrendingUp } from "lucide-react"

export default function RetailPage() {
  return (
    <SectorTemplate
      sectorName="Retail & Hospitality"
      icon="🛍️"
      overview="Practical IT systems, POS reliability, and admin workflow automation for hospitality venues, restaurants, and retail"
      challenges={[
        "POS and booking system reliability during peak trading hours",
        "Disjointed staff rotas and shift cover spreadsheets",
        "Payment security and customer data compliance",
        "Inventory tracking and supplier ordering friction",
        "WiFi connectivity across venue dining, bar, and outdoor areas",
      ]}
      solutions={[
        {
          title: "POS & Booking Reliability",
          description: "Stable setup ensuring your till, card readers, and booking software do not freeze mid-service.",
        },
        {
          title: "Admin Workflow Automation",
          description: "Connect shift rotas, timesheets, and payroll to stop manual spreadsheet double-handling.",
        },
        {
          title: "Payment & Data Security",
          description: "Protect customer data and maintain PCI-DSS payment compliance without slowing down service.",
        },
        {
          title: "Inventory & Supplier Sync",
          description: "Streamline stock counting and supplier order tracking across your locations.",
        },
        {
          title: "On-Site Venue WiFi",
          description: "Dedicated, segregated networks for customer access, kitchen displays, and payment terminals.",
        },
      ]}
      relatedServices={[
        {
          title: "Risk Analysis",
          description: "On-site system audits.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/risk-analysis",
        },
        {
          title: "Cloud & Infrastructure",
          description: "Scalable venue systems.",
          icon: <Lock className="h-6 w-6" />,
          href: "/services/cloud",
        },
        {
          title: "Managed IT Services",
          description: "Dedicated UK IT support.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/managed-it",
        },
      ]}
    />
  )
}
