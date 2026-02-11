'use client'

import { motion } from 'framer-motion'
import { Linkedin, Calendar, Mail, FileText, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ContactForm } from '@/components/shared/contact-form'
import { DeckRequestForm } from '@/components/shared/deck-request-form'
import { contactData } from '@/lib/data'
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations'

export function Invitation() {
  return (
    <section
      id="contact"
      className="bg-primary py-24 text-primary-foreground md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
          className="text-center"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          >
            The Invitation
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80"
          >
            {contactData.headline}
          </motion.p>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-2 max-w-2xl text-base text-primary-foreground/60"
          >
            {contactData.subtext}
          </motion.p>

          {/* Seeking badges */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="text-sm text-primary-foreground/60">
              Currently seeking:
            </span>
            {contactData.seeking.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground/10"
              >
                {item}
              </Badge>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-12 grid gap-4 sm:grid-cols-2 max-w-lg mx-auto"
          >
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2"
              asChild
            >
              <a href="#" onClick={(e) => e.preventDefault()}>
                <Calendar className="h-4 w-4" />
                Book a Conversation
              </a>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Request the Deck
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
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              asChild
            >
              <a
                href={contactData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Send a Message
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Send Katherine a Message</DialogTitle>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-12 flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <MapPin className="h-4 w-4" />
              {contactData.location}
            </div>
            <p className="text-xs text-primary-foreground/40">
              {contactData.availability}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
