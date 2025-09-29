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

  const stats = [
    { number: "35", label: "Acres", sublabel: "Private campus" },
    { number: "16", label: "Buildings", sublabel: "Industrial structures" },
    { number: "6M", label: "Sq Ft", sublabel: "Total space" },
    { number: "650+", label: "Companies", sublabel: "On campus" },
  ]

  return (
    <section ref={ref} className="py-24 bg-background border-border border">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-light text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-inter font-medium text-white mb-1">{stat.label}</div>
              <div className="text-xs md:text-sm font-inter text-gray-300">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
