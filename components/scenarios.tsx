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
      description: "Courtyard 7/8 + Box Factory + Private Street Option",
      details: [
        "Courtyard 7/8 @ avg cap. 5k",
        "Box Factory @ avg cap. 4k",
        "Private Street Option @ avg cap. 6k"
      ],
    },
    {
      title: "Multi-Stage Festival",
      description: "Courtyard 7/8 + Box Factory + Building 8 + Building 7 + Private Streets",
      details: [
        "1-9 Possible Stages of Music",
        "Total Area 75,057 SF"
      ],
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
                items={scenario.details ? scenario.details.map(detail => ({
                  label: detail,
                  value: ""
                })) : scenario.capacities?.map(cap => ({
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
