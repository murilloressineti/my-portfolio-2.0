import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const textVariants = cva("font-sans", {
  variants: {
    variant: {
      // Display / Hero Titles (Usados no topo da Home e Perfil)
      "hero-desktop":
        "text-[64px] leading-[1.2] tracking-[-0.005em] font-normal",
      "hero-mobile":
        "text-[42px] leading-[1.1] tracking-[-0.005em] font-normal",

      // Body Text
      "body-extra-large":
        "text-[28px] leading-[1.3] tracking-[-0.005em] font-normal",
      "body-large": "text-[20px] leading-[1.6] tracking-normal font-normal",
      "body-base": "text-[16px] leading-normal tracking-normal font-normal",
      "body-small": "text-[14px] leading-normal tracking-normal font-normal",

      // Headings
      h1: "text-[42px] leading-[1.3] tracking-normal font-semibold",
      h2: "text-[32px] leading-[1.3] tracking-normal font-semibold",
      h3: "text-[28px] leading-[1.3] tracking-normal font-semibold",
      h4: "text-[20px] leading-[1.3] tracking-[-0.005em] font-semibold",
      h5: "text-[16px] leading-[1.3] font-semibold",

      // UI Elements (Botões, Links e Headlines de seção)
      "action-link": "text-[20px] leading-normal font-semibold",
      "action-button": "text-[16px] leading-normal font-semibold",
      "headline-medium":
        "text-[16px] leading-[1.4] tracking-[0.2em] font-semibold uppercase",
      "headline-small":
        "text-[14px] leading-[1.4] tracking-[0.2em] font-semibold uppercase",
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
