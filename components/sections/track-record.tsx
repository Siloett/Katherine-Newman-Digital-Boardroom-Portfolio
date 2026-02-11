'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { MetricCard } from '@/components/shared/metric-card'
import { metrics } from '@/lib/data'
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations'

export function TrackRecord() {
  return (
    <SectionWrapper id="track-record" background="muted">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainerVariants}
      >
        <motion.div variants={fadeUpVariants} className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            The Track Record
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Executive proof points. Not a resume — evidence of decision quality.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.value} metric={metric} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
