import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Industry City — Modular Urban Festival Grounds",
  description: "Raw interiors, landscaped courtyards, private streets. New York-scale shows, Brooklyn logistics.",
  robots: "noindex, nofollow", // Per spec requirement
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased font-inter`}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
