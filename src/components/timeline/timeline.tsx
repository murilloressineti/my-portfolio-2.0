import React from "react";
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
        "relative w-full max-w-6xl mx-auto flex flex-col",
        className,
      )}
      {...props}
    >
      {/* Linha Central Vertical */}
      <div className="absolute left-1/2 -top-10 -bottom-10 w-0.5 bg-border-default -translate-x-1/2 z-0 hidden md:block" />

      {/* Container dos Itens */}
      <div className="relative z-10 flex flex-col">{children}</div>
    </div>
  );
}
