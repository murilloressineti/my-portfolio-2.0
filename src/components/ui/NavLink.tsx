import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import Text from "./Text";

export const linkVariants = cva(
  "transition-colors duration-300 cursor-pointer",
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
    React.AnchorHTMLAttributes<HTMLAnchorElement>, // Certidão de nascimento para atributos de link padrão
    VariantProps<typeof linkVariants> { // Permite usar as variantes definidas em linkVariants
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
        "flex flex-col items-center justify-center",
        linkVariants({ variant: isSelected ? "active" : variant, className }),
      )}
      {...props}
    >
      <Text variant="ui-link">{children}</Text>
    </Component>
  );
}
