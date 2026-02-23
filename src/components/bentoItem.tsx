import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import Text from "./text";

export const bentoItemVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BentoItemProps
  extends React.ComponentProps<"div">, VariantProps<typeof bentoItemVariants> {
  image: string;
  title: string;
  textPosition?: "top" | "bottom";
}

export default function BentoItem({
  image,
  title,
  textPosition = "bottom",
  className,
  ...props
}: BentoItemProps) {
  return (
    <div
      className={cn("flex flex-col  gap-6 w-full h-full group", className)}
      {...props}
    >
      {textPosition === "top" && (
        <div className="h-56 md:h-auto bg-neutral-gray-100 p-6 rounded-lg">
          <Text variant="body-base" className="text-text-secondary">
            {title}
          </Text>
        </div>
      )}

      <div className="h-56 md:h-94 w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {textPosition === "bottom" && (
        <div className="h-56 md:h-auto bg-neutral-gray-100 p-6 rounded-lg">
          <Text variant="body-base" className="text-text-secondary">
            {title}
          </Text>
        </div>
      )}
    </div>
  );
}
