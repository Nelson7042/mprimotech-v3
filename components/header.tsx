"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [sectorsOpen, setSectorsOpen] = useState(false)

  const sectors = [
    { name: "Care Homes", href: "/sectors/care-homes" },
    { name: "Hospitality", href: "/sectors/hospitality" },
  ]

  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">MPrimo Tech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Services
          </Link>

          {/* Sectors Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSectorsOpen(!sectorsOpen)}
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
            >
              Sectors
              <ChevronDown className="h-4 w-4" />
            </button>

            {sectorsOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-md border bg-background p-2 shadow-lg">
                {sectors.map((sector) => (
                  <Link
                    key={sector.href}
                    href={sector.href}
                    onClick={() => setSectorsOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                  >
                    {sector.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>

          <Link
            href="/faq"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>

          <Button asChild>
            <Link href="/book-consultation">
              Book a 20-minute process review
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t md:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              Services
            </Link>

            <Link
              href="/sectors/care-homes"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              Care Homes
            </Link>

            <Link
              href="/sectors/hospitality"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              Hospitality
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              About
            </Link>

            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              Contact
            </Link>

            <Button asChild className="mt-2">
              <Link
                href="/book-consultation"
                onClick={() => setIsOpen(false)}
              >
                Book a 20-minute process review
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
