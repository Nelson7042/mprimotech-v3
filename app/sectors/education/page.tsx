import SectorTemplate from "@/components/sector-template"
import { Shield, Lock, TrendingUp } from "lucide-react"

export default function EducationPage() {
  return (
    <SectorTemplate
      sectorName="Education"
      icon="🎓"
      overview="Student data protection, school WiFi, and reliable IT infrastructure for educational institutions"
      challenges={[
        "Student and staff data privacy under UK GDPR",
        "Learning Management System (LMS) reliability",
        "Managing classroom and remote learning tools",
        "Campus and school-wide WiFi coverage",
        "Managing diverse student and staff devices",
      ]}
      solutions={[
        {
          title: "UK GDPR Compliance",
          description: "Student data protection and compliance for educational records and safeguarding.",
        },
        {
          title: "LMS & Classroom Reliability",
          description: "Stable learning platform support ensuring continuous educational delivery.",
        },
        {
          title: "Blended Learning Infrastructure",
          description: "Infrastructure for seamless in-person and digital learning workflows.",
        },
        {
          title: "Campus Connectivity",
          description: "Robust WiFi infrastructure and wired networking across classrooms and halls.",
        },
        {
          title: "Device Management",
          description: "Centralized management of classroom tablets, laptops, and staff devices.",
        },
      ]}
      relatedServices={[
        {
          title: "Risk Analysis",
          description: "Security and compliance reviews.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/risk-analysis",
        },
        {
          title: "Network & Connectivity",
          description: "Campus WiFi and network infrastructure.",
          icon: <Lock className="h-6 w-6" />,
          href: "/services/network",
        },
        {
          title: "Digital Workplace",
          description: "Collaboration and management systems.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/digital-workplace",
        },
      ]}
    />
  )
}
