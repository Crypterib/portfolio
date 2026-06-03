'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#research', label: 'Research' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = navLinks.map(link => link.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const el = document.getElementById(href.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // When on hero (dark section), nav text should be light; once scrolled past, switch to dark
  const isDark = !isScrolled

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-2xl border-b border-[#E2E8F0] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollToSection('#home')} className="flex items-center gap-2.5 group">
              <img src="/logo.png" alt="Frank" className="w-8 h-8 rounded-lg shadow-lg shadow-[#DC2626]/20" />
              <span className={`text-[15px] font-bold tracking-tight hidden sm:block transition-colors ${
                isDark ? 'text-white' : 'text-[#111111]'
              }`}>
                Frank<span className="text-[#DC2626]">.</span>dev
              </span>
            </button>

            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#DC2626]'
                      : isDark ? 'text-[#94A3B8] hover:text-white' : 'text-[#64748B] hover:text-[#111111]'
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute inset-0 rounded-lg ${
                        isDark ? 'bg-[#DC2626]/10' : 'bg-[#DC2626]/6'
                      }`}
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection('#contact')}
              className="hidden md:inline-flex bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[13px] font-bold h-9 px-5 rounded-lg shadow-lg shadow-[#DC2626]/15"
            >
              Let&apos;s Talk
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isDark ? 'text-[#94A3B8] hover:text-white' : 'text-[#64748B] hover:text-[#111111]'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] p-5">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button key={link.href} onClick={() => scrollToSection(link.href)}
                    className={`text-left px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                      activeSection === link.href.slice(1) ? 'text-[#DC2626] bg-[#DC2626]/6' : 'text-[#111111] hover:bg-[#F1F5F9]'
                    }`}>
                    {link.label}
                  </button>
                ))}
                <Button onClick={() => scrollToSection('#contact')} className="mt-3 w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white h-11 rounded-xl font-bold">
                  Let&apos;s Talk
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
