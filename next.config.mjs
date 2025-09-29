import { withNextVideo } from 'next-video/process'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default withNextVideo(nextConfig, { 
  provider: 'mux',
  providerConfig: {
    mux: {
      // Environment variables will be used automatically
    }
  }
})
