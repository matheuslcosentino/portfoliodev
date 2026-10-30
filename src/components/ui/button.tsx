import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-sm border-[3px] border-line font-sans text-sm font-bold tracking-tight transition-[transform,box-shadow,background-color,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-line text-ink shadow-brutal-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none",
        lime:
          "bg-lime text-lime-foreground shadow-brutal-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none",
        outline:
          "bg-card text-foreground shadow-brutal-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-surface hover:shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none",
        violet:
          "bg-violet text-violet-foreground shadow-brutal-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none",
        inverse:
          "border-line bg-line text-ink shadow-[4px_4px_0_0_hsl(var(--lime))] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_0_hsl(var(--lime))]",
        ghost:
          "border-transparent bg-transparent text-foreground shadow-none hover:bg-muted",
        link: "border-transparent bg-transparent p-0 text-foreground shadow-none underline decoration-2 underline-offset-4 hover:text-violet",
      },
      size: {
        default: "h-11 px-5 [&_svg]:size-4",
        sm: "h-9 px-3.5 text-[13px] [&_svg]:size-3.5",
        lg: "h-[52px] px-7 text-[15px] [&_svg]:size-[18px]",
        icon: "h-11 w-11 p-0 [&_svg]:size-[18px]",
      },
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

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
