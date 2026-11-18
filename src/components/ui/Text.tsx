import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Escala tipográfica
const textVariants = cva("font-sans antialiased", {
  variants: {
    variant: {
      h1: "text-4xl md:text-6xl leading-tight font-semibold tracking-tight text-text-primary",
      h2: "text-2xl md:text-4xl leading-tight font-semibold tracking-tight text-text-primary",
      h3: "text-xl md:text-2xl leading-tight font-semibold tracking-tight text-text-primary",
      h4: "text-lg md:text-xl leading-snug font-semibold text-text-primary",
      h5: "text-base leading-snug font-semibold text-text-primary",

      "body-lg": "text-lg leading-relaxed font-normal text-text-primary",
      "body-base": "text-base leading-normal font-normal text-text-primary",
      "body-sm": "text-sm leading-normal font-normal opacity-80 text-text-primary",

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

type TextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "label"
  | "div"
  | "a";
type TextOwnProps<T extends TextElement> = VariantProps<typeof textVariants> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
};
// A tag controla semântica e atributos; a variante controla apenas a apresentação.
type TextProps<T extends TextElement> = TextOwnProps<T> &
  Omit<React.ComponentPropsWithoutRef<NoInfer<T>>, keyof TextOwnProps<T>>;

// Usos sem variante mantêm a inferência anterior dos títulos, sem impor estilo aos demais elementos.
const headingVariants: Partial<Record<TextElement, VariantProps<typeof textVariants>["variant"]>> = {
  h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5",
};

export default function Text<T extends TextElement = "p">({
  as,
  variant,
  className,
  children,
  ...props
}: TextProps<T>) {
  const Component = as || "p";
  return React.createElement(
    Component,
    {
      className: cn(textVariants({ variant: variant || headingVariants[Component] || null, className })),
      ...props,
    },
    children,
  );
}
