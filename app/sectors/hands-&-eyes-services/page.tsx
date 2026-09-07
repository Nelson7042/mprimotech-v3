import SectorTemplate from "@/components/sector-template"
import { Eye, Hand, Users } from "lucide-react"

export default function HandsEyesServicesPage() {
  return (
    <SectorTemplate
      sectorName="Hands & Eyes Services"
      icon=""
      overview="On-site technical support and remote monitoring services providing physical presence and visual verification for critical IT operations."
      challenges={[
        "Need for physical presence at remote locations without full-time IT staff",
        "Visual verification of equipment status and environmental conditions",
        "Performing hands-on tasks that cannot be completed remotely",
        "Emergency response for critical infrastructure failures",
        "Coordinating between remote technical teams and on-site personnel"
      ]}
      solutions={[
        {
          title: "Smart Hands Services",
          description: "Trained technicians perform physical tasks at your locations following remote instructions from our technical team."
        },
        {
          title: "Visual Monitoring",
          description: "Real-time visual inspection of equipment, cable management, and environmental conditions through on-site personnel."
        },
        {
          title: "Emergency Response",
          description: "Rapid deployment of technical personnel for critical infrastructure issues requiring immediate physical intervention."
        },
        {
          title: "Equipment Installation",
          description: "Professional installation and configuration of hardware components with remote technical guidance."
        },
        {
          title: "Site Surveys",
          description: "Comprehensive physical assessments of IT infrastructure, cabling, and environmental factors."
        }
      ]}
      relatedServices={[
        {
          title: "Remote & Desktop Support",
          description: "Comprehensive remote and on-site technical support.",
          icon: <Eye className="h-6 w-6" />,
          href: "/sectors/remote-&-desktop-support"
        },
        {
          title: "Professional Services",
          description: "Hands-on IT consulting and implementation.",
          icon: <Hand className="h-6 w-6" />,
          href: "/services/professional"
        },
        {
          title: "Managed IT Services",
          description: "Direct on-site and remote IT support.",
          icon: <Users className="h-6 w-6" />,
          href: "/services/managed-it"
        }
      ]}
    />
  )
}