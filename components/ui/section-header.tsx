import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const sectionHeaderVariants = cva(
  "flex flex-col",
  {
    variants: {
      align: {
        center: "text-center items-center",
        left: "text-left items-start",
        right: "text-right items-end",
      },
      spacing: {
        default: "mb-16",
        sm: "mb-8",
        lg: "mb-24",
        none: "",
      },
    },
    defaultVariants: {
      align: "center",
      spacing: "default",
    },
  }
)

interface SectionHeaderProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionHeaderVariants> {
  title: string
  description?: string
  eyebrow?: string
  eyebrowClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionHeader({
  title,
  description,
  eyebrow,
  className,
  align,
  spacing,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn(sectionHeaderVariants({ align, spacing }), className)} {...props}>
      {eyebrow && (
        <div className={cn("text-accent font-medium mb-4", eyebrowClassName)}>{eyebrow}</div>
      )}
      <h2 className={cn("", titleClassName)}>{title}</h2>
      {description && (
        <p className={cn("mt-4 text-lg text-muted-foreground max-w-3xl", descriptionClassName)}>{description}</p>
      )}
    </div>
  )
}
