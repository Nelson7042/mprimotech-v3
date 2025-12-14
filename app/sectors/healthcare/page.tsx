import SectorTemplate from "@/components/sector-template"
import { Shield, Lock, TrendingUp } from "lucide-react"

export default function HealthcarePage() {
  return (
    <SectorTemplate
      sectorName="Healthcare"
      icon="🏥"
      overview="HIPAA-compliant IT solutions for hospitals, clinics, medical practices, and healthcare organizations"
      challenges={[
        "HIPAA compliance and patient data privacy",
        "Protecting Electronic Health Records (EHR)",
        "Ensuring 99.95%+ system uptime for patient care",
        "Integrating multiple healthcare systems",
        "Managing medical devices and IoT infrastructure",
      ]}
      solutions={[
        {
          title: "HIPAA Compliance",
          description: "Automated compliance monitoring ensuring patient data protection and regulatory adherence.",
        },
        {
          title: "EHR Security",
          description: "Secure Electronic Health Record systems with access controls and audit trails.",
        },
        {
          title: "Disaster Recovery",
          description: "Business continuity plans ensuring patient care continuity during emergencies.",
        },
        {
          title: "Medical Device Integration",
          description: "Secure network infrastructure supporting medical devices and IoT systems.",
        },
        {
          title: "Data Backup & Recovery",
          description: "Automated backups with rapid recovery capabilities for patient data.",
        },
        {
          title: "Staff Training",
          description: "HIPAA compliance training for healthcare staff on data privacy protocols.",
        },
      ]}
      relatedServices={[
        {
          title: "Cybersecurity",
          description: "HIPAA-compliant security solutions.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/cybersecurity",
        },
        {
          title: "Backup & Business Continuity",
          description: "Disaster recovery for patient care continuity.",
          icon: <Lock className="h-6 w-6" />,
          href: "/services/backup",
        },
        {
          title: "Managed IT Services",
          description: "24/7 healthcare IT support.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/managed-it",
        },
      ]}
      caseStudyTitle="Hospital System Network Infrastructure Upgrade"
      caseStudyDescription="A regional hospital network needed to upgrade their IT infrastructure to support new medical devices and improve patient data security. MPrimo Tech designed and implemented a secure, redundant network with HIPAA compliance. Result: 45% faster data access, improved patient care coordination, and zero HIPAA violations."
      testimonial={{
        text: "Patient care is our priority. MPrimo Tech ensures our IT infrastructure supports that mission while maintaining the security and compliance standards healthcare demands.",
        name: "Dr. James Wilson",
        company: "Regional Medical Center",
      }}
    />
  )
}
