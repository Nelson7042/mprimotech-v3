import SectorTemplate from "@/components/sector-template"
import { Shield, Lock, TrendingUp } from "lucide-react"

export default function EducationPage() {
  return (
    <SectorTemplate
      sectorName="Education"
      icon="🎓"
      overview="Learning management systems, student data protection, and campus-wide IT infrastructure for educational institutions"
      challenges={[
        "Student data privacy and FERPA compliance",
        "Learning Management System (LMS) availability",
        "Supporting hybrid and remote learning",
        "Campus WiFi and connectivity",
        "Managing diverse device types and students",
      ]}
      solutions={[
        {
          title: "FERPA Compliance",
          description: "Student data protection and FERPA compliance for educational records.",
        },
        {
          title: "LMS Reliability",
          description: "Learning platform uptime ensuring continuous educational delivery.",
        },
        {
          title: "Hybrid Learning Support",
          description: "Infrastructure for seamless in-person, hybrid, and remote learning.",
        },
        {
          title: "Campus Connectivity",
          description: "WiFi 6 infrastructure and wired connectivity for all campus areas.",
        },
        {
          title: "Device Management",
          description: "Management of diverse student devices including BYOD programs.",
        },
        {
          title: "Cybersecurity Training",
          description: "Student and staff awareness training on cybersecurity and data privacy.",
        },
      ]}
      relatedServices={[
        {
          title: "Cybersecurity",
          description: "FERPA compliance and student data protection.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/cybersecurity",
        },
        {
          title: "Network & Connectivity",
          description: "Campus WiFi and network infrastructure.",
          icon: <Lock className="h-6 w-6" />,
          href: "/services/network",
        },
        {
          title: "Digital Workplace",
          description: "Learning management and collaboration systems.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/digital-workplace",
        },
      ]}
      caseStudyTitle="University Campus IT Infrastructure Modernization"
      caseStudyDescription="A large university needed to modernize its campus IT infrastructure to support hybrid learning. MPrimo Tech deployed WiFi 6 campus-wide, modernized the LMS, and implemented FERPA compliance. Result: Seamless hybrid learning, 50% improvement in network capacity, and enhanced student experience."
      testimonial={{
        text: "MPrimo Tech helped us transition to hybrid learning successfully. Their campus infrastructure expertise ensured all students and faculty had reliable connectivity.",
        name: "Prof. Jennifer Williams",
        company: "State University",
      }}
    />
  )
}
