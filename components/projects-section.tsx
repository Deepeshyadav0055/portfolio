"use client"

import { useEffect, useRef, useState } from "react"
import { Rocket } from "lucide-react"

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured <span className="text-muted-foreground">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className={`${isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"}`}>
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border p-16 text-center">
            {/* Decorative background elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-muted/10 rounded-full blur-2xl" />

            <div className="relative z-10 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-secondary/50 border border-border flex items-center justify-center animate-pulse">
                <Rocket size={36} className="text-muted-foreground" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Coming Soon</h3>

              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                Exciting projects are currently in development. Stay tuned for innovative MERN stack applications and
                creative solutions.
              </p>

              <div className="flex justify-center gap-2 pt-4">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
