import React from "react";
import { cn } from "../../lib/utils";

interface BentoGridProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export default function BentoGrid({
  children,
  className,
  ...props
}: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid md:grid-cols-3 md:gap-8 w-full auto-rows-min",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
