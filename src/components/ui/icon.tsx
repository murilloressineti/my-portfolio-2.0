import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva(
  "transition-all duration-300 ease-in-out w-6 h-6",
  {
    variants: {
      animate: {
        none: "",
        rotate: "group-hover:rotate-45",
        down: "group-hover:translate-y-1",
      },
    },
    defaultVariants: {
      animate: "none",
    },
  },
);

interface IconProps
  extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent className={iconVariants({ animate, className })} {...props} />
  );
}
