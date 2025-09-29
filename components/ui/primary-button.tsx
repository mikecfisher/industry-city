import * as React from "react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface PrimaryButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
  variant?: "default" | "outline"
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const PrimaryButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  PrimaryButtonProps
>(({ className, variant = "default", children, onMouseEnter, onMouseLeave, ...props }, ref) => {
  const baseStyles = "font-mono text-sm px-8 py-3"

  if (variant === "outline") {
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors",
          "text-white/90 hover:text-white",
          "bg-gray-400 p-[1px] [clip-path:polygon(0_0,calc(100%-12px)_0,100%_100%,12px_100%)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        <span className="flex items-center justify-center w-full h-full bg-background group-hover:bg-gray-300/10 transition-colors px-8 py-3 [clip-path:polygon(1px_1px,calc(100%-13px)_1px,calc(100%-1px)_calc(100%-1px),13px_calc(100%-1px))]">
          {children}
        </span>
      </button>
    )
  }

  return (
    <Button
      ref={ref}
      variant="default"
      className={cn(
        baseStyles,
        "bg-gray-800 text-white border border-gray-800/50",
        "hover:bg-gray-800 hover:border-gray-700/50",
        "active:bg-gray-950/90",
        "transition-all duration-300 shadow-lg hover:shadow-xl",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </Button>
  )
})

PrimaryButton.displayName = "PrimaryButton"

export { PrimaryButton }
