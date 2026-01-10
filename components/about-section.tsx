"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className={`relative ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-border/50 rounded-lg transform -rotate-3" />
              <div className="absolute -inset-4 bg-secondary/50 rounded-lg transform rotate-3" />
              <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                <img
                  src="/coding-workspace-laptop-dark-minimal-aesthetic.jpg"
                  alt="Workspace"
                  className="w-full h-[500px] object-cover grayscale"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"}`}>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm tracking-widest uppercase">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Learning &
                <br />
                <span className="text-muted-foreground">Growing</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm Deepesh Yadav, a Computer Science student with a deep passion for web development. Currently diving
                into the MERN stack ecosystem, I'm building my foundation in MongoDB, Express.js, React, and Node.js to
                create full-stack applications.
              </p>
              <p>
                Beyond traditional development, I'm exploring AI tools and how they can enhance the development
                workflow. I believe in continuous learning and staying updated with the latest technologies to build
                innovative solutions.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { value: "MERN", label: "Stack Learning" },
                { value: "AI", label: "Tools Explorer" },
                { value: "1", label: "Internship" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center ${
                    isVisible ? `animate-fade-up animation-delay-${(index + 4) * 100}` : "opacity-0"
                  }`}
                >
                  <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
