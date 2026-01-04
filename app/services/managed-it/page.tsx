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
        "99.5% uptime guarantee with financial penalties if we miss targets",
        "Strategic IT planning that scales with your business growth"
      ]}
      overview="Our Managed IT Services provide comprehensive oversight of your entire IT environment. We combine 24/7 monitoring, proactive maintenance, and expert support to ensure your systems run optimally. This allows your team to focus on core business activities while we handle the technical complexities."
      features={[
        "24/7 Proactive System Monitoring",
        "Automated Patch Management",
        "Help Desk Support with 4-Hour Response Time",
        "Network Performance Optimization",
        "Security Threat Detection",
        "Capacity Planning and Growth Management",
        "Performance Reporting and Analytics",
        "Scheduled Preventive Maintenance",
      ]}
      benefits={[
        "Reduce IT downtime and operational disruptions by up to 95% with proactive monitoring",
        "Improve security posture with continuous threat detection and automated responses",
        "Optimize IT spending by consolidating vendor relationships and eliminating redundant systems",
        "Scale IT infrastructure seamlessly as your business grows",
        "Access expert IT professionals without building an in-house team",
        "Gain peace of mind with SLA-backed guarantees on system uptime",
      ]}
      relatedServices={[
        {
          title: "Cybersecurity",
          description: "Advanced threat detection and comprehensive security solutions.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/cybersecurity",
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
      testimonial={{
        text: "MPrimo Tech's managed services have been transformational. We went from firefighting IT issues to having a strategic IT partner. Our downtime has dropped significantly.",
        name: "Robert Wilson",
        company: "Manufacturing Corp",
      }}
      faqs={[
        {
          question: "How does Managed IT Services differ from break-fix support?",
          answer:
            "Managed IT is proactive - we monitor your systems 24/7 and fix issues before they impact your business. Break-fix is reactive - you call when something breaks. Managed IT is more cost-effective and provides better outcomes.",
        },
        {
          question: "Can you manage our existing infrastructure?",
          answer:
            "Yes, absolutely. We can integrate with your current systems and infrastructure. We'll assess your environment and create a transition plan with zero downtime.",
        },
        {
          question: "What's included in the monthly fee?",
          answer:
            "Our monthly fee includes monitoring, maintenance, helpdesk support, security updates, reporting, and planned maintenance. Additional services like cloud migration or new projects are quoted separately.",
        },
        {
          question: "What SLAs do you offer?",
          answer:
            "Standard SLAs include 99.5% uptime guarantee, 4-hour response time for critical issues, and 8-hour response for non-critical issues. Custom SLAs are available for enterprise clients.",
        },
      ]}
    />
  )
}
