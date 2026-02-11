'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { DeckRequestForm } from '@/components/shared/deck-request-form'
import { navigationLinks, heroData } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navigationLinks.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  function scrollTo(href: string) {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        {/* Logo / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={cn(
            'text-sm font-semibold tracking-wider uppercase transition-colors',
            isScrolled ? 'text-foreground' : 'text-white'
          )}
        >
          Katherine Newman
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isScrolled
                    ? activeSection === sectionId
                      ? 'text-foreground bg-muted'
                      : 'text-muted-foreground hover:text-foreground'
                    : activeSection === sectionId
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white'
                )}
              >
                {link.label}
              </button>
            )
          })}

          <a
            href={heroData.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'ml-2 p-2 rounded-md transition-colors',
              isScrolled
                ? 'text-muted-foreground hover:text-foreground'
                : 'text-white/70 hover:text-white'
            )}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="ml-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
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
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? '' : 'text-white hover:bg-white/10'}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Katherine Newman</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="rounded-md px-3 py-3 text-left text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
                <a
                  href={heroData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      Request the Deck
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Request the Investor Deck</DialogTitle>
                    </DialogHeader>
                    <DeckRequestForm onSuccess={() => setMobileOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
