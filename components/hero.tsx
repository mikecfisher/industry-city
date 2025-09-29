"use client"

import MuxPlayer from "@mux/mux-player-react"
import { PrimaryButton } from "./ui/primary-button"
import { useState, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export function Hero() {
  const [playbackId, setPlaybackId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const isMobile = useIsMobile()

  // Hardcoded playback IDs for mobile and desktop
  const DESKTOP_PLAYBACK_ID = process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID
  const MOBILE_PLAYBACK_ID = process.env.NEXT_PUBLIC_MUX_MOBILE_PLAYBACK_ID || "b3CxYyru6vf51StvjjWtCm1P4PQx9ite4HYznyUdJaU"

  useEffect(() => {
    // Select appropriate playback ID based on device type
    if (isMobile && MOBILE_PLAYBACK_ID) {
      setPlaybackId(MOBILE_PLAYBACK_ID)
      return
    }

    // For desktop, first try to use environment variable
    if (DESKTOP_PLAYBACK_ID) {
      setPlaybackId(DESKTOP_PLAYBACK_ID)
      return
    }

    // If no desktop playback ID in env, try to fetch it from asset ID
    const assetId = "zrnaAPQZTBLj5r9ruyJaSHm3MWlxSrQhkc7AWyqekmg"

    fetch(`/api/mux-playback-id?assetId=${assetId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.playbackId) {
          setPlaybackId(data.playbackId)
        } else {
          setError("Could not get playback ID. Please set NEXT_PUBLIC_MUX_PLAYBACK_ID environment variable.")
        }
      })
      .catch(() => {
        setError("Could not connect to Mux. Please set up MUX_TOKEN_ID and MUX_TOKEN_SECRET environment variables.")
      })
  }, [isMobile, DESKTOP_PLAYBACK_ID, MOBILE_PLAYBACK_ID])

  return (
    <div className="relative flex flex-col h-screen justify-end -mt-[50px]">
      <div className="absolute inset-0 overflow-hidden">
        {playbackId ? (
          <MuxPlayer
            playbackId={playbackId}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              zIndex: -1,
            }}
          />
        ) : error ? (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h3 className="text-xl mb-4">Video Configuration Required</h3>
              <p className="text-gray-300 max-w-md">{error}</p>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="text-white">Loading video...</div>
          </div>
        )}

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Grid overlay for futuristic aesthetic */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-space-grotesk font-light text-white text-center leading-tight">
          Industry City Events
        </h1>
      </div>

      <div className="relative z-10 pb-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-space-grotesk font-extralight text-gray-300 mb-8">
            Modular Urban Festival Grounds
          </h2>
          <p className="font-inter text-base sm:text-lg text-white/80 text-balance max-w-2xl mx-auto mb-12">
            Raw interiors, landscaped courtyards, private streets.
            <br />
            New York-scale shows, Brooklyn logistics.
          </p>

          <PrimaryButton>
            Book Site Visit
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}
