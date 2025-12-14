import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">MPrimo Tech</h3>
            <p className="text-sm opacity-90">Enterprise IT services and solutions for modern businesses.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/managed-it" className="opacity-90 hover:opacity-100">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link href="/services/risk-analysis" className="opacity-90 hover:opacity-100">
                  Risk Analysis
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="opacity-90 hover:opacity-100">
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services/digital-workplace" className="opacity-90 hover:opacity-100">
                  Digital Workplace
                </Link>
              </li>
              <li>
                <Link href="/services/network" className="opacity-90 hover:opacity-100">
                  Network & Connectivity
                </Link>
              </li>
              <li>
                <Link href="/services/backup" className="opacity-90 hover:opacity-100">
                  Backup & Continuity
                </Link>
              </li>
              <li>
                <Link href="/services/b2b-contracts" className="opacity-90 hover:opacity-100">
                  B2B IT Contracts
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {/* <li>
                <Link href="/resources" className="opacity-90 hover:opacity-100">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/case-studies" className="opacity-90 hover:opacity-100">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="opacity-90 hover:opacity-100">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@mprimotech.com" className="opacity-90 hover:opacity-100">
                  info@mprimotech.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:++443302237450" className="opacity-90 hover:opacity-100">
                 +44 (330) 223-7450
                </a>
              </li>
              {/* <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">123 Tech Street, Silicon Valley, CA 94025</span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90">&copy; 2025 MPrimo Tech. All rights reserved.</p>
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
