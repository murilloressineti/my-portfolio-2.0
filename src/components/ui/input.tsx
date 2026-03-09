import React, { useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import Text from "./Text";

export const inputVariants = cva(
  "w-full bg-bg-default border border-border-default rounded-lg p-4 text-base text-text-primary placeholder:text-neutral-400 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/10 focus:border-border-focus resize-none transition-all disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "",
        error:
          "border-feedback-error focus:border-feedback-error focus:ring-feedback-error/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface InputProps
  extends
    Omit<
      React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
      "as"
    >,
    VariantProps<typeof inputVariants> {
  as?: "input" | "textarea";
  label?: string;
  error?: string;
  rows?: number;
}

export default function Input({
  as: Component = "input",
  variant,
  className,
  label,
  error,
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <div className="w-full flex flex-col gap-2.5">
      {label && (
        <label htmlFor={inputId}>
          <Text
            variant="body-base"
            className="text-text-primary font-semibold uppercase"
          >
            {label}
          </Text>
        </label>
      )}

      <Component
        id={inputId}
        className={cn(
          inputVariants({
            variant: error ? "error" : variant,
            className,
          }),
        )}
        {...(props as React.ComponentPropsWithRef<any>)}
      />

      {error && (
        <Text variant="body-sm" className="text-feedback-error">
          {error}
        </Text>
      )}
    </div>
  );
}
