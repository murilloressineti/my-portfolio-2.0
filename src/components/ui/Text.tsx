import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const textVariants = cva("font-sans antialiased", {
  variants: {
    variant: {
      // HEADINGS
      h1: "text-4xl md:text-6xl leading-tight font-semibold tracking-tight text-text-primary",
      h2: "text-2xl md:text-4xl leading-tight font-semibold tracking-tight text-text-primary",
      h3: "text-xl md:text-2xl leading-tight font-semibold tracking-tight text-text-primary",
      h4: "text-lg md:text-xl leading-snug font-semibold text-text-primary",
      h5: "text-base leading-snug font-semibold text-text-primary",

      // BODY TEXT
      "body-lg": "text-lg md:text-xl leading-relaxed font-normal text-text-primary",
      "body-base": "text-base leading-normal font-normal text-text-primary",
      "body-sm": "text-sm leading-normal font-normal opacity-80 text-text-primary",

      // UI ELEMENTS
      "ui-action":
        "text-sm md:text-base font-semibold uppercase",
      "ui-link": "text-base md:text-lg font-semibold",
      "ui-headline":
        "text-xs md:text-sm leading-snug tracking-[0.2em] font-semibold uppercase",
    },
  },
  defaultVariants: {
    variant: "body-base",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label" | "div" | "a"; // Permite usar tags HTML comuns como variantes
}

export default function Text({
  as: Component = "p",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        textVariants({ variant: variant || (Component as any), className }),
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
