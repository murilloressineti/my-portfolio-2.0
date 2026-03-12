import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Text } from "../ui";
import { LogoSymbol } from "@/assets/logo";
import { fadeUp } from "@/lib/motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-black py-8 px-6 md:px-30">
      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="w-full max-w-420 mx-auto flex flex-row justify-between items-start md:items-center gap-4"
      >
        <Text variant="body-base" className="text-neutral-400">
          © {currentYear} Murillo Ressineti. Todos os direitos reservados.
        </Text>

        <div className="shrink-0">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar para o topo"
            className="group"
          >
            <LogoSymbol className="fill-neutral-400 transition-colors duration-300 group-hover:fill-neutral-white" />
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}