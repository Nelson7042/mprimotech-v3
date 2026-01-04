import ServiceTemplate from "@/components/service-template"
import { Shield, Cloud, Zap } from "lucide-react"

export default function NetworkPage() {
  return (
    <ServiceTemplate
      title="Network & Connectivity"
      subtitle="Reliable and high-performance networking solutions for seamless connectivity"
      problems={[
        "Slow network speeds kill productivity and frustrate employees",
        "Network downtime costs thousands in lost revenue per hour",
        "Expensive MPLS connections drain your IT budget",
        "Poor WiFi coverage creates dead zones in your office",
        "Network security gaps expose you to cyber attacks"
      ]}
      solutions={[
        "High-performance networks with 99.95% uptime guarantee",
        "SD-WAN reduces bandwidth costs by 30-50%",
        "WiFi 6 provides seamless coverage throughout your facility",
        "Advanced security controls protect against network threats",
        "24/7 monitoring prevents issues before they impact business"
      ]}
      overview="Your network is the backbone of your business. We design and manage high-performance networks that deliver reliability, security, and scalability. From LAN/WAN optimization to SD-WAN implementation, we ensure your connectivity supports your business objectives."
      features={[
        "LAN/WAN Design & Optimization",
        "SD-WAN Implementation",
        "Network Security & Firewalls",
        "Load Balancing & Failover",
        "Network Monitoring & Analytics",
        "WiFi 6 & Wireless Solutions",
        "Network Capacity Planning",
        "Bandwidth Optimization",
      ]}
      benefits={[
        "Achieve 99.95% network uptime with redundant connections",
        "Reduce bandwidth costs by 30-50% with SD-WAN",
        "Improve application performance with optimization",
        "Enhance security with advanced network controls",
        "Simplify network management with unified visibility",
        "Support growth without infrastructure rework",
      ]}
      relatedServices={[
        {
          title: "Cybersecurity",
          description: "Secure network infrastructure.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/cybersecurity",
        },
        {
          title: "Cloud & Infrastructure",
          description: "Cloud connectivity solutions.",
          icon: <Cloud className="h-6 w-6" />,
          href: "/services/cloud",
        },
        {
          title: "Managed IT Services",
          description: "Network monitoring and support.",
          icon: <Zap className="h-6 w-6" />,
          href: "/services/managed-it",
        },
      ]}
      testimonial={{
        text: "Our network is now faster and more reliable. MPrimo Tech's SD-WAN implementation saved us significant costs while improving performance.",
        name: "Michael Chen",
        company: "Manufacturing Solutions LLC",
      }}
      faqs={[
        {
          question: "What is SD-WAN and how does it help?",
          answer:
            "SD-WAN (Software-Defined WAN) uses software to manage connectivity, reducing costs and improving performance compared to traditional MPLS.",
        },
        {
          question: "How do you ensure network security?",
          answer:
            "We implement firewalls, intrusion detection, DDoS protection, and continuous monitoring. Networks are segmented for security.",
        },
        {
          question: "Can you manage our existing network?",
          answer:
            "Yes, we work with existing infrastructure and optimize it. We can integrate with equipment from various vendors.",
        },
        {
          question: "What about network monitoring?",
          answer:
            "We provide 24/7 monitoring with real-time alerts and analytics to ensure optimal performance and quick issue resolution.",
        },
      ]}
    />
  )
}
