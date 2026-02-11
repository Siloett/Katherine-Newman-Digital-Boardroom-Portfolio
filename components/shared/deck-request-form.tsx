'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

export function DeckRequestForm({ onSuccess }: { onSuccess?: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success('Deck request received', {
      description:
        'The deck will be sent to your email shortly. Thank you for your interest in SILOETT.AI.',
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
    onSuccess?.()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Share your details and Katherine will send you the SILOETT.AI investor
        deck.
      </p>

      <div className="space-y-2">
        <Label htmlFor="deck-name">Name</Label>
        <Input
          id="deck-name"
          name="name"
          placeholder="Your name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="deck-email">Email</Label>
        <Input
          id="deck-email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="deck-role">I am a...</Label>
        <Select name="role" required>
          <SelectTrigger>
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="investor">Investor</SelectItem>
            <SelectItem value="cofounder">Potential Co-founder</SelectItem>
            <SelectItem value="advisor">Advisor</SelectItem>
            <SelectItem value="partner">Industry Partner</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
      >
        {isSubmitting ? 'Sending...' : 'Request the Deck'}
      </Button>
    </form>
  )
}
