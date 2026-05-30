'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Shield, Bot, Code2, Globe, FileCheck, TrendingUp,
  Lock, Leaf, Package, MessageSquare
} from 'lucide-react'

type ProjectCategory = 'all' | 'blockchain' | 'trading' | 'cybersecurity' | 'fullstack'

interface Project {
  title: string
  subtitle: string
  description: string
  category: ProjectCategory[]
  techStack: string[]
  highlights: string[]
  icon: React.ElementType
  color: string
  status: string
}

const projects: Project[] = [
  {
    title: 'Smart Contract Analyzer',
    subtitle: 'Automated Vulnerability Scanner',
    description: 'A web-based platform for analyzing Solidity smart contracts using static analysis tools — Slither, Surya, and Ethlint — to detect vulnerabilities and generate security reports.',
    category: ['blockchain', 'cybersecurity'],
    techStack: ['Python', 'Flask', 'Slither', 'Surya', 'Ethlint', 'Solidity'],
    highlights: [
      'Automated multi-tool vulnerability scanning',
      'Solidity file upload & source code paste',
      'Comprehensive security report generation',
      'Static analysis with Slither, Surya & Ethlint',
    ],
    icon: Shield,
    color: '#DC2626',
    status: 'Completed',
  },
  {
    title: 'Kite Assets',
    subtitle: 'Asset Management System',
    description: 'A secure, lightweight, multi-tenant Asset Management System designed to improve accountability and efficiency in organizations. Features QR code integration, role-based access control, and automated asset lifecycle management.',
    category: ['fullstack'],
    techStack: ['Next.js', 'TypeScript', 'Prisma ORM', 'Tailwind CSS', 'PostgreSQL'],
    highlights: [
      'Multi-tenant architecture with RBAC',
      'QR code integration for asset verification',
      'Automated asset lifecycle management',
      'Scalable reporting with CSV export',
    ],
    icon: Package,
    color: '#1E293B',
    status: 'Completed',
  },
  {
    title: 'TweetMood Sentiment Analyzer',
    subtitle: 'Real-time Sentiment Dashboard',
    description: 'A web-based sentiment analysis dashboard for trend monitoring and opinion mining, integrating NLP and machine learning to classify tweets in real time using the Twitter API v2.',
    category: ['fullstack'],
    techStack: ['Next.js', 'FastAPI', 'Python', 'Twitter API v2', 'TF-IDF', 'Logistic Regression'],
    highlights: [
      'Real-time tweet collection via Twitter API v2',
      'NLP-powered sentiment classification',
      'Interactive dashboards with word clouds',
      'Downloadable PDF sentiment reports',
    ],
    icon: MessageSquare,
    color: '#DC2626',
    status: 'Completed',
  },
  {
    title: 'Project Nami',
    subtitle: 'Web3 Intelligence Dashboard',
    description: 'A Web3 intelligence dashboard engineered for hackathon environments, utilizing the GoldRush API to aggregate on-chain data for real-time transaction tracking and security monitoring.',
    category: ['blockchain', 'fullstack'],
    techStack: ['Next.js', 'Node.js', 'GoldRush API', 'Polygon'],
    highlights: [
      'Real-time on-chain intelligence',
      'Transaction tracking & monitoring',
      'Hackathon-grade production build',
      'Multi-chain data aggregation',
    ],
    icon: Globe,
    color: '#1E293B',
    status: 'Hackathon',
  },
  {
    title: 'PayShield',
    subtitle: 'Blockchain Payment Security',
    description: 'A blockchain security dashboard focused on payment verification and risk assessment, built to secure decentralized payment flows and mitigate transaction vulnerabilities.',
    category: ['blockchain', 'cybersecurity'],
    techStack: ['Next.js', 'Node.js', 'BSC', 'Smart Contracts'],
    highlights: [
      'Payment security verification',
      'Transaction risk assessment',
      'Decentralized payment flow analysis',
      'BSC network integration',
    ],
    icon: Lock,
    color: '#DC2626',
    status: 'Hackathon',
  },
  {
    title: 'Fragger — XAUUSD Breakout Bot',
    subtitle: 'Algorithmic Trading System',
    description: 'A sophisticated MQL5 breakout trading bot with OCO logic, equity-based position sizing, trailing stop management, and advanced race condition handling. Deployed on Fusion Markets.',
    category: ['trading'],
    techStack: ['MQL5', 'MetaTrader 5', 'Fusion Markets'],
    highlights: [
      'Daily breakout straddle strategy',
      'Dual-fill OCO race condition failsafe',
      'Retry-hardened order cancellation',
      'Reverse-engineered Akali bot logic',
    ],
    icon: TrendingUp,
    color: '#1E293B',
    status: 'Live',
  },
  {
    title: 'RL Trading Bot (PPO Agent)',
    subtitle: 'Reinforcement Learning Trading',
    description: 'A reinforcement learning trading bot using Stable-Baselines3 PPO agent, integrated with MetaTrader 5 via ZeroMQ bridge for automated XAUUSD trading.',
    category: ['trading'],
    techStack: ['Python', 'Stable-Baselines3', 'ZeroMQ', 'MT5 API'],
    highlights: [
      'PPO reinforcement learning model',
      'ZeroMQ-MT5 bridge integration',
      'Adaptive market strategy learning',
      'XAUUSD market training pipeline',
    ],
    icon: Bot,
    color: '#DC2626',
    status: 'Research',
  },
  {
    title: 'SASP — Student Assignment Portal',
    subtitle: 'Academic Management System',
    description: 'A full-stack assignment submission and grading portal — B.Sc. final year project for Nasarawa State University — featuring student, lecturer, and admin portals.',
    category: ['fullstack'],
    techStack: ['Flask', 'MySQL', 'JavaScript', 'HTML/CSS'],
    highlights: [
      'Student registration & file upload',
      'Lecturer grading & submission review',
      'Admin portal with user management',
      'PDF report export & course selection',
    ],
    icon: FileCheck,
    color: '#1E293B',
    status: 'Completed',
  },
  {
    title: 'Zurichtech',
    subtitle: 'Web Design & Development',
    description: 'Professional website built for Zurichtech — a modern web presence showcasing technology services with responsive design, clean UI, and optimized performance.',
    category: ['fullstack'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'Modern responsive web design',
      'Professional service showcase',
      'Performance-optimized build',
      'Clean, accessible UI/UX',
    ],
    icon: Globe,
    color: '#DC2626',
    status: 'Deployed',
  },
  {
    title: 'Project AURA',
    subtitle: 'Autonomous Agricultural Recon',
    description: 'An advanced proposal-stage project designing an autonomous drone-based agricultural reconnaissance system for pest and rodent control in large-scale farming.',
    category: ['fullstack', 'cybersecurity'],
    techStack: ['Python', 'Computer Vision', 'Autonomous Systems'],
    highlights: [
      'Autonomous drone architecture',
      'Computer vision integration',
      'Pest detection & control',
      'Public sector applications',
    ],
    icon: Leaf,
    color: '#DC2626',
    status: 'Proposal',
  },
]

const categoryFilters: { key: ProjectCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'blockchain', label: 'Blockchain' },
  { key: 'trading', label: 'Trading' },
  { key: 'cybersecurity', label: 'Security' },
  { key: 'fullstack', label: 'Full Stack' },
]

const statusStyles: Record<string, { bg: string; text: string }> = {
  Live: { bg: '#DC262608', text: '#DC2626' },
  Deployed: { bg: '#1E293B08', text: '#1E293B' },
  Research: { bg: '#DC262608', text: '#DC2626' },
  Hackathon: { bg: '#1E293B08', text: '#1E293B' },
  Completed: { bg: '#DC262608', text: '#DC2626' },
  Active: { bg: '#1E293B08', text: '#1E293B' },
  Proposal: { bg: '#64748B08', text: '#64748B' },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter))

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#F1F5F9]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-10">
          <p className="text-[#DC2626] font-mono text-xs uppercase tracking-widest mb-2">03 — Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
            What I&apos;ve <span className="accent-gradient">Built</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap items-center gap-2 mb-8">
          {categoryFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
                activeFilter === filter.key
                  ? 'bg-[#DC2626] text-white shadow-lg shadow-[#DC2626]/10'
                  : 'bg-white text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#1E293B] border border-[#E2E8F0]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, i) => {
            const statusStyle = statusStyles[project.status] || statusStyles.Proposal
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                layout
                className="bg-white rounded-2xl p-5 border border-[#E2E8F0] card-lift flex flex-col shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${project.color}08` }}>
                    <project.icon className="w-5 h-5" style={{ color: project.color }} />
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold" style={{ backgroundColor: statusStyle.bg, color: statusStyle.text }}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-[15px] font-semibold text-[#1E293B] mb-0.5">{project.title}</h3>
                <p className="text-xs font-medium mb-2.5" style={{ color: project.color }}>{project.subtitle}</p>
                <p className="text-sm text-[#334155] leading-relaxed mb-3 line-clamp-2 flex-grow">{project.description}</p>

                <ul className="space-y-1 mb-3">
                  {project.highlights.slice(0, 3).map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#475569]">
                      <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#F1F5F9]">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded-md bg-[#F8FAFC] text-[10px] font-mono text-[#475569] border border-[#E2E8F0]">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
