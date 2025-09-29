import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"

export const Header = () => {
  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 transition-all duration-300 hidden md:block">
      <header className="flex items-center justify-between container py-4 md:py-3">
        <Link href="/">
          <Logo className="w-[90px] md:w-[110px] text-white" />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {["Spaces", "Scenarios", "Walkthrough", "Contact"].map((item) => (
            <Link
              className="uppercase inline-block font-mono text-white/80 hover:text-white duration-150 transition-colors ease-out"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>

        <MobileMenu />
      </header>
    </div>
  )
}
