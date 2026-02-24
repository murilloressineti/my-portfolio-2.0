import React from "react";
import { cn } from "../lib/utils";
import Text from "./text";

interface BentoItemProps extends React.ComponentProps<"div"> {
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
      className={cn("flex flex-col gap-6 md:w-full md:h-full group", className)}
      {...props}
    >
      {textPosition === "top" && (
        <div className="bg-neutral-gray-100 p-6 rounded-lg">
          <Text variant="body-base" className="text-text-secondary">
            {title}
          </Text>
        </div>
      )}

      <div className="md:h-94 w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {textPosition === "bottom" && (
        <div className="bg-neutral-gray-100 p-6 rounded-lg">
          <Text variant="body-base" className="text-text-secondary">
            {title}
          </Text>
        </div>
      )}
    </div>
  );
}
