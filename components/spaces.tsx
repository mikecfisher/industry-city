"use client"

import { useEffect, useRef, useState } from "react"
import { InfoCard } from "./ui/info-card"

export function Spaces() {
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

  const spaces = [
    {
      name: "Box Factory",
      area: "18,810 SF",
      capacity: "1,200 standing",
      features: ["Ground floor", "Drive-in access", "Rigging points", "Wi-Fi"],
      type: "Interior",
    },
    {
      name: "Courtyard 7/8",
      area: "33,310 SF",
      capacity: "Flexible",
      features: ["Adjoins Box Factory", "Outdoor space", "Seasonal use"],
      type: "Courtyard",
    },
    {
      name: "Bandshell (Courtyard 1/2)",
      area: "24,641 SF",
      capacity: "1,200 standing",
      features: ["Pit: 2,214 SF", "Established venue", "Sound-friendly"],
      type: "Courtyard",
    },
    {
      name: "Private Streets",
      area: "20,430 USF",
      capacity: "Scalable",
      features: ["33rd-36th closeable", "Power/water tie-ins", "Multi-stage potential"],
      type: "Streets",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-card/10" id="spaces">
      <div className="container mx-auto px-4">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-light text-center mb-16 text-white">
            Modular Spaces
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {spaces.map((space, index) => (
              <InfoCard
                key={index}
                title={space.name}
                badge={space.type}
                stats={[
                  { label: "Area", value: space.area },
                  { label: "Capacity", value: space.capacity }
                ]}
                features={space.features}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
