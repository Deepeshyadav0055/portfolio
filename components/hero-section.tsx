"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com/Deepeshyadav0055", label: "GitHub", external: true },
    { icon: Linkedin, href: "https://www.linkedin.com/in/deepesh-yadav-3a6a54346", label: "LinkedIn", external: true },
    { icon: Mail, href: "#contact", label: "Email" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-muted/20 rounded-full blur-2xl animate-float animation-delay-300" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-float animation-delay-600" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm tracking-widest uppercase animate-fade-in animation-delay-200">
                Computer Science Student
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Deepesh
                <br />
                <span className="text-muted-foreground">Yadav</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-in animation-delay-400">
              A passionate Computer Science student learning MERN stack development and exploring AI tools. Building my
              journey one project at a time, eager to create impactful web applications.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-600">
              {socialLinks.map(({ icon: Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/30"
                >
                  <Icon size={20} className="text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className={`relative ${isVisible ? "animate-scale-in animation-delay-300" : "opacity-0"}`}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-border animate-glow" />
              <div className="absolute inset-4 rounded-full border border-muted" />
              <div className="absolute inset-8 rounded-full border border-secondary" />

              {/* Image container */}
              <div className="absolute inset-12 rounded-full overflow-hidden bg-secondary shadow-2xl shadow-black/50">
                <img
                  src="/deepesh-profile.jpg"
                  alt="Deepesh Yadav - Developer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 animate-fade-in animation-delay-800"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
