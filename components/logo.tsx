import type React from "react"
export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      
      <rect x="0" y="32" width="80" height="1" fill="currentColor" className="text-accent" opacity="0.6" />
    </svg>
  )
}
