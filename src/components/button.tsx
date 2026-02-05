import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import Text from "./text";

export const ButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer uppercase text-[16px] leading-normal font-semibold",
  {
    variants: {
      variant: {
        primary:
          "bg-neutral-black text-text-inverted hover:bg-interactive-default-bg",
        secondary:
          "bg-neutral-white text-text-secondary border border-neutral-gray-300 hover:bg-neutral-gray-200 hover:border-neutral-gray-200 hover:text-text-primary hover:fill-text-primary",
        tertiary:
          "bg-neutral-white text-text-secondary fill-text-secondary border border-neutral-gray-300 hover:bg-neutral-gray-200 hover:border-neutral-gray-400 hover:text-text-primary hover:fill-text-primary",
        quartenary:
          "bg-neutral-gray-200 text-text-secondary fill-text-secondary hover:bg-neutral-gray-300 hover:text-text-primary",
        quinary:
          "bg-neutral-white text-text-inverted border border-neutral-gray-300 hover:bg-neutral-black hover:fill-neutral-white",
      },
      shape: {
        rounded: "rounded-full p-3",
        rectangular: "rounded-md py-4.5 px-8",
        square: "rounded-md p-4.5",
      },
      size: {
        default: "",
        lg: "p-4.5",
        md: "p-3",
        sm: "p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      shape: "rectangular",
      size: "default",
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  as?: React.ElementType;
}

export default function Button({
  as: Component = "button",
  variant,
  shape,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Component
      className={cn(ButtonVariants({ variant, shape, size, className }))}
      {...props}
    >
      {children}
    </Component>
  );
}
