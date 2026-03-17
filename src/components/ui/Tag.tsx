import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import Text from "./Text";

export const tagVariants = cva(
  "py-1.5 px-3 inline-flex items-center rounded-md border border-border-default bg-bg-default transition-colors duration-300 hover:bg-neutral-100 cursor-default hover:shadow-sm",
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-transparent",
      },
      size: {
        default: "gap-4",
        sm: "gap-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const dotHexColors = {
  // Base
  HTML: "#E65100",
  CSS: "#214CE5",
  javaScript: "#F0DC4E",
  typeScript: "#3178C6",

  // Front-end
  react: "#61DAFB",
  tailwind: "#38BDF8",
  axios: "#671DDF",
  "styled-components": "#d273ad",

  // Back-end
  "node.js": "#339933",
  express: "#000000",

  // Database & ORM
  prisma: "#0D344B",
  postgreSQL: "#336791",

  // Segurança e Validação
  zod: "#3178C6",
  JWT: "#F30058",
  bcrypt: "#323330",

  // Design e Versionamento
  figma: "#874FFF",
  git: "#F34F29",
} as const;

export type AvailableTechs = keyof typeof dotHexColors;

interface TagProps
  extends React.ComponentProps<"div">, VariantProps<typeof tagVariants> {
  dot?: AvailableTechs;
}

export default function Tag({
  variant,
  size,
  dot = "react",
  className,
  children,
  ...props
}: TagProps) {
  const selectedHex = dotHexColors[dot];
  const textClasses =
    size === "sm"
      ? "text-lg leading-relaxed tracking-normal font-normal"
      : "text-2xl leading-snug tracking-tight font-normal";

  return (
    <div
      className={cn(tagVariants({ variant, size, className }), "group")}
      {...props}
    >
      <span
        className={cn(
          "rounded-full shrink-0 h-3 w-3 transition-all duration-300",
          size === "sm" ? "group-hover:scale-115" : "group-hover:scale-125",
        )}
        style={{
          backgroundColor: selectedHex,
          // O valor 33 em hexadecimal é igual a 51 em decimal, que representa exatamente 20% de 255.
          boxShadow: `0 0 0 4px ${selectedHex}33`,
        }}
      />

      <Text className={textClasses}>{children}</Text>
    </div>
  );
}
