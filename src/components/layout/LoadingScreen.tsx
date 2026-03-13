import { motion, type Variants } from "framer-motion";
import { LogoMr, LogoText } from "@/assets/logo";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
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

const maskVariants: Variants = {
  initial: {
    opacity: 1,
    maskImage:
      "radial-gradient(circle 0px at 50% 50%, transparent 0%, black 0%)",
    WebkitMaskImage:
      "radial-gradient(circle 0px at 50% 50%, transparent 0%, black 0%)",
  } as any,
  exit: {
    maskImage:
      "radial-gradient(circle 150vw at 50% 50%, transparent 100%, black 100%)",
    WebkitMaskImage:
      "radial-gradient(circle 150vw at 50% 50%, transparent 100%, black 100%)",
    transition: {
      duration: 1.2,
      ease: [0.19, 1, 0.22, 1],
    },
  } as any,
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
