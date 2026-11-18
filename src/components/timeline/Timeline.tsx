import type React from "react";

import { cn } from "../../lib/utils";

interface TimelineProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export default function Timeline({
  children,
  className,
  ...props
}: TimelineProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-5xl mx-auto flex flex-col",
        className,
      )}
      {...props}
    >
      {/* Eixo da trajetória */}
      <div className="absolute left-1/2 -top-10 -bottom-10 w-0.5 bg-border-default -translate-x-1/2 z-0  md:block" />
      
      {/* Etapas da trajetória */}
      <div className="relative z-10 flex flex-col">{children}</div>
    </div>
  );
}
