"use client"

import { GoldLine } from "../ui/Decorations"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0A192F] text-[#FAFAFA]">
      <GoldLine thickness="thin" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-3">
              Math for <span className="text-[#C9A227]">Business Operations</span>
            </h3>
            <p className="text-[#A0A0A0] text-sm">
              Interactive, project-based learning with real-world Excel applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-[#FAFAFA] mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/student" className="text-[#A0A0A0] hover:text-[#C9A227] transition-colors">Student Hub</Link></li>
              <li><Link href="/teacher" className="text-[#A0A0A0] hover:text-[#C9A227] transition-colors">Teacher Resources</Link></li>
              <li><Link href="/backmatter/glossary" className="text-[#A0A0A0] hover:text-[#C9A227] transition-colors">Glossary</Link></li>
              <li><Link href="/backmatter/index" className="text-[#A0A0A0] hover:text-[#C9A227] transition-colors">Index</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium text-[#FAFAFA] mb-3">Connect</h4>
            <a
              href="https://github.com/bodangren/Business-Operations"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#C9A227] text-sm transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="border-t border-[#1A2332] pt-6 text-center text-sm text-[#A0A0A0]">
          © 2026 Math for Business Operations. Open source educational platform.
        </div>
      </div>
    </footer>
  )
}
