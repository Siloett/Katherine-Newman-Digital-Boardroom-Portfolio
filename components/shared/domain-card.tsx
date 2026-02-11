'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUpVariants } from '@/lib/animations'
import { ChevronRight } from 'lucide-react'
import type { Domain } from '@/lib/data'

interface DomainCardProps {
  domain: Domain
}

export function DomainCard({ domain }: DomainCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col rounded-lg border border-border bg-card p-6 md:p-8 transition-shadow hover:shadow-lg cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-bold tracking-tight">{domain.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {domain.tagline}
          </p>
        </div>
        <ChevronRight
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 mt-1 ${
            isExpanded ? 'rotate-90' : ''
          }`}
        />
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3 border-t border-border pt-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">
                  Evidence
                </p>
                <ul className="space-y-1">
                  {domain.evidence.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-foreground/80"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  Relevance to SILOETT
                </p>
                <p className="text-sm italic leading-relaxed text-muted-foreground">
                  {domain.relevance}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
