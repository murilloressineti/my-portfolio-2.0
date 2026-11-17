import {
  cubicBezier,
  motion,
  type TargetAndTransition,
  type Variants,
} from "framer-motion";

import { LogoMr, LogoText } from "@/assets/logo";

type MaskVariant = TargetAndTransition & { WebkitMaskImage: string };

const originalMaskEase = cubicBezier(0.19, 1, 0.22, 1);

// O raio fixo evita o gradiente de raio zero no Safari; p² preserva a trajetória original.
const fixedRadiusMaskEase = (time: number) => {
  const progress = originalMaskEase(time);

  return progress * progress;
};

const maskVariants = {
  initial: {
    opacity: 1,
    maskImage:
      "radial-gradient(circle 150vw at 50% 50%, transparent 0%, black 0%)",
    WebkitMaskImage:
      "radial-gradient(circle 150vw at 50% 50%, transparent 0%, black 0%)",
  },
  exit: {
    maskImage:
      "radial-gradient(circle 150vw at 50% 50%, transparent 100%, black 100%)",
    WebkitMaskImage:
      "radial-gradient(circle 150vw at 50% 50%, transparent 100%, black 100%)",
    transition: {
      duration: 1.2,
      ease: fixedRadiusMaskEase,
    },
  },
} satisfies Record<"initial" | "exit", MaskVariant>;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
  exit: {
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
      }}
    >
      <motion.div
        className="flex items-center gap-4 md:gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="shrink-0">
          <LogoMr className="h-8 md:h-11 w-auto" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <LogoText className="h-4 md:h-6 w-auto" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
