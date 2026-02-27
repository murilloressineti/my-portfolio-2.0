import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import Text from "./text";

export const linkVariants = cva(
  "transition-colors duration-300 cursor-pointer inline-block",
  {
    variants: {
      variant: {
        default: "text-text-secondary hover:text-text-link",
        active: "text-text-primary underline decoration-2 underline-offset-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface LinkProps
  extends
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  as?: React.ElementType;
  isSelected?: boolean;
}

export default function Link({
  as: Component = "a",
  variant,
  isSelected,
  className,
  children,
  ...props
}: LinkProps) {
  return (
    <Component
      className={cn(
        "relative flex flex-col items-center justify-center",
        linkVariants({ variant: isSelected ? "active" : variant, className }),
      )}
      {...props}
    >
      {/* O texto visível */}
      <Text variant={isSelected ? "action-link" : "body-large"}>
        {children}
      </Text>

      <span
        className="invisible block h-0 overflow-hidden font-semibold text-[20px] select-none"
        aria-hidden="true"
      >
        {children}
      </span>
    </Component>
  );
}
