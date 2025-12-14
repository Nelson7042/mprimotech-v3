"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    { name: "Managed IT Services", href: "/services/managed-it" },
    { name: "Risk Analysis", href: "/services/risk-analysis" },
    { name: "Cloud & Infrastructure", href: "/services/cloud" },
    { name: "Digital Workplace", href: "/services/digital-workplace" },
    { name: "Network & Connectivity", href: "/services/network" },
    { name: "Backup & Business Continuity", href: "/services/backup" },
    { name: "Remote & Desktop Support", href: "/sectors/remote-&-desktop-support" },
    { name: "Rollouts & Refresh", href: "/sectors/rollouts-&-refresh" },
    { name: "Hands & Eyes Services", href: "/sectors/hands-&-eyes-services" },
    { name: "Consultancy", href: "/services/consultancy" },
    { name: "Professional Services", href: "/services/professional" },
    { name: "B2B IT Contracts", href: "/services/b2b-contracts" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
              <span className="font-bold text-white">M</span>
            </div>
            <span className="text-lg font-bold text-foreground">MPrimo Tech</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-0 hidden w-48 bg-white border border-border rounded-lg shadow-lg group-hover:block py-2">
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

            <Link href="/sectors" className="text-sm font-medium text-foreground hover:text-primary transition">
              Sectors
            </Link>
            {/* <Link href="/resources" className="text-sm font-medium text-foreground hover:text-primary transition">
              Resources
            </Link> */}
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/book-consultation">Book Consultation</Link>
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
              Services
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
            <Link href="/sectors" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary">
              Sectors
            </Link>
            {/* <Link href="/resources" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary">
              Resources
            </Link> */}
            <Link href="/about" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary">
              Contact
            </Link>
            <Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90 text-white">
              <Link href="/book-consultation">Book Consultation</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
