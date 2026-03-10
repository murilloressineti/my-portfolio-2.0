import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const projectThumbnailVariants = cva(
  "relative flex items-end justify-center overflow-hidden rounded-md bg-neutral-100",
  {
    variants: {
      variant: {
        default: "w-full h-full",
        full: "w-full h-57.25 md:h-280.5 items-center",
      },
      animate: {
        false: "",
        true: "group cursor-pointer transition-all duration-500 hover:bg-neutral-200",
      },
    },
    defaultVariants: {
      variant: "default",
      animate: false,
    },
  },
);

interface ProjectThumbnailProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof projectThumbnailVariants> {
  src: string;
  alt: string;
}

export default function ProjectThumbnail({
  variant,
  animate,
  src,
  alt,
  className,
  ...props
}: ProjectThumbnailProps) {
  return (
    <div
      className={cn(projectThumbnailVariants({ variant, animate, className }))}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-auto h-auto max-w-[90%] max-h-[90%] object-contain object-bottom drop-shadow-xl",
          animate && "transition-transform duration-500 group-hover:scale-105",
        )}
      />
    </div>
  );
}
