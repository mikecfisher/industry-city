"use client"

import { cn } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog"
import Link from "next/link"
import { useState } from "react"

interface MobileMenuProps {
  className?: string
}

const MenuIcon = () => (
  null
)

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m18 6-12 12" />
    <path d="m6 6 12 12" />
  </svg>
)

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Spaces", href: "#spaces" },
    { name: "Scenarios", href: "#scenarios" },
    { name: "Walkthrough", href: "#walkthrough" },
    { name: "Contact", href: "#contact" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn("group lg:hidden p-2 text-foreground transition-colors", className)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div data-overlay="true" className="fixed z-30 inset-0 bg-background/90 backdrop-blur-sm" />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (e.target instanceof HTMLElement && e.target.dataset.overlay !== "true") {
              e.preventDefault()
            }
          }}
          className="fixed top-0 left-0 w-full z-40 py-28 md:py-40"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          <nav className="flex flex-col space-y-6 container mx-auto">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="text-xl font-mono uppercase text-muted-foreground transition-colors ease-out duration-150 hover:text-foreground py-2"
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-6">
              <Link
                href="/#contact"
                onClick={handleLinkClick}
                className="inline-block text-xl font-mono uppercase text-foreground transition-colors ease-out duration-150 hover:text-muted-foreground py-2"
              >
                Book Visit
              </Link>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
