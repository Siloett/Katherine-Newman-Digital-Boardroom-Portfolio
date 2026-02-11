'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Trophy, MapPin } from 'lucide-react'
import type { TimelineEntry as TimelineEntryType } from '@/lib/data'

interface TimelineEntryProps {
  entry: TimelineEntryType
  side?: 'left' | 'right'
}

export function TimelineEntry({ entry, side = 'left' }: TimelineEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`relative flex w-full items-start gap-6 md:gap-8 ${
        side === 'right' ? 'md:flex-row-reverse md:text-right' : ''
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 z-10 md:left-1/2 md:-translate-x-1/2">
        <div
          className={`h-3 w-3 rounded-full border-2 ${
            entry.isCurrent
              ? 'border-accent bg-accent shadow-[0_0_8px_rgba(59,130,246,0.5)]'
              : entry.isAward
                ? 'border-secondary bg-secondary'
                : 'border-secondary bg-background'
          }`}
        />
      </div>

      {/* Content */}
      <div
        className={`ml-8 flex-1 md:ml-0 ${
          side === 'left' ? 'md:pr-12 md:w-1/2' : 'md:pl-12 md:w-1/2'
        } ${side === 'right' ? 'md:ml-auto' : 'md:mr-auto'}`}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left group"
        >
          <div className="flex items-start gap-2">
            <span className="font-mono text-sm font-semibold text-secondary">
              {entry.year}
            </span>
            {entry.isAward && (
              <Trophy className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
            )}
          </div>

          <h4 className="mt-1 text-base font-semibold leading-snug">
            {entry.title}
          </h4>

          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <span>{entry.organization}</span>
            {entry.location && (
              <>
                <MapPin className="h-3 w-3" />
                <span>{entry.location}</span>
              </>
            )}
          </div>

          <ChevronDown
            className={`mt-2 h-4 w-4 text-muted-foreground transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-3 pb-2 space-y-2">
                <p className="text-sm leading-relaxed text-foreground/80">
                  {entry.description}
                </p>
                <p className="text-sm italic text-muted-foreground">
                  {entry.significance}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
