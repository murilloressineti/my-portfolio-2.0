import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

export const bentoGridVariants = cva(
  "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full auto-rows-min",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BentoGridProps
  extends React.ComponentProps<"div">, VariantProps<typeof bentoGridVariants> {
  children: React.ReactNode;
}

export default function BentoGrid({
  variant,
  children,
  className,
  ...props
}: BentoGridProps) {
  return (
    <div className={cn(bentoGridVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
}
