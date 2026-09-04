import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export const buttonVariants = cva(
  "font-head transition-all rounded-none outline-hidden cursor-pointer duration-200 font-medium flex items-center",
  {
    variants: {
      variant: {
        default:
          "shadow-win95 hover:shadow-win95-lg active:shadow-win95-inset bg-primary text-primary-foreground border-2 border-black transition hover:translate-y-0.5 active:translate-y-1 active:translate-x-0.5 hover:bg-primary-hover",
        secondary:
          "shadow-win95 hover:shadow-win95-lg active:shadow-win95-inset bg-secondary text-secondary-foreground border-2 border-black transition hover:translate-y-0.5 active:translate-y-1 active:translate-x-0.5 hover:bg-secondary-hover",
        outline:
          "shadow-win95 hover:shadow-win95-lg active:shadow-win95-inset bg-transparent border-2 transition hover:translate-y-0.5 active:translate-y-1 active:translate-x-0.5",
        link: "bg-transparent hover:underline",
        ghost: "bg-transparent hover:bg-accent",
      },
      size: {
        sm: "px-3 py-1 text-sm shadow-win95",
        md: "px-4 py-1.5 text-base",
        lg: "px-6 lg:px-8 py-2 lg:py-3 text-md lg:text-lg",
        icon: "p-2",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = "md",
      className = "",
      variant = "default",
      asChild = false,
      ...props
    },
    forwardedRef
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={forwardedRef}
        className={cn(buttonVariants({ size, variant }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
