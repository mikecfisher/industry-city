"use client"

import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { WhyIC } from "@/components/why-ic"
import { Spaces } from "@/components/spaces"
import { Scenarios } from "@/components/scenarios"
import { Walkthrough } from "@/components/walkthrough"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import VenueCarousel from "@/components/venue-carousel"
import { Leva } from "leva"

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <VenueCarousel />
      <Stats />
      <WhyIC />
      <Spaces />
      <Scenarios />
      <Walkthrough />
      <Contact />
      <Footer />
      <Leva hidden />
    </main>
  )
}
