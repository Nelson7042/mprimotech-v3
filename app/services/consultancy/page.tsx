import ServiceTemplate from "@/components/service-template"
import { Shield, Cloud, Zap } from "lucide-react"

export default function ConsultancyPage() {
  return (
    <ServiceTemplate
      title="Consultancy"
      subtitle="Strategic IT guidance and planning for digital transformation"
      overview="Navigate technology complexity with expert guidance. Our consultants work with you to understand your business objectives and design IT strategies that support growth. From digital transformation to technology assessments, we provide actionable recommendations."
      features={[
        "IT Strategy & Roadmap Development",
        "Technology Assessment & Audit",
        "Digital Transformation Planning",
        "Cost Optimization Analysis",
        "Vendor Selection & Management",
        "Process Improvement Consulting",
        "Post-Implementation Support",
        "Change Management Guidance",
      ]}
      benefits={[
        "Align IT investments with business strategy",
        "Reduce IT costs through optimized technology spend",
        "Accelerate digital transformation initiatives",
        "Avoid costly technology mistakes",
        "Improve IT governance and risk management",
        "Leverage best practices from industry peers",
      ]}
      relatedServices={[
        {
          title: "Cloud & Infrastructure",
          description: "Cloud strategy & migration.",
          icon: <Cloud className="h-6 w-6" />,
          href: "/services/cloud",
        },
        {
          title: "Managed IT Services",
          description: "Implement recommended solutions.",
          icon: <Zap className="h-6 w-6" />,
          href: "/services/managed-it",
        },
        {
          title: "Cybersecurity",
          description: "Security strategy & implementation.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/cybersecurity",
        },
      ]}
      testimonial={{
        text: "MPrimo Tech's consultants helped us develop a comprehensive IT strategy aligned with our business goals. The recommendations have been transformational.",
        name: "James Morrison",
        company: "Enterprise Holdings",
      }}
      faqs={[
        {
          question: "How long does a consultancy engagement typically last?",
          answer:
            "Engagements range from 4 weeks for specific assessments to 6-12 months for comprehensive transformations.",
        },
        {
          question: "Do you help with implementation?",
          answer:
            "Yes, we provide implementation support and can transition to managed services. This ensures recommendations are properly executed.",
        },
        {
          question: "How much does consultancy cost?",
          answer:
            "We offer flexible engagement models. We can provide hourly consulting or project-based pricing. We discuss your budget upfront.",
        },
        {
          question: "Can you audit our current IT spending?",
          answer:
            "Absolutely. We perform comprehensive IT cost analysis and provide detailed cost optimization recommendations.",
        },
      ]}
    />
  )
}
