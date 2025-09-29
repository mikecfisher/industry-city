"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m15 18-6-6 6-6" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m9 18 6-6-6-6" />
  </svg>
)

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLONDISH_INDUSTRY%20CITY%20COURTYARD-XaPLb5BunryoCE42aRCy5yKCgCerNf.jpg",
    alt: "BLONDISH Industry City Courtyard - Large outdoor electronic music event with purple lasers and massive crowd",
    title: "Outdoor Courtyard Events",
    description: "Massive outdoor festivals in our industrial courtyards with full production capabilities",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Industry%20City%20Courtyard-fxuaepiSX6WVJLAVieCS2f0goxD5xS.png",
    alt: "Industry City Courtyard - Indoor venue with curved architecture and blue lighting",
    title: "Covered Venue Spaces",
    description: "Unique architectural elements provide stunning backdrops for intimate performances",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Industry%20City%20Indoor%20Main%20Stage-rYhXUjJFfmRM5x6lCGYh8R4vVivkqO.jpeg",
    alt: "Industry City Indoor Main Stage - Bird's eye view of DJ booth with red lighting and packed crowd",
    title: "Indoor Main Stage",
    description: "High-ceiling industrial spaces perfect for main stage productions and large crowds",
  },
]

export default function VenueCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-light text-foreground mb-6">
            Venue Showcase
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Experience the versatility of Industry City&apos;s modular event spaces through our recent productions
          </p>
        </div>

        <div className="relative">
          {/* Main carousel container */}
          <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-2xl overflow-hidden bg-card">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-black/60">
                  <div className="max-w-4xl">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-space-grotesk font-medium text-white mb-4">
                      {image.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-200 font-inter max-w-2xl">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white hover:bg-black/80"
            onClick={goToPrevious}
          >
            <ChevronLeftIcon />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white hover:bg-black/80"
            onClick={goToNext}
          >
            <ChevronRightIcon />
          </Button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-foreground scale-125" : "bg-muted hover:bg-muted-foreground"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="grid grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative h-24 md:h-32 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex ? "scale-105" : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => goToSlide(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
