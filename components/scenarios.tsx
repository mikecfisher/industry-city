"use client"

import { useEffect, useRef, useState } from "react"
import { InfoCard } from "./ui/info-card"

export function Scenarios() {
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

  const scenarios = [
    {
      title: "Single-Stage Setup",
      description: "Courtyard 7/8 + Private Streets",
      totalArea: "53,740 SF",
      capacities: [
        { density: "10 SF/person", capacity: "5,374" },
        { density: "8 SF/person", capacity: "6,718" },
      ],
    },
    {
      title: "Multi-Stage Festival",
      description: "Courtyard 7/8 + 3/4 West + 5/6 West + Private Streets",
      totalArea: "75,057 SF",
      capacities: [
        { density: "10 SF/person", capacity: "7,506" },
        { density: "7 SF/person", capacity: "10,722" },
      ],
    },
  ]

  return (
    <section ref={ref} className="py-24" id="scenarios">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-light text-center mb-8 text-white">
            Capacity Scenarios
          </h2>

          <p className="text-sm font-inter text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Illustrative capacity estimates based on area calculations. Final occupancies subject to stamped egress
            calculations and approvals by DOB/FDNY.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <InfoCard
                key={index}
                title={scenario.title}
                description={scenario.description}
                stats={[
                  { label: "Total Area", value: scenario.totalArea }
                ]}
                items={scenario.capacities.map(cap => ({
                  label: `@ ${cap.density}`,
                  value: cap.capacity
                }))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
