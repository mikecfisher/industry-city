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
      type: "Interior",
      area: "18,810 SF",
      capacity: "Flexible- Avg 2k - 4k",
      features: ["Ground floor", "Drive-in access", "Rigging points"],
    },
    {
      name: "Courtyard 7/8",
      type: "Courtyard",
      area: "33,310 SF",
      capacity: "Flexible- Avg 3k- 5k",
      features: ["Adjoins Box Factory", "Outdoor space", "Seasonal use"],
    },
    {
      name: "Modular Warehouse Space Building 7/8",
      type: "Indoor",
      area: "8,741 SF",
      capacity: "1,200 standing",
      features: [],
    },
    {
      name: "Private Streets",
      type: "Streets",
      area: "20,430 USF",
      capacity: "Scalable",
      features: ["33rd-36th closeable", "Power/water tie-ins", "Multi-stage/ Block party potential"],
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-card/10" id="spaces">
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-light text-center mb-16 text-white">
            Modular Spaces
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {spaces.map((space, index) => (
              <InfoCard
                key={index}
                title={space.name}
                badge={space.type}
                stats={[
                  { label: "Area", value: space.area },
                  { label: "Capacity", value: space.capacity },
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
