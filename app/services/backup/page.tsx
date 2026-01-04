import ServiceTemplate from "@/components/service-template"
import { Shield, Cloud, Zap } from "lucide-react"

export default function BackupPage() {
  return (
    <ServiceTemplate
      title="Backup & Business Continuity"
      subtitle="Ensure business continuity with robust backup and disaster recovery solutions"
      problems={[
        "You don't know if your backups actually work until disaster strikes",
        "Ransomware can encrypt both your data and your backups",
        "Manual backup processes are unreliable and often forgotten",
        "Recovery takes days or weeks, costing massive revenue loss",
        "Compliance requires backup retention you can't manage"
      ]}
      solutions={[
        "Automated daily backups with verified integrity testing",
        "Ransomware-proof isolated backup storage",
        "Disaster recovery plans tested quarterly",
        "Rapid recovery in hours, not days",
        "Compliance-ready retention and reporting"
      ]}
      overview="Data loss can be catastrophic. Our Backup & Business Continuity solutions ensure your critical systems and data are protected and quickly recoverable. We combine backup automation, testing, and disaster recovery planning to minimize downtime."
      features={[
        "Automated Daily Backups",
        "Off-Site Backup Storage",
        "Ransomware Protection",
        "Disaster Recovery Planning",
        "Business Continuity Testing",
        "Rapid Recovery Procedures",
        "Backup Encryption & Security",
        "Compliance-Ready Reporting",
      ]}
      benefits={[
        "Recover from disasters in hours, not days",
        "Protect against ransomware with isolated backups",
        "Maintain business continuity with minimal data loss",
        "Ensure compliance with retention policies",
        "Reduce recovery costs by having tested procedures",
        "Sleep well knowing your data is protected",
      ]}
      relatedServices={[
        {
          title: "Cybersecurity",
          description: "Protect against ransomware.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/cybersecurity",
        },
        {
          title: "Cloud & Infrastructure",
          description: "Cloud backup solutions.",
          icon: <Cloud className="h-6 w-6" />,
          href: "/services/cloud",
        },
        {
          title: "Managed IT Services",
          description: "Backup monitoring and maintenance.",
          icon: <Zap className="h-6 w-6" />,
          href: "/services/managed-it",
        },
      ]}
      testimonial={{
        text: "When ransomware hit, our backup system saved us. MPrimo Tech's disaster recovery plan worked perfectly. We lost only 30 minutes of data.",
        name: "Patricia Lee",
        company: "Healthcare Network",
      }}
      faqs={[
        {
          question: "How often should we backup data?",
          answer:
            "We recommend daily backups at minimum. For critical systems, hourly backups or continuous replication is ideal.",
        },
        {
          question: "What's the difference between backup and disaster recovery?",
          answer:
            "Backup stores data copies. Disaster recovery includes plans to restore systems and operations. We provide both.",
        },
        {
          question: "How do you protect against ransomware?",
          answer:
            "We use isolated backups, immutable storage, and advanced threat detection to prevent and recover from ransomware attacks.",
        },
        {
          question: "How quickly can you restore systems?",
          answer:
            "Depending on data volume, we can typically restore systems within 2-4 hours. Critical systems may have faster RTO (Recovery Time Objective).",
        },
      ]}
    />
  )
}
