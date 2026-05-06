"use client"

import { FlowLine } from "../ui/Decorations"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <FlowLine thickness="thin" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-xl font-light">
              Math for <span className="velocity-text-gradient">Business Operations</span>
            </h3>
            <p className="text-sm font-light text-secondary-foreground/70">
              Interactive, project-based learning with real-world Excel applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 font-medium text-secondary-foreground">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/student" className="text-secondary-foreground/70 transition-colors hover:text-accent">Student Hub</Link></li>
              <li><Link href="/teacher" className="text-secondary-foreground/70 transition-colors hover:text-accent">Teacher Resources</Link></li>
              <li><Link href="/backmatter/glossary" className="text-secondary-foreground/70 transition-colors hover:text-accent">Glossary</Link></li>
              <li><Link href="/backmatter/index" className="text-secondary-foreground/70 transition-colors hover:text-accent">Index</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-3 font-medium text-secondary-foreground">Connect</h4>
            <a
              href="https://github.com/bodangren/Business-Operations"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-secondary-foreground/70 transition-colors hover:text-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm font-light text-secondary-foreground/60">
          © 2026 Math for Business Operations. Open source educational platform.
        </div>
      </div>
    </footer>
  )
}
