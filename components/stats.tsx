"use client"

import { useEffect, useRef, useState } from "react"

export function Stats() {
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
    <section ref={ref} className="py-24 bg-background border-border border">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-inter text-base md:text-lg text-gray-200 leading-relaxed mb-8">
            <span className="font-medium">Outdoor Courtyards:</span> seasonal availability (Early May → early November, proposed).
          </p>
          <p className="font-inter text-base md:text-lg text-gray-200 leading-relaxed">
            <span className="font-medium">Box Factory:</span> year-round interior event space.
          </p>
        </div>
      </div>
    </section>
  )
}
