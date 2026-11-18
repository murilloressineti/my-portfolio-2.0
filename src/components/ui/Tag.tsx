import type React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

import Text from "./Text";

// Variantes de aparência
const tagVariants = cva(
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

// As chaves literais também definem as tecnologias aceitas pelas tags dos projetos.
const dotHexColors = {
  HTML: "#E65100",
  CSS: "#214CE5",
  javaScript: "#F0DC4E",
  typeScript: "#3178C6",

  react: "#61DAFB",
  tailwind: "#38BDF8",
  axios: "#671DDF",
  "React Hook Form": "#EC5990",
  "Framer Motion": "#BB4B96",
  "styled-components": "#D273AD",

  "node.js": "#339933",
  express: "#000000",

  prisma: "#0D344B",
  postgreSQL: "#336791",

  zod: "#3E67B1",
  JWT: "#F30058",
  bcrypt: "#323330",

  docker: "#2496ED",

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
      : "text-lg leading-snug tracking-tight font-normal";

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

          // O sufixo hexadecimal 33 aplica 20% de opacidade à mesma cor.
          boxShadow: `0 0 0 4px ${selectedHex}33`,
        }}
      />

      <Text className={textClasses}>{children}</Text>
    </div>
  );
}
