import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A2B6B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">MPrimo Tech</h3>
            <p className="text-sm opacity-90">UK-based on-site IT support for care homes and hospitality. We untangle messy admin and automate manual work.</p>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="font-semibold mb-4">What We Do</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="opacity-90 hover:opacity-100">
                  On-Site IT Support
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-90 hover:opacity-100">
                  Admin Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-90 hover:opacity-100">
                  System Untangling
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-90 hover:opacity-100">
                  Network & WiFi
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-90 hover:opacity-100">
                  Backup & Safety
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-90 hover:opacity-100">
                  Ongoing Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-semibold mb-4">Sectors</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sectors/care-homes" className="opacity-90 hover:opacity-100">
                  Care Homes
                </Link>
              </li>
              <li>
                <Link href="/sectors/hospitality" className="opacity-90 hover:opacity-100">
                  Hospitality
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@mprimotech.com" className="opacity-90 hover:opacity-100">
                  info@mprimotech.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+443302237450" className="opacity-90 hover:opacity-100">
                  +44 (330) 223-7450
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90">&copy; 2026 MPrimo Tech. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <Link href="/privacy" className="opacity-90 hover:opacity-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="opacity-90 hover:opacity-100">
              Terms of Service
            </Link>
            <Link href="/contact" className="opacity-90 hover:opacity-100">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
