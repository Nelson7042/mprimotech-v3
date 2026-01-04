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
          description: "Comprehensive remote technical support services.",
          icon: <Eye className="h-6 w-6" />,
          href: "/sectors/remote-&-desktop-support"
        },
        {
          title: "Professional Services",
          description: "Expert IT consulting and implementation.",
          icon: <Hand className="h-6 w-6" />,
          href: "/services/professional"
        },
        {
          title: "Managed IT Services",
          description: "Complete IT infrastructure management.",
          icon: <Users className="h-6 w-6" />,
          href: "/services/managed-it"
        }
      ]}
      caseStudyTitle="Multi-Site Retail Chain Infrastructure Support"
      caseStudyDescription="Provided hands and eyes services for a 50-location retail chain, enabling centralized IT management while maintaining local physical support. Reduced on-site visit costs by 70% while improving response times for critical issues through strategic placement of trained personnel."
      testimonial={{
        text: "Having MPrimo's hands and eyes service means we get the best of both worlds - expert remote support combined with reliable on-site presence when we need it most.",
        name: "Marcus Thompson",
        company: "Retail Solutions Network"
      }}
    />
  )
}