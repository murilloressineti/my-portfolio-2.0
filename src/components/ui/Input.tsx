import type React from "react";
import { useId } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

import Text from "./Text";

const inputVariants = cva(
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

interface InputSharedProps extends VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
}

// A união discrimina eventos e atributos próprios de input e textarea a partir de `as`.
type InputProps = InputSharedProps & (
  | ({ as?: "input"; } & React.ComponentPropsWithoutRef<"input">)
  | ({ as: "textarea"; } & React.ComponentPropsWithoutRef<"textarea">)
);

export default function Input({
  variant,
  className,
  label,
  error,
  id,
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const errorId = `${inputId}-error`;
  // Mantém as descrições do consumidor e acrescenta o erro apenas enquanto ele existir.
  const descriptionIds = [describedBy, error ? errorId : undefined]
    .filter(Boolean)
    .join(" ") || undefined;
  const controlProps = {
    id: inputId,
    "aria-invalid": error ? true : invalid,
    "aria-describedby": descriptionIds,
    className: cn(inputVariants({ variant: error ? "error" : variant, className })),
  };
  let control: React.ReactNode;
  if (props.as === "textarea") {
    const { as: Component, ...nativeProps } = props;
    control = <Component {...nativeProps} {...controlProps} />;
  } else {
    const { as: Component = "input", ...nativeProps } = props;
    control = <Component {...nativeProps} {...controlProps} />;
  }
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

      {control}

      {error && (
        <Text id={errorId} variant="body-sm" className="text-feedback-error">
          {error}
        </Text>
      )}
    </div>
  );
}
