'use client'

import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DeckRequestForm } from '@/components/shared/deck-request-form'
import { GradientBackground } from '@/components/shared/gradient-background'
import { CredentialRibbon } from '@/components/shared/credential-ribbon'
import { heroData } from '@/lib/data'
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations'

export function Hero() {
  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <GradientBackground />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainerVariants}
        className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center md:px-8"
      >
        <motion.h1
          variants={fadeUpVariants}
          className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          style={{ letterSpacing: '-0.02em' }}
        >
          {heroData.headline}
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          className="mt-6 text-lg text-white/80 md:text-xl"
        >
          {heroData.subtitle}
        </motion.p>

        <motion.div variants={fadeUpVariants} className="mt-8">
          <CredentialRibbon />
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 text-base font-semibold"
              >
                {heroData.ctaPrimary}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Request the Investor Deck</DialogTitle>
              </DialogHeader>
              <DeckRequestForm />
            </DialogContent>
          </Dialog>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo('contact')}
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-3 text-base"
          >
            {heroData.ctaSecondary}
          </Button>
        </motion.div>

        <motion.div variants={fadeUpVariants} className="mt-8">
          <a
            href={heroData.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            aria-label="Connect on LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollTo('thesis')}
          className="flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70"
          aria-label="Scroll to next section"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-white/40"
            >
              <rect
                x="1"
                y="1"
                width="14"
                height="22"
                rx="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="8" cy="8" r="2" fill="currentColor" />
            </svg>
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
