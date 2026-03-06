import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const textVariants = cva("font-sans antialiased", {
  variants: {
    variant: {
      // Display & Hero
      hero: "text-4xl md:text-6xl leading-[1.1] tracking-tight font-normal",
      "body-hero":
        "text-base md:text-2xl leading-relaxed md:leading-snug tracking-normal font-normal",
      "section-body":
        "text-lg md:text-xl leading-relaxed tracking-normal font-normal",
      "about-title":
        "text-2xl md:text-3xl leading-tight tracking-tight font-semibold",
      "about-body": "text-lg leading-relaxed tracking-normal font-normal",

      // Body Text
      "body-extra-large": "text-2xl leading-snug tracking-tight font-normal",
      "body-large": "text-lg md:text-xl leading-relaxed font-normal",
      "body-base": "text-base leading-normal font-normal",
      "body-small": "text-sm leading-normal font-normal",

      // Headings
      h1: "text-4xl leading-tight font-semibold tracking-tight",
      h2: "text-2xl md:text-3xl leading-tight font-semibold tracking-tight",
      h3: "text-xl md:text-2xl leading-tight font-semibold tracking-tight",
      h4: "text-lg md:text-xl leading-snug font-semibold",
      h5: "text-base leading-snug font-semibold",

      // UI Elements
      "action-link": "text-base md:text-lg leading-normal font-semibold",
      "action-button":
        "text-sm md:text-base leading-none font-semibold uppercase tracking-wider",
      "headline-medium":
        "text-sm leading-6 tracking-[0.15em] font-semibold uppercase",
      "headline-small":
        "text-xs leading-5 tracking-[0.15em] font-semibold uppercase",
    },
  },
  defaultVariants: {
    variant: "body-base",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as: Component = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component className={cn(textVariants({ variant, className }))} {...props}>
      {children}
    </Component>
  );
}
