'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Download, ChevronRight, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid-dark" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#DC2626]/[0.04] blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#DC2626]/[0.03] blur-[100px]" />
      
      {/* Floating geometric elements */}
      <div className="absolute top-32 right-20 w-24 h-24 border border-[#DC2626]/10 rounded-lg rotate-12 animate-float-1 hidden lg:block" />
      <div className="absolute bottom-40 left-16 w-16 h-16 border border-[#F5F5F5]/5 rounded-full animate-float-2 hidden lg:block" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full py-28 sm:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {/* Terminal-style greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2A2A2A]"
            >
              <Terminal className="w-3.5 h-3.5 text-[#DC2626]" />
              <span className="text-xs font-mono text-[#94A3B8]">
                <span className="text-[#DC2626]">$</span> whoami
              </span>
              <span className="w-1.5 h-4 bg-[#DC2626] cursor-blink" />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-3"
            >
              <p className="text-sm font-mono text-[#DC2626] uppercase tracking-[0.3em]">Sunday Frank Ochigbo</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                <span className="text-[#F1F5F9]">IT Support</span>
                <span className="accent-gradient"> Specialist</span>
                <br />
                <span className="text-[#F1F5F9]">Cyber</span>
                <span className="accent-gradient"> Security</span>
                <br />
                <span className="text-[#64748B]">Analyst &</span>
                <span className="text-[#F1F5F9]"> Blockchain</span>
                <span className="accent-gradient"> Dev</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-[#94A3B8] leading-relaxed max-w-lg text-[15px] mx-auto lg:mx-0">
                Building secure systems at the intersection of cybersecurity, blockchain technology, 
                and intelligent software — from smart contract auditing to algorithmic trading.
              </p>

              {/* Quick stats row */}
              <div className="flex items-center justify-center lg:justify-start gap-6 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] status-pulse" />
                  <span className="text-[#DC2626]">Open to Opportunities</span>
                </div>
                <span className="text-[#334155]">|</span>
                <span className="text-[#94A3B8]">Abuja, Nigeria</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold h-12 px-7 rounded-lg shadow-xl shadow-[#DC2626]/20 hover:shadow-[#DC2626]/30 transition-all group"
              >
                Get In Touch
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/api/download-cv'
                  link.click()
                }}
                className="h-12 px-6 rounded-lg border-[#2A2A2A] bg-[#1A1A1A] text-[#F1F5F9] hover:bg-[#2A2A2A] hover:border-[#DC2626]/30"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <div className="flex items-center gap-1 ml-1">
                <a href="https://github.com/crypterib" target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#1A1A1A] transition-all">
                  <Github className="w-[18px] h-[18px]" />
                </a>
                <a href="https://linkedin.com/in/crypterib" target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-[#94A3B8] hover:text-[#DC2626] hover:bg-[#1A1A1A] transition-all">
                  <Linkedin className="w-[18px] h-[18px]" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            {/* Red accent ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#DC2626] via-[#991B1B] to-[#DC2626]/20 opacity-40 blur-sm" />
            
            {/* Image container */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-[360px] rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#2A2A2A]">
              <Image src="/frank.jpg" alt="Sunday Frank Ochigbo" fill className="object-cover" priority />
              
              {/* Bottom gradient overlay for name */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white font-bold text-lg leading-tight">Frank Ochigbo</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[11px] text-[#F87171] font-mono">B.Sc. Cyber Security</span>
                  <span className="text-[#475569]">•</span>
                  <span className="text-[11px] text-[#94A3B8] font-mono">CGPA 4.34</span>
                </div>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#DC2626]/30 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#DC2626]/30 rounded-bl-lg" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-1.5">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#475569]">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#DC2626]/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
