import SectorTemplate from "@/components/sector-template"
import { Shield, Lock, TrendingUp } from "lucide-react"

export default function ManufacturingPage() {
  return (
    <SectorTemplate
      sectorName="Manufacturing"
      icon=""
      overview="Production support, operational continuity, and system integration for manufacturing facilities"
      challenges={[
        "Maintaining continuity across production lines",
        "Connecting machinery with warehouse and inventory systems",
        "Supply chain coordination and dispatch tracking",
        "Protecting on-site control systems and factory networks",
        "Legacy database and administrative paperwork bottlenecks",
      ]}
      solutions={[
        {
          title: "Production System Reliability",
          description: "Stable infrastructure supporting continuous operations with proactive monitoring.",
        },
        {
          title: "Inventory & Dispatch Integration",
          description: "Connect shop-floor tracking with stock and dispatch systems to reduce manual entry.",
        },
        {
          title: "Supply Chain Coordination",
          description: "System integration for clear visibility between purchasing, inventory, and fulfillment.",
        },
        {
          title: "On-Site Network Stabilization",
          description: "Ruggedized wireless and wired networks designed for factory environments.",
        },
        {
          title: "Legacy Modernization",
          description: "Streamline outdated paper workflows into reliable digital tools without disruption.",
        },
      ]}
      relatedServices={[
        {
          title: "Cloud & Infrastructure",
          description: "Scalable manufacturing infrastructure.",
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
          description: "Technical support for production environments.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/managed-it",
        },
      ]}
    />
  )
}
