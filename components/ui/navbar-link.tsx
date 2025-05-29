import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../../lib/utils"

interface NavbarLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  exact?: boolean
  onClick?: () => void
}

export function NavbarLink({
  href,
  children,
  className,
  activeClassName,
  exact = false,
  onClick,
}: NavbarLinkProps) {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)
  
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center py-2 text-sm font-medium transition-colors hover:text-foreground/80",
        isActive ? "text-foreground" : "text-foreground/60",
        isActive && activeClassName,
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
