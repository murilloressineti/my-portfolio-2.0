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
        "flex flex-col gap-6 md:w-full md:min-h-126 group",
        String(desktopOrder || ""),
        String(mobileOrder || ""),
        className,
      )}
    >
      {/* Texto no Top */}
      {textPosition === "top" && (
        <div className="bg-neutral-100 p-6 rounded-lg">
          <Text variant="body-base" className="text-text-secondary">
            {title}
          </Text>
        </div>
      )}

      {/* Container da Imagem */}
      <div className="h-full w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Texto no Bottom */}
      {textPosition === "bottom" && (
        <div className="bg-neutral-100 p-6 rounded-lg">
          <Text variant="body-base" className="text-text-secondary">
            {title}
          </Text>
        </div>
      )}
    </motion.div>
  );
}
