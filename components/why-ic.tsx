"use client"

import { useEffect, useRef, useState } from "react"

export function WhyIC() {
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

  const reasons = [
    "35-acre campus; raw Box Factory + multiple courtyards + closeable private streets",
    "Proven electronic shows on site; flexible looks day → night",
    "Load-in that doesn't hate you (drive-in, rigging points, power)",
  ]

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-light text-center mb-16">
            Why it works
          </h2>

          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-background border border-border">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <p className="font-inter text-base md:text-lg text-gray-200 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
