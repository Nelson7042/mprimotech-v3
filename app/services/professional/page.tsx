import ServiceTemplate from "@/components/service-template"
import { Cloud, Zap, TrendingUp } from "lucide-react"

export default function ProfessionalServicesPage() {
  return (
    <ServiceTemplate
      title="Professional Services"
      subtitle="Custom IT solutions and project implementation"
      overview="Beyond ongoing support, sometimes you need specialized expertise for specific projects. Our Professional Services team delivers custom solutions, from application development to complex system implementations. We work as an extension of your team."
      features={[
        "Custom Application Development",
        "System Integration & Migration",
        "Infrastructure Deployment",
        "Database Design & Optimization",
        "Security Implementation",
        "Business Process Automation",
        "IT Project Management",
        "Staff Augmentation",
      ]}
      benefits={[
        "Accelerate project completion with specialized expertise",
        "Reduce development costs through efficient implementation",
        "Ensure best practices are followed in projects",
        "Access specialized skills without hiring overhead",
        "Minimize project risk with experienced project management",
        "Scale your team dynamically for project needs",
      ]}
      relatedServices={[
        {
          title: "Managed IT Services",
          description: "Post-project support and management.",
          icon: <Zap className="h-6 w-6" />,
          href: "/services/managed-it",
        },
        {
          title: "Cloud & Infrastructure",
          description: "Cloud infrastructure projects.",
          icon: <Cloud className="h-6 w-6" />,
          href: "/services/cloud",
        },
        {
          title: "Consultancy",
          description: "Project planning and strategy.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/consultancy",
        },
      ]}
      testimonial={{
        text: "MPrimo Tech delivered our CRM implementation on time and under budget. Their team understood our business needs and delivered exactly what we required.",
        name: "Susan Taylor",
        company: "Sales Force Inc.",
      }}
      faqs={[
        {
          question: "How do you structure project pricing?",
          answer:
            "We typically use fixed-price or time-and-materials models. We discuss your preferences and budget upfront.",
        },
        {
          question: "What methodologies do you use?",
          answer:
            "We use Agile and Waterfall methodologies depending on project needs. We ensure clear communication and regular status updates.",
        },
        {
          question: "Do you handle project handoff?",
          answer:
            "Yes, we provide comprehensive documentation and training. We ensure your team can maintain the solution post-launch.",
        },
        {
          question: "Can you staff augmentation?",
          answer:
            "Yes, we provide skilled developers and IT professionals to augment your team on a temporary or long-term basis.",
        },
      ]}
    />
  )
}
