import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import Text from "./Text";

export const buttonVariants = cva(
  "inline-flex items-center justify-between gap-2 transition-all duration-300 cursor-pointer uppercase group antialiased",
  {
    variants: {
      variant: {
        primary: "bg-neutral-black text-text-inverted hover:bg-brand-primary",
        secondary:
          "bg-neutral-white text-text-secondary border border-neutral-300 hover:bg-neutral-200 hover:border-neutral-200 hover:text-text-primary hover:fill-text-primary",

        // Verificar
        ghost:
          "bg-neutral-200 text-text-secondary fill-text-secondary hover:bg-neutral-300 hover:text-text-primary",

        navAction:
          "bg-neutral-white text-text-secondary border border-neutral-300 group-hover:bg-neutral-200 group-hover:border-neutral-200 transition-all duration-300",

        footerCta:
          "bg-transparent border border-neutral-200 text-text-inverted hover:bg-neutral-200 hover:text-text-primary",

        projectGithub:
          "bg-neutral-white text-text-inverted border border-neutral-300 hover:bg-neutral-black hover:fill-neutral-white",

        projectDeploy:
          "bg-neutral-white text-text-secondary fill-text-secondary border border-neutral-300 hover:bg-neutral-200 hover:border-neutral-200 hover:text-text-primary hover:fill-text-primary",

        contactCard:
          "bg-bg-surface p-6 h-auto rounded-md border border-border-default hover:bg-neutral-black hover:text-neutral-white hover:fill-neutral-white normal-case transition-all duration-300",

        wrapper: "bg-transparent border-0 p-0 hover:bg-transparent",
      },
      shape: {
        rounded: "rounded-full p-3",
        rectangular: "rounded-md py-4.5 px-8",
        square: "rounded-md p-4.5",
        none: "p-0",
      },
      size: {
        default: "",
        lg: "p-4.5 text-xs",
        md: "p-3 text-sm",
        sm: "p-2 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      shape: "rectangular",
      size: "default",
    },
  },
);

interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "shape" | "size">,
    VariantProps<typeof buttonVariants> {
  as?: React.ElementType;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  as: Component = "button",
  variant,
  shape,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Component
      className={cn(buttonVariants({ variant, shape, size, className }))}
      {...props}
    >
      {/* Usamos React.Children.map para percorrer os filhos (children) com segurança. 
      Diferente do .map comum, ele funciona mesmo se houver apenas um filho (objeto) ou vários (array).*/}
      {React.Children.map(children, (child) => {
        // Se o filho for uma string (texto puro), envolvemos no componente Text
        if (typeof child === "string") {
          return (
            <Text variant="ui-action" as="span">
              {child}
            </Text>
          );
        }
        // Se for um ícone ou qualquer outro componente, renderiza ele como está
        return child;
      })}
    </Component>
  );
}
