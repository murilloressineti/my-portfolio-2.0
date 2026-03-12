import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

export default function Section({
  id,
  children,
  className,
  isFullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-30",
        !isFullWidth && "px-6 md:px-30",
        className,
      )}
    >
      <div className={cn("w-full mx-auto ", !isFullWidth && "max-w-420")}>
        {children}
      </div>
    </section>
  );
}
