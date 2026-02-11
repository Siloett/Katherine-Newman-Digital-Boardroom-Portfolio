'use client'

import { motion } from 'framer-motion'
import { fadeUpVariants } from '@/lib/animations'
import { AnimatedCounter } from './animated-counter'
import type { Metric } from '@/lib/data'
import { Trophy } from 'lucide-react'

interface MetricCardProps {
  metric: Metric
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-lg border border-border bg-card p-6 md:p-8 transition-shadow hover:shadow-lg"
    >
      <div className="mb-2">
        {metric.isAward ? (
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6 text-secondary" />
            <span className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
              {metric.value}
            </span>
          </div>
        ) : (
          <AnimatedCounter
            prefix={metric.prefix}
            target={metric.numericValue}
            suffix={metric.suffix}
          />
        )}
      </div>
      <p className="text-sm font-medium text-muted-foreground">
        {metric.label}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden transition-all">
        {metric.context}
      </p>
    </motion.div>
  )
}
