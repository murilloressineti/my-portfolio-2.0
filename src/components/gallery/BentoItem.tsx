import { motion, type HTMLMotionProps } from "framer-motion";
import { cn, fadeUp } from "@/lib";
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
  return (
    <motion.div
      {...fadeUp} // Aciona a animação de scroll em cada card individualmente
      {...props}
      className={cn(
        "flex flex-col gap-6 w-full h-full md:max-h-126 group",
        String(desktopOrder || ""),
        String(mobileOrder || ""),
        className,
      )}
    >
      {/* Texto no Top */}
      {textPosition === "top" && (
        <div className="flex items-start md:items-center w-full h-1/4 p-6 rounded-lg bg-neutral-100">
          <Text variant="body-base" className="text-text-secondary">
            {title}
          </Text>
        </div>
      )}

      {/* Container da Imagem */}
      <div className="h-3/4 w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Texto no Bottom */}
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
