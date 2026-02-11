'use client'

import { motion } from 'framer-motion'
import { credentials } from '@/lib/data'
import { fadeUpVariants } from '@/lib/animations'

export function CredentialRibbon() {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
    >
      {credentials.map((credential, index) => (
        <div key={credential} className="flex items-center gap-3 md:gap-4">
          <span className="whitespace-nowrap text-xs font-medium tracking-wider text-primary-foreground/70 uppercase md:text-sm">
            {credential}
          </span>
          {index < credentials.length - 1 && (
            <span className="text-primary-foreground/30">|</span>
          )}
        </div>
      ))}
    </motion.div>
  )
}
