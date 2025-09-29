"use client"

import { useEffect, useRef, useState } from "react"
import { PrimaryButton } from "./ui/primary-button"
import MuxPlayer from "@mux/mux-player-react"
import { Download } from "lucide-react"

export function Walkthrough() {
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
    <section ref={ref} className="py-24 bg-card/10" id="walkthrough">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-light mb-8">See the Space</h2>

          <p className="font-inter text-base md:text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Experience the raw potential and activated possibilities of Industry City's modular festival grounds.
          </p>

          <div className="aspect-video rounded-lg mb-8 overflow-hidden">
            <MuxPlayer
              playbackId="DV6Glq5KOIgiW2fehpOnn4HI1AEmGEPUl5AH99LEKsU"
              accentColor="#0066FF"
              className="w-full h-full"
              poster="auto"
              preload="metadata"
              onPlay={(e) => {
                // Request fullscreen when video starts playing
                const player = e.target as HTMLVideoElement
                if (player.requestFullscreen) {
                  player.requestFullscreen()
                }
              }}
            />
          </div>

          <PrimaryButton className="mb-16">
            Request Full Tour
          </PrimaryButton>

          <div className="border-t border-border/20 pt-16">
            <h3 className="text-2xl md:text-3xl font-space-grotesk font-light mb-8">Downloads</h3>
            <p className="font-inter text-base text-foreground/80 mb-8 max-w-xl mx-auto">
              Access detailed plans and resources for your event planning needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <a
                href="#"
                className="group flex flex-col items-center p-6 rounded-lg border border-border/20 hover:border-accent/50 transition-colors bg-card/20 hover:bg-card/40"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Download className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-space-grotesk font-medium mb-2">Blueprint Layout</h4>
                <p className="font-inter text-sm text-foreground/60 text-center">
                  Detailed floor plans and spatial configurations
                </p>
              </a>

              <a
                href="#"
                className="group flex flex-col items-center p-6 rounded-lg border border-border/20 hover:border-accent/50 transition-colors bg-card/20 hover:bg-card/40"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Download className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-space-grotesk font-medium mb-2">CAD File</h4>
                <p className="font-inter text-sm text-foreground/60 text-center">
                  Technical drawings and specifications
                </p>
              </a>

              <a
                href="#"
                className="group flex flex-col items-center p-6 rounded-lg border border-border/20 hover:border-accent/50 transition-colors bg-card/20 hover:bg-card/40"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Download className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-space-grotesk font-medium mb-2">2026 Press Kit</h4>
                <p className="font-inter text-sm text-foreground/60 text-center">Media assets and venue information</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
