import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/brandonbk", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/brandonbk", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:brandon@example.com", icon: Mail, label: "Email" },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-narrow section-padding">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-accent-foreground text-lg">B</span>
              </div>
              <span className="font-display font-semibold text-foreground">Brandon Kisibu</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cross-Platform Software Engineer → Data & AI Engineering. Always following the flow of data.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Brandon Kisibu. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Adaptable • System-Focused • Growth-Oriented
          </p>
        </div>
      </div>
    </footer>
  );
}
