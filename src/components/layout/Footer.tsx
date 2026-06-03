'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111111] border-t border-[#222222] py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Frank" className="w-7 h-7 rounded-lg" />
            <span className="text-sm text-[#777777]">
              &copy; {currentYear} Sunday Frank Ochigbo
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/crypterib" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[#1A1A1A] transition-colors text-[#777777] hover:text-white">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/crypterib" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[#1A1A1A] transition-colors text-[#777777] hover:text-[#DC2626]">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:crypterib@gmail.com"
              className="p-2 rounded-lg hover:bg-[#1A1A1A] transition-colors text-[#777777] hover:text-[#DC2626]">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
