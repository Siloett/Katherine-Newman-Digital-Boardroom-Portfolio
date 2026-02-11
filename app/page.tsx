import { Navbar } from '@/components/navigation/navbar'
import { Hero } from '@/components/sections/hero'
import { Thesis } from '@/components/sections/thesis'
import { TrackRecord } from '@/components/sections/track-record'
import { Ventures } from '@/components/sections/ventures'
import { Journey } from '@/components/sections/journey'
import { Domains } from '@/components/sections/domains'
import { Invitation } from '@/components/sections/invitation'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Thesis />
        <TrackRecord />
        <Ventures />
        <Journey />
        <Domains />
        <Invitation />
      </main>
    </>
  )
}
