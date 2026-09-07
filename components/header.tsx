"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    { name: "On-Site IT Support", href: "/services/on-site-it-support" },
    { name: "Admin Automation", href: "/services/admin-automation" },
    { name: "System Untangling", href: "/services/system-untangling" },
    { name: "Network & WiFi", href: "/services/network-wifi" },
    { name: "Backup & Safety", href: "/services/backup-safety" },
    { name: "Ongoing Support", href: "/services/ongoing-support" },
  ]

  const sectors = [
    { name: "Care Homes", href: "/sectors/care-homes" },
    { name: "Hospitality", href: "/sectors/hospitality" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="">
            <img
              src="/assets/mprimo 2.png"
              alt="MPrimo Tech logo"
              className="w-auto object-contain h-[60px] md:h-[150px]"
            />
          </Link>

          {/* Desktop Menu */}  
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition">
              Home
            </Link>

            {/* What We Do Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition">
                What We Do
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-0 hidden w-56 bg-white border border-border rounded-lg shadow-lg group-hover:block py-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Sectors Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition">
                Sectors
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-0 hidden w-48 bg-white border border-border rounded-lg shadow-lg group-hover:block py-2">
                {sectors.map((sector) => (
                  <Link
                    key={sector.href}
                    href={sector.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition"
                  >
                    {sector.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Book a Site Visit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-secondary rounded transition">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary">
              Home
            </Link>
            
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left px-2 py-2 text-sm font-medium text-foreground hover:text-primary flex items-center gap-1"
            >
              What We Do
              <ChevronDown className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 bg-secondary/30">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-2 py-2 text-sm text-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
            
            <Link href="/sectors/care-homes" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary">
              Care Homes
            </Link>
            <Link href="/sectors/hospitality" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary">
              Hospitality
            </Link>
            <Link href="/about" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary">
              About
            </Link>
            <Link href="/faq" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary">
              FAQ
            </Link>
            <Link href="/contact" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary">
              Contact
            </Link>
            <Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Book a Site Visit</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
