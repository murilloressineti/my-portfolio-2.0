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
        "py-20 md:py-30 px-6 md:px-12 lg:px-20 xl:px-30",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full",
          !isFullWidth && "max-w-360",
        )}
      >
        {children}
      </div>
    </section>
  );
}
