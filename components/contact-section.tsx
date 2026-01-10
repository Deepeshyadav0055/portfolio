"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-secondary/40" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work <span className="text-muted-foreground">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new
            opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left animation-delay-200" : "opacity-0"}`}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-secondary border border-border">
                <Mail size={20} className="text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <a
                  href="mailto:deepeshyadav2504006@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  deepeshyadav2504006@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-secondary border border-border">
                <MapPin size={20} className="text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Location</h3>
                <p className="text-muted-foreground">Jaipur, Rajasthan, India</p>
              </div>
            </div>

            {/* Resume Download */}
            <div className="pt-8 border-t border-border">
              <Button
                variant="outline"
                className="w-full group border-border hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
              >
                Download Resume
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <form className={`space-y-6 ${isVisible ? "animate-fade-up animation-delay-400" : "opacity-0"}`}>
            <div>
              <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-muted-foreground focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-muted-foreground focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-muted-foreground focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button className="w-full bg-foreground text-background hover:bg-muted-foreground transition-all duration-300 group">
              Send Message
              <Send
                size={16}
                className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
