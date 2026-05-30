'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Monitor, Users, Calendar, Building2, Keyboard } from 'lucide-react'

const experiences = [
  {
    title: 'IT Support Personnel',
    org: 'Infrastructure Concession Regulatory Commission (ICRC)',
    location: 'Abuja, Nigeria',
    period: '2024 – Present',
    tag: 'NYSC',
    icon: Monitor,
    color: '#DC2626',
    highlights: [
      'Providing IT support and infrastructure management for government operations',
      'Systems administration and user support across the commission',
      'Government IT operations and regulatory technology infrastructure',
    ],
  },
  {
    title: 'Information Security Intern',
    org: 'Nigerian National Petroleum Company Limited (NNPCL)',
    location: 'Nigeria',
    period: '2023 – 2024',
    tag: 'SIWES',
    icon: Shield,
    color: '#1E293B',
    highlights: [
      'Conducted penetration testing using Pentera — industry-grade automated security validation',
      'Co-implemented a Data Loss Prevention (DLP) solution in critical national infrastructure',
      'Security operations and vulnerability assessment in the Information Security department',
      'Protecting critical energy infrastructure from cyber threats',
    ],
  },
  {
    title: 'Chief Financial Officer (CFO)',
    org: 'Cybersecurity Education Awareness Network (CEANet)',
    location: 'Nigeria',
    period: '2023 – 2024',
    tag: 'Leadership',
    icon: Users,
    color: '#DC2626',
    highlights: [
      'Managed financial operations and budget planning for the cybersecurity organization',
      'Developed cybersecurity awareness initiatives and awareness month themes',
      'Community education on cybersecurity best practices',
    ],
  },
  {
    title: 'Data Entry Person',
    org: 'Overcomers Telecom',
    location: 'Nigeria',
    period: '2022 – 2023',
    tag: 'Employment',
    icon: Keyboard,
    color: '#64748B',
    highlights: [
      'Accurate and efficient data entry and record management',
      'Maintaining databases and ensuring data integrity',
      'Supporting daily operations with administrative and clerical tasks',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-14">
          <p className="text-[#DC2626] font-mono text-xs uppercase tracking-widest mb-2">02 — Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
            Where I&apos;ve <span className="accent-gradient">Worked</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.org}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] card-lift shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${exp.color}0A` }}>
                    <exp.icon className="w-5 h-5" style={{ color: exp.color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1E293B]">{exp.title}</h3>
                    <p className="text-sm font-medium" style={{ color: exp.color }}>{exp.org}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold border" style={{ backgroundColor: `${exp.color}08`, color: exp.color, borderColor: `${exp.color}15` }}>
                    {exp.tag}
                  </span>
                  <span className="text-xs text-[#475569] font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3" />{exp.period}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mb-4">
                <Building2 className="w-3 h-3 text-[#94A3B8]" />
                <span className="text-xs text-[#475569]">{exp.location}</span>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-[#334155]">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
