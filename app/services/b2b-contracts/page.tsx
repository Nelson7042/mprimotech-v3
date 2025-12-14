import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CheckCircle,
  Award,
  Shield,
  Users,
  Clock,
  FileText,
  Building,
  Quote,
  ArrowRight,
} from "lucide-react";

export default function B2BContractsPage() {
  const contractFeatures = [
    "Clear scope & deliverables",
    "Dedicated account manager", 
    "Compliance built-in (GDPR, ISO 27001, SOC 2, HIPAA-ready)",
    "Flexible 12–36 month terms",
    "White-label options – your branding on everything",
    "Priority 24/7 support when bids are on the line"
  ];

  const perfectFor = [
    "IT resellers & subcontractors",
    "Government & regulated-industry bidders", 
    "Enterprises needing guaranteed performance"
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl mx-auto text-white text-center">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Building className="w-5 h-5" />
              <span className="text-sm font-medium">Enterprise B2B Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Enterprise B2B IT Contracts
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 font-medium">
              The Partnership Contractors Trust
            </p>
            
            <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-50">
              Formal agreements designed for long-term wins:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
              {contractFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold text-lg px-8 py-6 shadow-xl"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start the Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Perfect for:
              </h2>
              <div className="grid sm:grid-cols-3 gap-8">
                {perfectFor.map((item, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-gray-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Quote className="w-16 h-16 text-blue-200 mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Clients Say
              </h2>
            </div>
            
            <blockquote className="text-xl sm:text-2xl text-white font-medium mb-6 italic">
              "B2B contract with MPrimo doubled our margins on subcontracted work."
            </blockquote>
            
            <cite className="text-blue-200 font-semibold">
              — Reseller, UK
            </cite>
          </div>
        </section>

        {/* Key Benefits Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our B2B Contracts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for partnerships that scale, with transparency and reliability at the core
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "Crystal Clear Scope",
                  description: "No ambiguity. Every deliverable, timeline, and responsibility clearly defined upfront."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Dedicated Support",
                  description: "Your own account manager who knows your business and is available when you need them most."
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Compliance Ready",
                  description: "Built-in compliance for GDPR, ISO 27001, SOC 2, and HIPAA. We handle the complexity."
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Flexible Terms",
                  description: "12-36 month agreements that adapt to your business growth and changing needs."
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "White-Label Ready",
                  description: "Your branding on everything. Your clients see your company, not ours."
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Priority Support",
                  description: "24/7 priority support when bids are on the line. We're invested in your success."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Trusted Across Industries
              </h2>
              <p className="text-xl text-gray-600">
                From government contracts to healthcare compliance, we understand your sector's unique requirements
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Government",
                "Healthcare", 
                "Financial Services",
                "Manufacturing",
                "Education",
                "Legal",
                "Non-Profit",
                "Technology"
              ].map((industry, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <p className="font-semibold text-gray-900">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's build your contract today
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Ready to partner with a team that puts your success first? Let's discuss how our B2B contracts can accelerate your growth.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold text-lg px-8 py-6 shadow-xl"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start the Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}