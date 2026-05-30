'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin, Award, Briefcase } from 'lucide-react'

const stats = [
  { label: 'CGPA', value: '4.34', icon: Award, desc: 'B.Sc. Cyber Security' },
  { label: 'Projects', value: '10+', icon: Briefcase, desc: 'Built & Deployed' },
  { label: 'Research', value: '5', icon: GraduationCap, desc: 'Research Projects' },
  { label: 'Languages', value: '4', icon: MapPin, desc: 'English, Hausa, Idoma, Igede' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F1F5F9]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-14">
          <p className="text-[#DC2626] font-mono text-xs uppercase tracking-widest mb-2">01 — About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
            Who I <span className="accent-gradient">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }} className="lg:col-span-7 space-y-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
              <p className="text-[#334155] leading-[1.85] text-[15px]">
                I&apos;m <span className="text-[#1E293B] font-semibold">Sunday Frank Ochigbo</span> — a cybersecurity analyst and 
                software developer with a deep academic and practical foundation in cybersecurity. Holding a{' '}
                <span className="text-[#DC2626] font-medium">B.Sc. in Cyber Security</span> from the{' '}
                <span className="text-[#1E293B] font-medium">Air Force Institute of Technology</span> (CGPA: 4.34) and currently 
                pursuing an <span className="text-[#DC2626] font-medium">M.Sc. in Communication Information Systems</span>, my work 
                bridges secure systems architecture, full-stack development, and decentralized technologies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
              <p className="text-[#334155] leading-[1.85] text-[15px]">
                I specialize in building high-performance applications — from Web3 security dashboards and automated trading 
                infrastructure to AI-driven reconnaissance systems. My experience spans penetration testing at NNPCL with 
                Pentera, co-implementing Data Loss Prevention solutions in critical national infrastructure, and developing 
                algorithmic trading bots for the financial markets.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Cybersecurity', 'Smart Contract Security', 'Algorithmic Trading', 'Full-Stack Dev', 'Blockchain Research'].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-white text-[#DC2626] text-xs font-medium border border-[#E2E8F0]">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                  className="bg-white rounded-xl p-4 border border-[#E2E8F0] text-center card-lift shadow-sm">
                  <stat.icon className="w-5 h-5 text-[#DC2626] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#1E293B]">{stat.value}</p>
                  <p className="text-[10px] text-[#64748B] font-mono uppercase tracking-wide mt-0.5">{stat.label}</p>
                  <p className="text-[10px] text-[#475569] mt-0.5">{stat.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xs font-semibold text-[#1E293B] uppercase tracking-wide mb-3">Key Highlights</h3>
              <ul className="space-y-2.5">
                {[
                  'Penetration Testing with Pentera at NNPCL',
                  'Co-implemented DLP Solution in National Infrastructure',
                  'Smart Contract Vulnerability Detection Research',
                  '5+ Algorithmic Trading Bots (MQL5 & Python)',
                  'Former CFO, Cybersecurity Education Awareness Network',
                ].map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-[#334155]">
                    <span className="text-[#DC2626] mt-0.5 text-xs">●</span>{h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <div className="flex-1 bg-white rounded-xl p-4 border border-[#E2E8F0] flex items-center gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#DC2626]/8 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#DC2626]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#475569] font-mono uppercase">Location</p>
                  <p className="text-xs text-[#1E293B] font-medium">Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex-1 bg-white rounded-xl p-4 border border-[#E2E8F0] flex items-center gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#DC2626]/8 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4 text-[#DC2626]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#475569] font-mono uppercase">Degree</p>
                  <p className="text-xs text-[#1E293B] font-medium">B.Sc. + M.Sc.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
