'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Send, Github, Linkedin, FileDown, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormState('sent')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setFormState('idle'), 4000)
      } else {
        setFormState('error')
        setTimeout(() => setFormState('idle'), 3000)
      }
    } catch {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 3000)
    }
  }

  const contactLinks = [
    { icon: Mail, label: 'Email', value: 'crypterib@gmail.com', href: 'mailto:crypterib@gmail.com', color: '#DC2626' },
    { icon: MapPin, label: 'Location', value: 'Abuja, FCT, Nigeria', href: '#', color: '#1E293B' },
    { icon: Github, label: 'GitHub', value: 'github.com/crypterib', href: 'https://github.com/crypterib', color: '#1E293B' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/crypterib', href: 'https://linkedin.com/in/crypterib', color: '#DC2626' },
  ]

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-14">
          <p className="text-[#DC2626] font-mono text-xs uppercase tracking-widest mb-2">06 — Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
            Get In <span className="accent-gradient">Touch</span>
          </h2>
          <p className="text-[#334155] mt-3 max-w-md text-[15px]">
            Have a project in mind, a security concern, or just want to connect? I&apos;m always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] space-y-5 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#334155] font-medium mb-1.5 block">Your Name</label>
                  <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" required
                    className="bg-[#F8FAFC] border-[#E2E8F0] text-[#1E293B] placeholder:text-[#CBD5E1] focus:border-[#DC2626] focus:ring-[#DC2626]/20 h-11 rounded-xl" />
                </div>
                <div>
                  <label className="text-xs text-[#334155] font-medium mb-1.5 block">Your Email</label>
                  <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" required
                    className="bg-[#F8FAFC] border-[#E2E8F0] text-[#1E293B] placeholder:text-[#CBD5E1] focus:border-[#DC2626] focus:ring-[#DC2626]/20 h-11 rounded-xl" />
                </div>
              </div>
              <div>
                <label className="text-xs text-[#334155] font-medium mb-1.5 block">Subject</label>
                <Input value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Project Inquiry / Security Audit" required
                  className="bg-[#F8FAFC] border-[#E2E8F0] text-[#1E293B] placeholder:text-[#CBD5E1] focus:border-[#DC2626] focus:ring-[#DC2626]/20 h-11 rounded-xl" />
              </div>
              <div>
                <label className="text-xs text-[#334155] font-medium mb-1.5 block">Message</label>
                <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me about your project..." required rows={5}
                  className="bg-[#F8FAFC] border-[#E2E8F0] text-[#1E293B] placeholder:text-[#CBD5E1] focus:border-[#DC2626] focus:ring-[#DC2626]/20 rounded-xl resize-none" />
              </div>
              <Button type="submit" disabled={formState === 'sending' || formState === 'sent'}
                className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold h-12 rounded-xl shadow-lg shadow-[#DC2626]/10">
                {formState === 'idle' && <><Send className="w-4 h-4 mr-2" />Send Message</>}
                {formState === 'sending' && <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</>}
                {formState === 'sent' && <><CheckCircle className="w-4 h-4 mr-2" />Message Sent!</>}
                {formState === 'error' && <>Error — Try Again</>}
              </Button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="lg:col-span-5 space-y-3">
            {contactLinks.map((link, i) => (
              <motion.a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 10 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                className="bg-white rounded-xl p-4 border border-[#E2E8F0] flex items-center gap-4 block card-lift shadow-sm">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${link.color}08` }}>
                  <link.icon className="w-4 h-4" style={{ color: link.color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-[#475569] font-mono uppercase">{link.label}</p>
                  <p className="text-sm text-[#1E293B] truncate font-medium">{link.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm">
              <h4 className="text-sm font-semibold text-[#1E293B] mb-2 flex items-center gap-2">
                <FileDown className="w-4 h-4 text-[#DC2626]" />Download Resume
              </h4>
              <p className="text-xs text-[#334155] mb-3">Get a copy of my resume for detailed information about my experience.</p>
              <Button onClick={() => { const link = document.createElement('a'); link.href = '/api/download-cv'; link.click() }}
                variant="outline" className="w-full border-[#DC2626]/15 text-[#DC2626] hover:bg-[#DC2626]/5 hover:text-[#B91C1C] hover:border-[#DC2626]/25 h-10 rounded-xl bg-transparent">
                <FileDown className="w-4 h-4 mr-2" />Download CV (PDF)
              </Button>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#E2E8F0] flex items-center gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#DC2626] status-pulse" />
              <p className="text-xs text-[#334155]">Typically responds within <span className="text-[#DC2626] font-medium">24 hours</span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
