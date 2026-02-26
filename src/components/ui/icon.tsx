import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("transition-all duration-300 ease-in-out", {
  variants: {
    animate: {
      false: "",
      true: "group-hover:rotate-45",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

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
