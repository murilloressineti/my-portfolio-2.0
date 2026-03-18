import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const iconVariants = cva(
  "transition-all duration-300 ease-in-out shrink-0",
  {
    variants: {
      animate: {
        none: "",
        rotate: "group-hover:rotate-45",
        down: "group-hover:translate-y-1",
      },
      size: {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
      },
    },
    defaultVariants: {
      animate: "none",
      size: "md",
    },
  },
);

interface IconProps
  extends React.SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> { // Herda os poderes de um componente SVG e as variantes do cva
  svg: React.ElementType; // O componente SVG a ser renderizado, passado como prop
}

export default function Icon({
  svg: SvgComponent, // Componente especial criado para renderizar o SVG
  animate,
  size,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      aria-hidden="true"
      className={cn(iconVariants({ animate, size, className }))}
      {...props}
    />
  );
}
