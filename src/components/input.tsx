import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import Text from "./text";

export const InputVariants = cva(
  "w-full bg-bg-default border border-border-default rounded-lg p-4 text-text-primary placeholder:text-neutral-gray-400 hover:border-border-hover focus:border-border-focus resize-none",
  {
    variants: {
      variant: {
        default: "",
        error: "border-feedback-error focus:border-feedback-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface InputProps
  extends
    Omit<React.AllHTMLAttributes<HTMLElement>, "as">,
    VariantProps<typeof InputVariants> {
  as?: "input" | "textarea";
  label?: string;
}

export default function Input({
  as: Component = "input",
  variant,
  className,
  children,
  label,
  ...props
}: InputProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      {label && (
        <Text
          variant="body-base"
          className="text-text-primary font-semibold uppercase"
        >
          {label}
        </Text>
      )}

      <Component
        className={cn(InputVariants({ variant, className }))}
        {...props}
      >
        {Component === "textarea" ? children : null}
      </Component>
    </div>
  );
}
