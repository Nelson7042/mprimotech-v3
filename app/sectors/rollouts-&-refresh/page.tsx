import SectorTemplate from "@/components/sector-template"
import { RefreshCw, Package, Settings } from "lucide-react"

export default function RolloutsRefreshPage() {
  return (
    <SectorTemplate
      sectorName="Rollouts & Refresh"
      icon=""
      overview="Strategic technology rollouts and infrastructure refresh services to modernize your IT environment with minimal business disruption."
      challenges={[
        "Managing large-scale technology deployments across multiple sites",
        "Minimizing downtime during system upgrades and migrations",
        "Coordinating complex rollout schedules with business operations",
        "Ensuring consistent configuration and deployment standards",
        "Managing end-of-life hardware and software transitions"
      ]}
      solutions={[
        {
          title: "Phased Rollout Strategy",
          description: "Carefully planned deployment phases to minimize risk and ensure smooth transitions across your organization."
        },
        {
          title: "Hardware Refresh Programs",
          description: "Systematic replacement of aging hardware with modern, efficient systems to improve performance and reduce costs."
        },
        {
          title: "Software Migration Services",
          description: "Seamless migration from legacy systems to modern platforms with data integrity and minimal downtime."
        },
        {
          title: "Change Management",
          description: "Comprehensive change management processes to ensure user adoption and minimize business disruption."
        },
        {
          title: "Testing & Validation",
          description: "Rigorous testing protocols to validate system functionality before full deployment."
        }
      ]}
      relatedServices={[
        {
          title: "Professional Services",
          description: "Hands-on IT planning and rollout services.",
          icon: <Settings className="h-6 w-6" />,
          href: "/services/professional"
        },
        {
          title: "Cloud & Infrastructure",
          description: "Modern cloud and system infrastructure solutions.",
          icon: <Package className="h-6 w-6" />,
          href: "/services/cloud"
        },
        {
          title: "Managed IT Services",
          description: "Ongoing IT support and workflow maintenance.",
          icon: <RefreshCw className="h-6 w-6" />,
          href: "/services/managed-it"
        }
      ]}
    />
  )
}