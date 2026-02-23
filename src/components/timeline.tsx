import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

export const timelineVariants = cva("relative w-full max-w-6xl mx-auto flex flex-col", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface TimelineProps
  extends React.ComponentProps<"div">, VariantProps<typeof timelineVariants> {
  children: React.ReactNode;
}

export default function Timeline({
  variant,
  children,
  className,
  ...props
}: TimelineProps) {
  return (
    <div className={cn(timelineVariants({ variant, className }))} {...props}>
      <div className="absolute left-1/2 -top-10 -bottom-10 w-0.5 bg-border-default -translate-x-1/2 z-0"></div>

      <div className="relative z-10 flex flex-col">
        {React.Children.map(children, (child) => {
          return child;
        })}
      </div>
    </div>
  );
}
