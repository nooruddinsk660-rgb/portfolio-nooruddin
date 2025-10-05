"use client"

import { Github, Linkedin, Mail } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nooruddin@example.com", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#ff4b2b]/20" style={{ background: "#0a0a0f" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Nooruddin<span className="text-[#ff4b2b]">.</span>
            </h3>
            <p className="text-[#a0a0a0]">
              Aspiring Full Stack Developer passionate about creating modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#a0a0a0] hover:text-[#ff4b2b] transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#13131a] rounded-lg border border-[#ff4b2b]/20 hover:border-[#ff4b2b] hover:bg-[#ff4b2b]/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-[#ff4b2b]" size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#ff4b2b]/20 text-center">
          <p className="text-[#a0a0a0]">© 2025 Sk Nooruddin. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
