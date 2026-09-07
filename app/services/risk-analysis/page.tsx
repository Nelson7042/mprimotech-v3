import ServiceTemplate from "@/components/service-template"
import { AlertTriangle, FileSearch, ShieldCheck } from "lucide-react"

export default function RiskAnalysisPage() {
  return (
    <ServiceTemplate
      title="Risk Analysis & Assessments"
      subtitle="You can't fix what you can't see. We find the blind spots before the bad guys do."
      problems={[
        "You're operating on dangerous assumptions about your security",
        "Hidden vulnerabilities in legacy systems expose your entire network",
        "Compliance gaps could trigger massive regulatory fines",
        "Third-party vendors with weak security have access to your data",
        "You don't know if your backups actually work until disaster strikes"
      ]}
      solutions={[
        "Comprehensive vulnerability scanning reveals every weak point",
        "Penetration testing shows exactly how hackers could breach your systems",
        "Compliance gap analysis ensures you meet all regulatory requirements",
        "Vendor risk assessments secure your entire supply chain",
        "Prioritised remediation roadmap tackles the biggest risks first"
      ]}
      overview="We turn the lights on. We strip away the guesswork and conduct a forensic-level review of your technology, your policies, and your people. We don't just hand you a scary list of problems; we give you a prioritised roadmap (ranked by danger and cost) so you can tackle the biggest risks first."
      features={[
        "Comprehensive Vulnerability Scanning",
        "Penetration Testing (Ethical Hacking)",
        "Compliance Gap Analysis (UK GDPR, Cyber Essentials, ISO 27001)",
        "Vendor & Third-Party Risk Management",
        "Data Governance & Privacy Audits",
        "Business Continuity Stress-Testing",
        "Physical Security Reviews",
        "Shadow IT Discovery",
      ]}
      benefits={[
        "Stop guessing where to spend your security budget",
        "Lower your Cyber Liability Insurance premiums",
        "Satisfy investor and board-level due diligence",
        "Avoid regulatory fines that can bankrupt small firms",
        "Sleep better knowing exactly where you stand",
        "Turn security from a 'cost center' into a competitive trust asset",
      ]}
      relatedServices={[
        {
          title: "Cybersecurity",
          description: "Implement the fixes we find.",
          icon: <ShieldCheck className="h-6 w-6" />,
          href: "/services/cybersecurity",
        },
        {
          title: "B2B Contracts",
          description: "Formalize your compliance posture.",
          icon: <FileSearch className="h-6 w-6" />,
          href: "/services/b2b-contracts",
        },
        {
          title: "Backup & Continuity",
          description: "The ultimate safety net.",
          icon: <AlertTriangle className="h-6 w-6" />,
          href: "/services/backup",
        },
      ]}
      faqs={[
        {
          question: "Is this going to disrupt our work?",
          answer:
            "Most of our analysis is passive. We look at configurations, interview key staff on site, and run background scans without interrupting your daily operations.",
        },
        {
          question: "We are a small business. Do we really need a formal risk analysis?",
          answer:
            "Actually, smaller teams need it most. Hackers target smaller firms knowing security checks are rare. We help you spot risks before they become costly problems.",
        },
        {
          question: "What do we get at the end?",
          answer:
            "You won't get a 100-page jargon-filled document you can't read. You get an Executive Summary with a clear Traffic Light system (Red/Amber/Green) and an actionable step-by-step remediation plan.",
        },
        {
          question: "Does this help us comply with UK GDPR and data protection?",
          answer:
            "The analysis identifies data handling risks, access vulnerabilities, and compliance gaps so your team can close them quickly and confidently.",
        },
      ]}
    />
  )
}