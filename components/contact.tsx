"use client"

import { useEffect, useRef, useState } from "react"
import { PrimaryButton } from "./ui/primary-button"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24" id="contact">
      <div className="container mx-auto px-4">
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-light mb-8">Ready to explore?</h2>

          <p className="font-inter text-base md:text-lg text-foreground/80 mb-12">
            Book a site visit to experience the spaces firsthand, or request our comprehensive tech package with
            detailed specifications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton>
              Book Site Visit
            </PrimaryButton>
            <PrimaryButton variant="outline">
              Request Tech Package
            </PrimaryButton>
          </div>

          <p className="text-xs font-inter text-muted-foreground mt-8">
            We'll reply same day with availability and next steps.
          </p>
        </div>
      </div>
    </section>
  )
}
