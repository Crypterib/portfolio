'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Code2, Globe, Bot, Wrench, Lock } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ElementType
  color: string
  skills: { name: string; level: number }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Cybersecurity',
    icon: Shield,
    color: '#DC2626',
    skills: [
      { name: 'Penetration Testing', level: 90 },
      { name: 'Vulnerability Assessment', level: 85 },
      { name: 'DLP Implementation', level: 80 },
      { name: 'Wireshark', level: 85 },
      { name: 'Nmap & Nessus', level: 85 },
      { name: 'Security Auditing', level: 80 },
    ],
  },
  {
    title: 'Blockchain & Web3',
    icon: Lock,
    color: '#1E293B',
    skills: [
      { name: 'Smart Contract Security', level: 90 },
      { name: 'Solidity', level: 85 },
      { name: 'DApp Development', level: 75 },
      { name: 'DeFi Protocols', level: 70 },
      { name: 'Polygon / BSC', level: 70 },
    ],
  },
  {
    title: 'Programming',
    icon: Code2,
    color: '#DC2626',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'Solidity', level: 80 },
      { name: 'MQL5', level: 88 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: '#1E293B',
    skills: [
      { name: 'React / Next.js', level: 82 },
      { name: 'Flask', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Prisma ORM', level: 75 },
      { name: 'PostgreSQL / MySQL', level: 80 },
    ],
  },
  {
    title: 'Trading & Quant',
    icon: Bot,
    color: '#DC2626',
    skills: [
      { name: 'MQL5 Expert Advisors', level: 90 },
      { name: 'MetaTrader 5 API', level: 88 },
      { name: 'Reinforcement Learning', level: 72 },
      { name: 'Backtesting', level: 85 },
      { name: 'Risk Management', level: 82 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: '#1E293B',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Linux', level: 85 },
      { name: 'Power BI', level: 75 },
      { name: 'Railway / Vercel', level: 80 },
      { name: 'Pentera', level: 78 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-14">
          <p className="text-[#DC2626] font-mono text-xs uppercase tracking-widest mb-2">04 — Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
            Technical <span className="accent-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] card-lift shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${category.color}08` }}>
                  <category.icon className="w-4.5 h-4.5" style={{ color: category.color }} />
                </div>
                <h3 className="text-sm font-semibold text-[#1E293B]">{category.title}</h3>
              </div>

              <div className="space-y-3.5">
                {category.skills.map((skill, j) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[13px] text-[#334155]">{skill.name}</span>
                      <span className="text-[10px] text-[#475569] font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#F1F5F9] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.3 + j * 0.04, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
