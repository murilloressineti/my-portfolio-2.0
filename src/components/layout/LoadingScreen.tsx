import { motion, type Variants } from "framer-motion";
import { LogoMr, LogoText } from "@/assets/logo";

const maskVariants: Variants = {
  // Variantes para a máscara do loader, controlando a animação de entrada e saída
  initial: {
    opacity: 1,
    maskImage:
      "radial-gradient(circle 0px at 50% 50%, transparent 0%, black 0%)", // Inicia com uma máscara circular pequena no centro, revelando o conteúdo gradualmente
    WebkitMaskImage:
      "radial-gradient(circle 0px at 50% 50%, transparent 0%, black 0%)",
  } as any,
  exit: {
    maskImage:
      "radial-gradient(circle 150vw at 50% 50%, transparent 100%, black 100%)", // Anima para uma máscara circular grande, ocultando o conteúdo gradualmente
    WebkitMaskImage:
      "radial-gradient(circle 150vw at 50% 50%, transparent 100%, black 100%)",
    transition: {
      duration: 1.2,
      ease: [0.19, 1, 0.22, 1],
    },
  } as any,
};

const containerVariants: Variants = {
  // Variantes para o container do loader, controlando a animação dos filhos
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6, // Controla o atraso entre a animação de cada item. A LogoMr aparece primeiro, e o LogoText aparece logo em seguida
    },
  },
};

const itemVariants: Variants = {
  // Variantes para os itens do loader, controlando a animação de entrada e saída
  hidden: { opacity: 0, x: 100 }, // Inicia com opacidade 0 e deslocado para a direita
  visible: {
    opacity: 1, // Anima para opacidade 1 e posição original
    x: 0, // Anima para a posição original
    transition: {
      // Controla a duração e a curva de animação
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
  exit: {
    // Animação de saída, onde o item desaparece e fica desfocado
    opacity: 0,
    filter: "blur(10px)",
    transition: { duration: 0.4 },
  },
};

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-neutral-black overflow-hidden"
      variants={maskVariants}
      initial="initial"
      exit="exit"
      style={{
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        transform: "translateZ(0)", // Garante que a animação seja suave, evitando problemas de renderização
        backfaceVisibility: "hidden", // Evita que o conteúdo fique desfocado durante a animação
        perspective: 1000, // Adiciona perspectiva para melhorar a suavidade da animação, especialmente em dispositivos móveis
      }}
    >
      <motion.div
        className="flex items-center gap-4 md:gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo MR */}
        <motion.div variants={itemVariants} className="shrink-0">
          <LogoMr className="h-8 md:h-11 w-auto" />
        </motion.div>

        {/* Logo Text */}
        <motion.div variants={itemVariants}>
          <LogoText className="h-4 md:h-6 w-auto" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
