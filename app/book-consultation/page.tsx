"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import Script from "next/script"
import {
  Clock,
  CheckCircle,
  User,
  FileSearch,
  AlertOctagon,
  ChevronRight,
  Loader2,
  Star
} from "lucide-react"

// ... (ServiceCard component stays the same as before) ...
const ServiceCard = ({ type, isSelected, onClick }: any) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 flex items-start gap-4 relative group
      ${isSelected 
        ? "border-primary bg-primary/5 shadow-md ring-1 ring-primary/20" 
        : "border-slate-100 bg-white hover:border-slate-300 hover:shadow-sm"
      }`}
  >
    <div className={`p-3 rounded-lg transition-colors flex-shrink-0 ${isSelected ? type.color : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"}`}>
      {type.icon}
    </div>
    
    <div className="flex-1 min-w-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 gap-2">
        <span className={`font-bold text-base sm:text-lg ${isSelected ? "text-primary" : "text-foreground"}`}>
          {type.title}
        </span>
        <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider bg-white px-2 py-1 rounded-full border border-slate-200 text-muted-foreground w-fit">
          {type.duration}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {type.description}
      </p>
    </div>

    {isSelected && (
      <div className="absolute top-3 right-3 text-primary animate-in fade-in zoom-in duration-300">
        <CheckCircle className="h-5 w-5 fill-primary text-white" />
      </div>
    )}
  </button>
)

export default function BookConsultationPage() {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState<string>("")
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 1. ADDED: State to hold form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: ""
  })

  // Booking Data
  const consultationTypes = [
    {
      id: "discovery",
      title: "The 'Good Fit' Chat",
      duration: "15-20 Min",
      description: "No sales deck. We just talk about your setup and see if we can help.",
      icon: <User className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-700"
    },
    {
      id: "risk",
      title: "Risk Analysis Review",
      duration: "30 Min",
      description: "Discuss specific vulnerabilities or compliance gaps with an expert.",
      icon: <FileSearch className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-700"
    },
    {
      id: "emergency",
      title: "Urgent Incident",
      duration: "Immediate",
      description: "Active breach? Server down? Skip the line. Priority triage.",
      icon: <AlertOctagon className="h-5 w-5" />,
      color: "bg-red-100 text-red-600"
    },
  ]

  // Mock Dates logic
  const today = new Date()
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date()
    d.setDate(today.getDate() + i + 1)
    return {
      day: d.toLocaleDateString("en-US", { weekday: "short" }),
      date: d.getDate(),
      month: d.toLocaleDateString("en-US", { month: "short" }),
      fullDate: d,
      available: ![0, 6].includes(d.getDay())
    }
  })

  const timeSlots = ["09:00 AM", "10:30 AM", "11:00 AM", "01:00 PM", "02:30 PM", "04:00 PM"]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [step])

  // 2. ADDED: Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step === 1 && selectedType === "emergency") {
      setStep(3)
    } else {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step === 3 && selectedType === "emergency") {
        setStep(1)
    } else {
        setStep(step - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const selectedServiceTitle = consultationTypes.find(t => t.id === selectedType)?.title
    const fullDateString = selectedDate 
      ? dates.find(d => d.date === selectedDate)?.fullDate.toDateString() 
      : "Immediate / Emergency"

    const params = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      service_type: selectedServiceTitle,
      requested_date: fullDateString,
      requested_time: selectedTime || "ASAP",
      message: formData.description,
      subject: selectedType === "emergency" 
        ? `🚨 URGENT: Emergency IT Support Request from ${formData.firstName} ${formData.lastName}`
        : `New Consultation Request: ${selectedServiceTitle}`
    }

    try {
      // @ts-ignore
      await emailjs.send('service_xfsu11w', 'YOUR_TEMPLATE_ID', params)
      // Replace with: await emailjs.send('service_abc123', 'template_xyz789', params)
      setIsSubmitting(false)
      setStep(4)
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to send. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js" />
      <Script id="emailjs-init">
        {`
          (function(){
            emailjs.init("YOUR_PUBLIC_KEY");
            // Replace with: emailjs.init("user_abcdef123456");
          })();
        `}
      </Script>
      <Header />
      <main className="bg-slate-50 min-h-screen pb-20">
        {/* ... (Header sections same as before) ... */}
        
        {/* Mobile Header */}
        <div className="bg-primary text-white py-12 px-4 text-center sm:hidden">
            <h1 className="text-3xl font-bold mb-2">Book Consultation</h1>
            <p className="text-blue-100 text-sm">Direct access to Senior Engineers.</p>
        </div>

        {/* Desktop Header */}
        <section className="hidden sm:block bg-primary pt-20 pb-40 px-4 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
             <h1 className="text-5xl font-bold mb-6">Stop playing phone tag.</h1>
             <p className="text-xl text-blue-100 leading-relaxed">
               Book a time directly with a Senior Solution Architect.
             </p>
           </div>
        </section>

        {/* Main Floating Card */}
        <section className="relative px-3 sm:px-6 lg:px-8 sm:-mt-24">
          <div className="mx-auto max-w-6xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
            
            {/* LEFT: Trust Signals */}
            <div className={`bg-slate-50 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 lg:w-5/12 ${step > 1 ? "hidden lg:block" : "block"}`}>
               {/* ... (Same left content content as previous code) ... */}
               <div className="sticky top-6">
                    <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-6 block">
                        Why book with us?
                    </span>
                    
                    <h2 className="text-2xl font-bold text-foreground mb-8">
                        Engineers, <span className="text-primary">Not Sharks.</span>
                    </h2>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm h-fit">
                                <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Respect For Time</h3>
                                <p className="text-sm text-muted-foreground mt-1">We don't do hour-long sales decks. We dive straight into your problem.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm h-fit">
                                <CheckCircle className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Real Value</h3>
                                <p className="text-sm text-muted-foreground mt-1">Even if we don't work together, you'll leave with a clear roadmap.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-200">
                        <div className="flex items-center gap-1 mb-3">
                            {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />)}
                        </div>
                        <p className="text-sm text-slate-600 italic mb-4">
                            "I expected a sales pitch and instead got a free architecture review. These guys actually know their stuff."
                        </p>
                        <div className="flex items-center gap-3">
                            <img 
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" 
                                alt="User" 
                                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                            />
                            <div>
                                <p className="text-xs font-bold text-foreground">David Chen</p>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">CTO, FinTech Global</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT: Booking Wizard */}
            <div className="p-4 sm:p-10 lg:w-7/12 min-h-[500px] flex flex-col relative">
                
                {/* Step Indicators (Same as previous) */}
                {step < 4 && (
                     <div className="flex items-center gap-2 mb-8 text-sm font-medium text-muted-foreground">
                        <span className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : ""}`}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? "bg-primary text-white" : "bg-slate-200"}`}>1</span>
                            <span className="hidden sm:inline">Service</span>
                        </span>
                        <div className="w-8 h-[1px] bg-slate-200"></div>
                        <span className={`flex items-center gap-2 ${step >= 2 ? "text-primary" : ""}`}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? "bg-primary text-white" : "bg-slate-200"}`}>2</span>
                            <span className="hidden sm:inline">Date & Time</span>
                        </span>
                        <div className="w-8 h-[1px] bg-slate-200"></div>
                        <span className={`flex items-center gap-2 ${step >= 3 ? "text-primary" : ""}`}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? "bg-primary text-white" : "bg-slate-200"}`}>3</span>
                            <span className="hidden sm:inline">Details</span>
                        </span>
                     </div>
                )}

                {/* --- STEP 1: SERVICE --- */}
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <h2 className="text-xl sm:text-2xl font-bold mb-6">How can we help?</h2>
                        <div className="space-y-3">
                            {consultationTypes.map((type) => (
                                <ServiceCard 
                                    key={type.id} 
                                    type={type} 
                                    isSelected={selectedType === type.id} 
                                    onClick={() => setSelectedType(type.id)}
                                />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-end">
                            <Button 
                                onClick={handleNext} 
                                disabled={!selectedType}
                                size="lg"
                                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold transition-all"
                            >
                                Continue <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                )}

                {/* --- STEP 2: DATE & TIME --- */}
                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <h2 className="text-xl sm:text-2xl font-bold mb-2">Select a Time</h2>
                        <p className="text-muted-foreground mb-6 text-sm">Times are in your local timezone.</p>

                        <div className="mb-6">
                            <label className="text-xs font-bold uppercase text-muted-foreground mb-3 block">Available Dates</label>
                            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                                {dates.map((date, i) => (
                                    <button
                                        key={i}
                                        disabled={!date.available}
                                        onClick={() => setSelectedDate(date.date)}
                                        className={`flex flex-col items-center justify-center min-w-[70px] h-[80px] rounded-xl border transition-all
                                            ${selectedDate === date.date 
                                                ? "bg-primary text-white border-primary shadow-md transform scale-105" 
                                                : date.available 
                                                    ? "bg-white border-slate-200 hover:border-primary/50" 
                                                    : "bg-slate-50 border-slate-100 opacity-40 cursor-not-allowed"
                                            }`}
                                    >
                                        <span className="text-xs font-medium uppercase opacity-80">{date.day}</span>
                                        <span className="text-xl font-bold">{date.date}</span>
                                        <span className="text-[10px] uppercase opacity-80">{date.month}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {selectedDate && (
                             <div className="mb-8 animate-in fade-in zoom-in duration-300">
                                <label className="text-xs font-bold uppercase text-muted-foreground mb-3 block">Available Slots</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`py-3 px-4 rounded-lg text-sm font-semibold border transition-all
                                                ${selectedTime === time 
                                                    ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                                                    : "bg-white border-slate-200 hover:border-blue-400 text-slate-700"
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-auto flex justify-between">
                            <Button variant="ghost" onClick={handleBack} className="text-muted-foreground hover:text-foreground">
                                Back
                            </Button>
                            <Button 
                                onClick={handleNext} 
                                disabled={!selectedDate || !selectedTime}
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-white"
                            >
                                Continue <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                )}

                {/* --- STEP 3: DETAILS & SUBMIT --- */}
                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col">
                        <h2 className="text-xl sm:text-2xl font-bold mb-6">
                            {selectedType === 'emergency' ? 'Emergency Incident Details' : 'Final Details'}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {selectedType === 'emergency' && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3 text-red-800 text-sm">
                                    <AlertOctagon className="h-5 w-5 flex-shrink-0" />
                                    <p><strong>Priority Status:</strong> This will send an urgent priority email directly to our emergency response team.</p>
                                </div>
                            )}

                            {/* 4. UPDATED: Inputs now use name, value, and onChange */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">First Name</label>
                                    <input required name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Last Name</label>
                                    <input required name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Work Email</label>
                                <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">
                                    {selectedType === 'emergency' ? "Describe the Incident" : "What specific challenges are you facing?"}
                                </label>
                                <textarea required name="description" value={formData.description} onChange={handleInputChange} rows={4} className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"></textarea>
                            </div>

                            <div className="mt-8 flex justify-between pt-4 border-t border-slate-100">
                                <Button type="button" variant="ghost" onClick={handleBack}>
                                    Back
                                </Button>
                                <Button 
                                    type="submit" 
                                    size="lg"
                                    disabled={isSubmitting}
                                    className={`${selectedType === 'emergency' ? 'bg-red-600 hover:bg-red-700' : 'bg-primary hover:bg-primary/90'} text-white w-full sm:w-auto min-w-[150px]`}
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin h-5 w-5" /> : (selectedType === 'emergency' ? "Send Panic Report" : "Create Invite Request")}
                                </Button>
                            </div>
                            
                            <p className="text-center text-xs text-muted-foreground mt-2">
                                *Your message will be sent directly to our team.
                            </p>
                        </form>
                    </div>
                )}

                {/* --- STEP 4: SUCCESS --- */}
                {step === 4 && (
                    <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 py-12">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="h-10 w-10" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Request Generated</h2>
                        
                        <p className="text-slate-600 mb-8 max-w-sm">
                            Your consultation request has been sent successfully. We will get back to you shortly.
                        </p>

                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                            <Link href="/">Back to Home</Link>
                        </Button>
                    </div>
                )}

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}