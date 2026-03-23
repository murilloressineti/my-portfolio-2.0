import { useState, useEffect } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn, fadeUp, fadeRight } from "@/lib";
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
  const [animation, setAnimation] = useState<any>(fadeUp); // Estado inicial para a animação

  // O useEffect só roda dentro do navegador do usuário. É a forma segura de dizer: "Ei React, só tente medir a tela quando você tiver certeza de que já chegou no navegador do cliente".
  useEffect(() => {
    // Detecta como se fosse um scanner se é mobile ou desktop para escolher a animação
    const isMobile = window.innerWidth < 768; // breakpoint para mobile
    setAnimation(isMobile ? fadeRight : fadeUp); // Define a animação com base no tipo de dispositivo
  }, []); // Executa apenas uma vez na montagem do componente

  return (
    <motion.div
      {...animation}
      {...props}
      className={cn(
        "flex flex-col gap-6 w-full h-full md:max-h-126 group",
        String(desktopOrder || ""), // Converte para string para evitar problemas de tipo
        String(mobileOrder || ""), // Converte para string para evitar problemas de tipo
        className,
      )}
    >
      {/* Texto no Top */}
      {textPosition === "top" && ( // Renderiza o texto apenas se a posição for "top"
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
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu backface-hidden will-change-transform"
        />
      </div>

      {/* Texto no Bottom */}
      {textPosition === "bottom" && ( // Renderiza o texto apenas se a posição for "bottom"
        <div className="flex items-start md:items-center w-full h-1/4 p-6 rounded-lg bg-neutral-100">
          <Text variant="body-base" className="text-text-secondary">
            {title}
          </Text>
        </div>
      )}
    </motion.div>
  );
}
