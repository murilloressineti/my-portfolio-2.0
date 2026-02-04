import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import Text from "./text";

export const tagVariants = cva(
  "inline-flex items-center gap-4 px-3 py-1.5 rounded-lg border border-border-default bg-bg-default transition-colors duration-300 hover:bg-neutral-gray-100 cursor-default",
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const dotHexColors = {
  react: "#61DAFB",
  tailwind: "#38BDF8",
  typescript: "#3178C6",
  figma: "#874FFF",
  git: "#F34F29",
};

interface TagProps
  extends React.ComponentProps<"div">, VariantProps<typeof tagVariants> {
  dot?: keyof typeof dotHexColors;
  children: React.ReactNode;
}

export default function Tag({
  variant,
  dot = "react",
  className,
  children,
  ...props
}: TagProps) {
  const selectedHex = dotHexColors[dot];

  return (
    <div className={cn(tagVariants({ variant, className }))} {...props}>
      <span
        className="h-3 w-3 rounded-full shrink-0"
        style={{
          backgroundColor: selectedHex,
          // O valor 33 em hexadecimal é igual a 51 em decimal, que representa exatamente 20% de 255.
          boxShadow: `0 0 0 4px ${selectedHex}33`,
        }}
      />

      <Text variant="body-extra-large">{children}</Text>
    </div>
  );
}
