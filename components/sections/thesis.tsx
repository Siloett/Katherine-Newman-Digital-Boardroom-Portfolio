'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { thesisData } from '@/lib/data'
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations'
import { AlertTriangle, Lightbulb, Rocket } from 'lucide-react'

const panels = [
  {
    icon: AlertTriangle,
    data: thesisData.problem,
    iconColor: 'text-red-400',
  },
  {
    icon: Lightbulb,
    data: thesisData.insight,
    iconColor: 'text-secondary',
  },
  {
    icon: Rocket,
    data: thesisData.solution,
    iconColor: 'text-accent',
  },
]

export function Thesis() {
  return (
    <SectionWrapper id="thesis">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerVariants}
      >
        <motion.div variants={fadeUpVariants} className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {thesisData.sectionTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Why this. Why now. Why Katherine.
          </p>
        </motion.div>

        {/* Triptych */}
        <div className="grid gap-8 md:grid-cols-3">
          {panels.map(({ icon: Icon, data, iconColor }) => (
            <motion.div
              key={data.title}
              variants={fadeUpVariants}
              className="rounded-lg border border-border bg-card p-6 md:p-8"
            >
              <Icon className={`h-8 w-8 ${iconColor} mb-4`} />
              <h3 className="mb-3 text-xl font-bold">{data.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                {data.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founder-Market Fit Statement */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-16 rounded-lg border-l-4 border-secondary bg-muted p-8 md:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
            Founder-Market Fit
          </p>
          <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
            {thesisData.founderMarketFit}
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
