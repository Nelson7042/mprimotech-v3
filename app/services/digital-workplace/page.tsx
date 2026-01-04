import ServiceTemplate from "@/components/service-template"
import { Shield, Cloud, TrendingUp } from "lucide-react"

export default function DigitalWorkplacePage() {
  return (
    <ServiceTemplate
      title="Digital Workplace"
      subtitle="Work is something you do, not a place you go."
      problems={[
        "Your team is drowning in app overload with disconnected tools",
        "VPNs constantly disconnect and frustrate remote workers",
        "Files are trapped on local servers, blocking collaboration",
        "Shadow IT creates security risks as teams find workarounds",
        "New hires take days to get access to the tools they need"
      ]}
      solutions={[
        "Unified digital workspace with seamless tool integration",
        "Zero Trust security eliminates clunky VPN connections",
        "Single Sign-On (SSO) gives one-password access to everything",
        "Secure cloud file syncing enables real-time collaboration",
        "Automated onboarding gets new hires productive in minutes"
      ]}
      overview="We build a friction-free digital environment that mirrors the ease of an in-person office. We implement Single Sign-On (SSO) so one password opens every door, unify your communication tools so data doesn't get lost in silos, and wrap it all in Zero Trust security that protects your data without getting in your way."
      features={[
        "Unified Hubs (Microsoft Teams/Slack Integration)",
        "Zero-Trust Remote Access (No more clunky VPNs)",
        "Single Sign-On (SSO) & Identity Management",
        "Mobile Device Management (BYOD Friendly)",
        "Automated Onboarding Workflows",
        "Secure Cloud File Syncing",
        "Intranets that people actually use",
        "Digital Employee Experience Monitoring",
      ]}
      benefits={[
        "Onboard new remote hires in minutes, not days",
        "Stop the 'I can't access that file' support tickets",
        "Secure company data on employee personal devices",
        "Reduce meeting fatigue with asynchronous collab tools",
        "Seamlessly switch between laptop, tablet, and phone",
        "Eliminate 'Shadow IT' by giving teams tools they actually like",
      ]}
      relatedServices={[
        {
          title: "Cybersecurity",
          description: "Protect your dispersed perimeter.",
          icon: <Shield className="h-6 w-6" />,
          href: "/services/cybersecurity",
        },
        {
          title: "Cloud & Infrastructure",
          description: "The backbone of modern work.",
          icon: <Cloud className="h-6 w-6" />,
          href: "/services/cloud",
        },
        {
          title: "Network & Connectivity",
          description: "Reliable connections for home offices.",
          icon: <TrendingUp className="h-6 w-6" />,
          href: "/services/network",
        },
      ]}
      testimonial={{
        text: "Before MPrimo, our team felt fragmented. The marketing team couldn't talk to sales, and the VPN was a nightmare. Now, it feels like we're all in the same room, even though we're spread across three time zones.",
        name: "Lisa Anderson",
        company: "Global Services Corp",
      }}
      faqs={[
        {
          question: "Do we have to switch to Microsoft Teams?",
          answer:
            "Not if you love Slack. We are agnostic. Whether you use Google Workspace, Microsoft 365, Slack, or Zoom, our goal is to make them talk to each other and secure them, not force you to change your culture.",
        },
        {
          question: "How do you secure employees' personal phones?",
          answer:
            "We use Containerization. We create a secure, encrypted 'bubble' on their personal phone for work apps. We can wipe the work data if they leave the company, but we can't see or touch their personal photos or texts.",
        },
        {
          question: "Does this replace our VPN?",
          answer:
            "Ideally, yes. We aim for a 'Zero Trust' model where access is verified by identity and device health, rather than just tunneling into the network. It's much more secure and infinitely less annoying for users.",
        },
        {
          question: "Are you going to monitor my employees' activity?",
          answer:
            "We track system health, not people. We monitor for security threats and app performance (like 'is Zoom lagging?'), but we do not implement 'spyware' to count keystrokes or screenshots. Trust is a key part of the modern workplace.",
        },
      ]}
    />
  )
}