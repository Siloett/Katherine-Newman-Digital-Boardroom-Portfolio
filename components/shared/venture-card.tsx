'use client'

import { motion } from 'framer-motion'
import { fadeUpVariants } from '@/lib/animations'
import { Badge } from '@/components/ui/badge'
import type { Venture } from '@/lib/data'

interface VentureCardProps {
  venture: Venture
}

export function VentureCard({ venture }: VentureCardProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative flex h-full flex-col rounded-lg border bg-card p-6 md:p-8 transition-shadow hover:shadow-lg ${
        venture.isCurrent ? 'border-secondary/50' : 'border-border'
      }`}
    >
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-xl font-bold tracking-tight md:text-2xl">
          {venture.title}
        </h3>
        {venture.status && (
          <Badge
            variant={venture.isCurrent ? 'default' : 'secondary'}
            className={
              venture.isCurrent
                ? 'bg-secondary text-secondary-foreground'
                : ''
            }
          >
            {venture.status}
          </Badge>
        )}
      </div>

      <p className="mb-6 text-sm italic text-muted-foreground">
        {venture.subtitle}
      </p>

      <div className="flex-1 space-y-4">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-secondary">
            Challenge
          </p>
          <p className="text-sm leading-relaxed text-foreground/80">
            {venture.challenge}
          </p>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-secondary">
            Insight
          </p>
          <p className="text-sm leading-relaxed text-foreground/80">
            {venture.insight}
          </p>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-secondary">
            Action
          </p>
          <p className="text-sm leading-relaxed text-foreground/80">
            {venture.action}
          </p>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-secondary">
            Outcome
          </p>
          <p className="text-sm leading-relaxed text-foreground/80">
            {venture.outcome}
          </p>
        </div>
      </div>

      {venture.signal && (
        <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
          {venture.signal}
        </p>
      )}
    </motion.div>
  )
}
