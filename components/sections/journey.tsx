'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { TimelineEntry } from '@/components/shared/timeline-entry'
import { timelineActs } from '@/lib/data'
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations'

export function Journey() {
  return (
    <SectionWrapper id="journey" background="muted">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainerVariants}
      >
        <motion.div variants={fadeUpVariants} className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            The Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A career in three acts. Each chapter built the capabilities for the
            next.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline center line (desktop only) */}
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-secondary/40 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-16">
            {timelineActs.map((act) => (
              <motion.div key={act.number} variants={fadeUpVariants}>
                {/* Act header */}
                <div className="relative mb-8 ml-8 md:ml-0 md:text-center">
                  <div className="inline-block rounded-full bg-secondary/10 px-4 py-2 border border-secondary/20">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-secondary">
                      Act {act.number}: {act.title}
                    </span>
                    <span className="ml-2 text-xs text-muted-foreground">
                      {act.yearRange}
                    </span>
                  </div>
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    {act.subtitle}
                  </p>
                </div>

                {/* Timeline entries */}
                <div className="space-y-6">
                  {act.entries.map((entry, i) => (
                    <TimelineEntry
                      key={`${entry.year}-${entry.title}`}
                      entry={entry}
                      side={i % 2 === 0 ? 'left' : 'right'}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
