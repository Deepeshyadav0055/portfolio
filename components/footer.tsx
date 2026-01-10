import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Deepeshyadav0055", label: "GitHub", external: true },
    { icon: Linkedin, href: "https://www.linkedin.com/in/deepesh-yadav-3a6a54346", label: "LinkedIn", external: true },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo - updated to DY for Deepesh Yadav */}
          <a href="#" className="text-xl font-bold text-foreground tracking-tight">
            DY<span className="text-muted-foreground">.</span>
          </a>

          {/* Copyright - updated name */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Deepesh Yadav. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
