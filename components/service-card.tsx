import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="group h-full flex flex-col p-6 rounded-lg border border-border bg-white hover:shadow-lg hover:border-primary transition-all duration-300">
        <div className="text-primary mb-4 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition mx-auto sm:mx-0">
          {icon}
        </div>
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
        <div className="flex items-center gap-2 text-primary font-medium text-sm">
          Learn More
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
