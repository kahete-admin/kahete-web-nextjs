import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-turquoise text-black font-bold hover:bg-turquoise/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input text-primary-foreground hover:bg-charcoal-night",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        secondarySelected:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 outline outline-offset-4 outline-sky-blue",
        ghost: "text-white/50 hover:bg-accent hover:text-white/30",
        link: "text-white underline-offset-4 hover:underline",
        disabled: "bg-stone-dark-gray text-white/50 cursor-not-allowed",
        action: "bg-stone-light-gray text-white hover:bg-stone-light-gray/50",
        actionSelected: "bg-stone-light-gray text-white hover:bg-stone-light-gray/50 outline outline-offset-4 outline-sky-blue",
      },
      size: {
        default: "h-12 px-4 py-2",
        sm: "h-9 rounded-full px-3 text-sm",
        lg: "h-11 rounded-full px-8",
        icon: "h-12 w-12",
        full: "h-12 w-full",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }