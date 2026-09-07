import ServiceTemplate from "@/components/service-template"
import { Shield, Cloud, TrendingUp } from "lucide-react"

export default function ManagedITPage() {
  return (
    <ServiceTemplate
      title="Managed IT Services"
      subtitle="Proactive monitoring, maintenance, and support for your entire IT infrastructure"
      problems={[
        "Your team spends more time fixing IT issues than growing the business",
        "Unexpected downtime costs thousands in lost productivity and revenue",
        "You're always reacting to problems instead of preventing them",
        "IT costs are unpredictable with surprise repair bills",
        "Your current IT support only responds when things break"
      ]}
      solutions={[
        "24/7 proactive monitoring catches issues before they impact your business",
        "Predictable monthly costs with no surprise repair bills",
        "Your team focuses on core business while we handle all IT complexities",
        "Clear service commitments and rapid response times for your team",
        "Strategic IT planning that scales with your business growth"
      ]}
      overview="Our Managed IT Services provide comprehensive oversight of your entire IT environment. We combine 24/7 monitoring, proactive maintenance, and expert support to ensure your systems run optimally. This allows your team to focus on core business activities while we handle the technical complexities."
      features={[
        "24/7 Proactive System Monitoring",
        "Automated Patch Management",
        "Help Desk Support with Rapid Response Time",
        "Network Performance Optimization",
        "Security Threat Detection",
        "Capacity Planning and Growth Management",
        "Performance Reporting and Analytics",
        "Scheduled Preventive Maintenance",
      ]}
      benefits={[
        "Significantly reduce operational disruptions with proactive system maintenance",
        "Improve security posture with continuous threat detection and automated responses",
        "Optimize IT spending by consolidating vendor relationships and eliminating redundant systems",
        "Scale IT infrastructure seamlessly as your business grows",
        "Access experienced UK IT professionals without building an internal team",
        "Gain peace of mind with dedicated support and ongoing system health checks",
      ]}
      relatedServices={[
        {
          title: "Risk Analysis",
          description: "Comprehensive audits of infrastructure and workflows.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/risk-analysis",
        },
        {
          title: "Cloud & Infrastructure",
          description: "Scalable cloud solutions and infrastructure management.",
          icon: <Cloud className="h-6 w-6" />,
          href: "/services/cloud",
        },
        {
          title: "Network & Connectivity",
          description: "Reliable and high-performance networking solutions.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/network",
        },
      ]}
      faqs={[
        {
          question: "How does Managed IT Services differ from break-fix support?",
          answer:
            "Managed IT is proactive - we monitor your systems and resolve issues before they disrupt your day. Break-fix is reactive - you only call when something has already broken.",
        },
        {
          question: "Can you manage our existing infrastructure?",
          answer:
            "Yes, absolutely. We assess your environment and create a smooth transition plan without interrupting daily operations.",
        },
        {
          question: "What's included in the monthly fee?",
          answer:
            "Our monthly fee includes monitoring, maintenance, helpdesk support, security updates, and planned preventative maintenance. Custom projects are quoted transparently in advance.",
        },
        {
          question: "What support response times do you offer?",
          answer:
            "We provide rapid priority response for critical issues and structured same-day support for day-to-day staff requests.",
        },
      ]}
    />
  )
}
