import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Math for Business Operations</h3>
            <p className="text-sm text-muted-foreground">
              An interactive textbook for Grade 12 business mathematics
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Daniel Bodanske. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-medium">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/frontmatter/preface" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Getting Started
              </Link>
              <Link 
                href="/backmatter/glossary" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Glossary
              </Link>
              <Link 
                href="/search" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Search
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="text-base font-medium">Support</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Questions about the textbook?
              </p>
              <p className="text-sm text-muted-foreground">
                Contact your instructor or refer to the help section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}