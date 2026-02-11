'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUpVariants } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  background?: 'default' | 'navy' | 'muted'
}

export function SectionWrapper({
  id,
  children,
  className,
  background = 'default',
}: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion()

  const bgClasses = {
    default: 'bg-background',
    navy: 'bg-primary text-primary-foreground',
    muted: 'bg-muted',
  }

  return (
    <motion.section
      id={id}
      initial={shouldReduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={shouldReduceMotion ? {} : fadeUpVariants}
      className={cn(
        'py-24 md:py-32',
        bgClasses[background],
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">{children}</div>
    </motion.section>
  )
}
