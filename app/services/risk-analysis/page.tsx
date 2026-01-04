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
        "Compliance Gap Analysis (HIPAA, GDPR, SOC 2)",
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
      testimonial={{
        text: "We thought our internal IT team had everything covered. MPrimo's audit uncovered a third-party vendor portal that was wide open to the public. That discovery alone saved us from a potential nightmare.",
        name: "Marcus Thorne",
        company: "Logistics Holdings LLC",
      }}
      faqs={[
        {
          question: "Is this going to disrupt our work?",
          answer:
            "90% of our analysis is passive. We look at configurations, interview key staff, and run background scans. We can perform the active 'stress tests' after hours so your team never notices a slowdown.",
        },
        {
          question: "We are a small business. Do we really need a formal risk analysis?",
          answer:
            "Actually, small businesses need it most. Large enterprises can survive a million-dollar mistake; small businesses often cannot. Hackers target smaller firms specifically because they know they are less likely to have audited their systems.",
        },
        {
          question: "What do we get at the end?",
          answer:
            "You won't get a 100-page jargon-filled document you can't read. You get an Executive Summary with a 'Traffic Light' system (Red/Yellow/Green) and a technical remediation plan that your engineers can act on immediately.",
        },
        {
          question: "Does this make us compliant with HIPAA/GDPR?",
          answer:
            "The analysis itself doesn't make you compliant, but it is the first required step. It tells you exactly how far you are from the finish line so we can close the gap.",
        },
      ]}
    />
  )
}