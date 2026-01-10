"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Mongoose"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MongoDB Atlas", "Firebase", "SQL Basics"],
  },
  {
    category: "Tools & AI",
    items: ["Git & GitHub", "VS Code", "Postman", "ChatGPT", "GitHub Copilot", "Vercel"],
  },
]

export function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="py-32 bg-secondary/20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">What I'm Learning</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & <span className="text-muted-foreground">Technologies</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className={`group ${
                isVisible ? `animate-fade-up animation-delay-${(groupIndex + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className="p-8 rounded-xl bg-card border border-border hover:border-muted-foreground transition-all duration-500 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-2 h-full">
                <h3 className="text-lg font-semibold text-foreground mb-6 pb-4 border-b border-border">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-foreground transition-colors" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
