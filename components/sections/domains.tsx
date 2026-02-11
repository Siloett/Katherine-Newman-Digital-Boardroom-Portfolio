'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { DomainCard } from '@/components/shared/domain-card'
import { domains } from '@/lib/data'
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations'

export function Domains() {
  return (
    <SectionWrapper id="domains">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainerVariants}
      >
        <motion.div variants={fadeUpVariants} className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Strategic Domains
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Leadership domains, not skill bars. Areas where Katherine makes
            strategic decisions others can't.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <DomainCard key={domain.title} domain={domain} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
