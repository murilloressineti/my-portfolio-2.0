import type { ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";

import { cn } from "../../lib/utils";

import Text from "./Text";

// Estados de navegação
const linkVariants = cva(
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

interface NavigationLinkProps
  extends Omit<NavLinkProps, "className" | "children">, VariantProps<typeof linkVariants> {
  className?: string;
  children?: ReactNode;
}

// A seleção exata mantém o link da listagem desmarcado nas páginas de detalhes.
export default function NavLink({
  end = true,
  variant,
  className,
  children,
  ...props
}: NavigationLinkProps) {
  return (
    <RouterNavLink
      end={end}
      className={({ isActive }) => cn(
        "flex flex-col items-center justify-center",
        linkVariants({ variant: isActive ? "active" : variant, className }),
      )}
      {...props}
    >
      <Text variant="ui-link">{children}</Text>
    </RouterNavLink>
  );
}
