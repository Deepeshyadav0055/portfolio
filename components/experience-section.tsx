"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    period: "2024",
    title: "Web Development Intern",
    company: "Oasis Infobyte",
    description:
      "Gained hands-on experience in web development, working on real-world projects and learning industry best practices. Collaborated with the development team to build and maintain web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
]

export function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="py-32 bg-secondary/20 relative">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">Career Path</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Work <span className="text-muted-foreground">Experience</span>
          </h2>
        </div>

        {/* Experience Card - Centered for single item */}
        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.title} className={`${isVisible ? `animate-fade-up animation-delay-200` : "opacity-0"}`}>
              <div className="p-8 rounded-xl bg-card border border-border hover:border-muted-foreground transition-all duration-500 hover:shadow-xl hover:shadow-black/20">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-2 text-sm font-medium rounded-full bg-secondary text-foreground border border-border">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{exp.title}</h3>
                <p className="text-muted-foreground text-lg mt-1">{exp.company}</p>
                <p className="text-muted-foreground mt-6 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
