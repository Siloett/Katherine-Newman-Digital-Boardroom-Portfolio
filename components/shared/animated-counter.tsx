'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCounter } from '@/hooks/use-counter'

interface AnimatedCounterProps {
  prefix: string
  target: number
  suffix: string
}

export function AnimatedCounter({
  prefix,
  target,
  suffix,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCounter(target, 1200, isInView)

  return (
    <span ref={ref} className="font-mono text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
