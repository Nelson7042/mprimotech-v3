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
          description: "Expert consulting and implementation services.",
          icon: <Settings className="h-6 w-6" />,
          href: "/services/professional"
        },
        {
          title: "Cloud & Infrastructure",
          description: "Modern cloud infrastructure solutions.",
          icon: <Package className="h-6 w-6" />,
          href: "/services/cloud"
        },
        {
          title: "Managed IT Services",
          description: "Ongoing IT management and support.",
          icon: <RefreshCw className="h-6 w-6" />,
          href: "/services/managed-it"
        }
      ]}
      caseStudyTitle="Enterprise-Wide Windows 11 Rollout"
      caseStudyDescription="Successfully managed the rollout of Windows 11 across 1,200 workstations for a financial services company. Completed the project 2 weeks ahead of schedule with zero data loss and 99.8% user satisfaction through comprehensive testing and phased deployment approach."
      testimonial={{
        text: "The rollout was flawless. MPrimo's methodical approach and attention to detail ensured our business operations continued without interruption during the entire upgrade process.",
        name: "Jennifer Walsh",
        company: "Capital Financial Group"
      }}
    />
  )
}