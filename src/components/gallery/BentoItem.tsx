import { useState } from "react";

import { motion, type HTMLMotionProps } from "framer-motion";

import { imageMetadata } from "@/constants/image-metadata";
import { cn, fadeRight, fadeUp } from "@/lib";

import Text from "../ui/Text";

interface BentoItemProps extends HTMLMotionProps<"div"> {
  image: string;
  title: string;
  textPosition?: "top" | "bottom";
  desktopOrder?: number;
  mobileOrder?: number;
}

export default function BentoItem({
  image,
  title,
  textPosition = "bottom",
  className,
  desktopOrder,
  mobileOrder,
  ...props
}: BentoItemProps) {
  // A escolha é capturada na montagem, como no comportamento existente; não acompanha resize.
  const [animation] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768 ? fadeRight : fadeUp,
  );

  return (
    <motion.div
      {...animation}
      {...props}
      className={cn(
        "flex flex-col gap-6 w-full h-full md:max-h-126 group",
        String(desktopOrder || ""),
        String(mobileOrder || ""),
        className,
      )}
    >
      {/* Legenda superior */}
      {textPosition === "top" && (
        <div className="flex items-start md:items-center w-full h-1/4 p-6 rounded-lg bg-neutral-100">
          <Text variant="body-base" className="text-text-secondary">
            {title}
          </Text>
        </div>
      )}

      {/* Imagem da galeria */}
      <div className="h-3/4 w-full overflow-hidden rounded-lg">
        <img
          src={image}
          {...imageMetadata[image]}
          sizes="(min-width: 1024px) 320px, (min-width: 768px) calc(100vw - 160px), max(calc(100vw - 96px), 440px)"
          decoding="async"
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu backface-hidden will-change-transform"
        />
      </div>
      
      {/* Legenda inferior */}
      {textPosition === "bottom" && (
        <div className="flex items-start md:items-center w-full h-1/4 p-6 rounded-lg bg-neutral-100">
          <Text variant="body-base" className="text-text-secondary">
            {title}
          </Text>
        </div>
      )}
    </motion.div>
  );
}
