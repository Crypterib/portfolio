'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileSearch, GraduationCap, Link2, ShieldAlert, BarChart3, Package } from 'lucide-react'

const researchItems = [
  {
    title: 'Implementing Blockchain for Certificate Issuance and Authentication in Nigerian Universities',
    type: 'B.Sc. Thesis',
    description: 'A comprehensive research project implementing blockchain technology to revolutionize certificate management in Nigerian universities. The platform issues immutable digital certificates stored on-chain, enabling instant verification and eliminating certificate fraud.',
    icon: Link2,
    color: '#DC2626',
    tags: ['Blockchain', 'Certificate Authentication', 'Smart Contracts', 'Nigerian Universities'],
    highlights: [
      'Designed immutable certificate issuance platform using blockchain',
      'Eliminated paper-based fraud in academic certification',
      'Reduced administrative workloads for certificate verification',
      'Full-range testing for scalability and reliability',
    ],
    institution: 'Air Force Institute of Technology, Kaduna',
  },
  {
    title: 'Cost-Effective Framework for Smart Contract Vulnerability Detection',
    type: 'Security Research',
    description: 'A comprehensive research framework comparing static and dynamic analysis tools for automated detection of vulnerabilities in Solidity smart contracts. Evaluates Slither, Mythril, Securify, and SmartCheck with performance benchmarks.',
    icon: FileSearch,
    color: '#1E293B',
    tags: ['Smart Contracts', 'Solidity', 'Static Analysis', 'Security Auditing'],
    highlights: [
      'Vulnerable & secure contract datasets created for evaluation',
      'Performance comparison across multiple security tools',
      'Novel cost-effectiveness methodology proposed',
      'Automated vulnerability detection pipeline',
    ],
    institution: 'Air Force Institute of Technology, Kaduna',
  },
  {
    title: 'The Impact of Cyberwarfare on War and Privacy of Deprived Nation-States',
    type: 'Research Paper',
    description: 'An examination of how cyberwarfare shapes international conflicts and threatens the privacy of nation-states, focusing on notable incidents such as the Stuxnet attack, the 2016 U.S. election interference, and the OPM data breach between 2015–2025.',
    icon: ShieldAlert,
    color: '#DC2626',
    tags: ['Cyberwarfare', 'Privacy Rights', 'International Security', 'Legal Frameworks'],
    highlights: [
      'Qualitative case study of major cyber incidents (2015–2025)',
      'Analysis of privacy erosion amid strategic cyber operations',
      'Evaluation of legal frameworks for cyber threats',
      'Proposals for stronger international cooperation',
    ],
    institution: null,
  },
  {
    title: 'Design and Implementation of a Sentiment Analysis Dashboard for Trend Monitoring and Opinion Mining',
    type: 'Research Paper',
    description: 'The design and implementation of a web-based platform for collecting, analyzing, and visualizing public sentiment from Twitter, integrating NLP and machine learning for real-time classification using the Twitter API v2 and Sentiment140 dataset.',
    icon: BarChart3,
    color: '#1E293B',
    tags: ['Sentiment Analysis', 'NLP', 'Machine Learning', 'Twitter API v2'],
    highlights: [
      'Real-time tweet sentiment classification (positive/negative/neutral)',
      'Logistic Regression model trained on 1.6M labeled tweets',
      'Interactive dashboards with word clouds and charts',
      'PDF report generation for decision-making',
    ],
    institution: null,
  },
  {
    title: 'Design and Implementation of Assets Management System (Kite Assets)',
    type: 'Research Paper',
    description: 'The design and implementation of a secure, lightweight, multi-tenant Asset Management System (Kite Assets) for improving accountability and efficiency in organizations, featuring RBAC, QR code integration, and automated asset lifecycle management.',
    icon: Package,
    color: '#DC2626',
    tags: ['Asset Management', 'RBAC', 'QR Code', 'Multi-tenant Architecture'],
    highlights: [
      'Multi-tenant architecture with role-based access control',
      'QR code integration for asset verification',
      'Automated asset lifecycle management',
      'Bridging the gap between manual and enterprise solutions',
    ],
    institution: null,
  },
]

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="research" className="py-24 sm:py-32 bg-[#F1F5F9]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-14">
          <p className="text-[#DC2626] font-mono text-xs uppercase tracking-widest mb-2">05 — Research</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
            Academic <span className="accent-gradient">Pursuits</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {researchItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] card-lift shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-5">
                <div className="flex items-start gap-4 flex-grow">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}08` }}>
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold" style={{ backgroundColor: `${item.color}08`, color: item.color }}>
                        {item.type}
                      </span>
                      {item.institution && (
                        <span className="text-[11px] text-[#475569] flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />{item.institution}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-[#1E293B] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#334155] leading-relaxed mb-4">{item.description}</p>

                    <ul className="space-y-1.5 mb-4">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-[#334155]">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-[#F8FAFC] text-[10px] font-mono border border-[#E2E8F0]" style={{ color: item.color }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="mt-14">
          <h3 className="text-lg font-semibold text-[#1E293B] mb-5 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#DC2626]" />Education
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] card-lift shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#DC2626]/8 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4 text-[#DC2626]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1E293B]">M.Sc. Communication Information Systems</h4>
                  <p className="text-xs text-[#DC2626] mt-0.5">Air Force Institute of Technology</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#DC2626]/8 text-[#DC2626] border border-[#DC2626]/10">In Progress</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] card-lift shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E293B]/8 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4 text-[#1E293B]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1E293B]">B.Sc. Cyber Security</h4>
                  <p className="text-xs text-[#1E293B] mt-0.5">Air Force Institute of Technology — CGPA: 4.34</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#DC2626]/8 text-[#DC2626] border border-[#DC2626]/10">Graduated Oct 2024</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
