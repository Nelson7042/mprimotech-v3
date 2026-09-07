import SectorTemplate from "@/components/sector-template"
import { Monitor, Headphones, Wrench } from "lucide-react"

export default function RemoteDesktopSupportPage() {
  return (
    <SectorTemplate
      sectorName="Remote & Desktop Support"
      icon=""
      overview="Comprehensive remote and on-site desktop support services ensuring your workforce stays productive with minimal downtime."
      challenges={[
        "Managing distributed workforce across multiple locations",
        "Providing timely technical support without physical presence",
        "Maintaining security while enabling remote access",
        "Standardizing desktop environments and configurations",
        "Reducing IT support costs while improving response times"
      ]}
      solutions={[
        {
          title: "24/7 Remote Support",
          description: "Round-the-clock remote assistance for technical issues, software problems, and system troubleshooting."
        },
        {
          title: "Desktop Standardization",
          description: "Standardized desktop images and configurations for consistent user experience across all devices."
        },
        {
          title: "Proactive Monitoring",
          description: "Continuous monitoring of desktop health, performance, and security to prevent issues before they occur."
        },
        {
          title: "Secure Remote Access",
          description: "Secure VPN and remote desktop solutions enabling safe access to corporate resources from anywhere."
        },
        {
          title: "Asset Management",
          description: "Complete inventory and lifecycle management of desktop hardware and software assets."
        }
      ]}
      relatedServices={[
        {
          title: "Managed IT Services",
          description: "Comprehensive IT management and support services.",
          icon: <Monitor className="h-6 w-6" />,
          href: "/services/managed-it"
        },
        {
          title: "Digital Workplace",
          description: "Modern workplace solutions for teams on site and on the go.",
          icon: <Headphones className="h-6 w-6" />,
          href: "/services/digital-workplace"
        },
        {
          title: "Professional Services",
          description: "Expert IT consulting and implementation services.",
          icon: <Wrench className="h-6 w-6" />,
          href: "/services/professional"
        }
      ]}
    />
  )
}