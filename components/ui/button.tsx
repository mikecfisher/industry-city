import type * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#0066FF] text-white hover:bg-[#0052CC] active:bg-[#003D99] [clip-path:polygon(0_0,calc(100%-12px)_0,100%_100%,12px_100%)]",
        outline:
          "bg-transparent text-[#0066FF] hover:bg-[#0066FF] hover:text-white active:bg-[#0052CC] active:text-white [clip-path:polygon(0_0,calc(100%-12px)_0,100%_100%,12px_100%)]",
        ghost: "bg-transparent text-[#0066FF] hover:bg-[#0066FF]/10 active:bg-[#0066FF]/20",
      },
      size: {
        default: "h-12 px-6 text-base font-mono uppercase",
        sm: "h-10 px-4 text-sm font-mono uppercase",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props}>
      <Slottable>{children}</Slottable>
    </Comp>
  )
}

export { Button, buttonVariants }
