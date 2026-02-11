'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { VentureCard } from '@/components/shared/venture-card'
import { ventures } from '@/lib/data'
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations'

export function Ventures() {
  return (
    <SectionWrapper id="ventures">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainerVariants}
      >
        <motion.div variants={fadeUpVariants} className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Strategic Ventures
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Three ventures, each framed as a strategic decision.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {ventures.map((venture) => (
            <VentureCard key={venture.title} venture={venture} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
