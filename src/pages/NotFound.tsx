import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "../components/layout";
import { Button, Icon, Text } from "../components/ui";
import { ArrowUpRight } from "@assets/icons";
import { fadeUp } from "@/lib/motion";

export default function NotFound() {
  return (
    <main>
      <Section
        id="not-found"
        className="flex min-h-[90vh] flex-col items-center justify-center text-left"
      >
        <div className="flex flex-col gap-6 max-w-190 mx-auto">
          {/* Título Principal */}
          <motion.div {...fadeUp}>
            <Text variant="h2" className="text-3xl md:text-3xl lg:text-4xl uppercase font-normal">
              <strong className="font-semibold">Ops!</strong> Parece que você se
              perdeu no caminho.
            </Text>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
            <Text variant="body-lg" className="text-text-secondary">
              A página que você procura não existe ou foi movida. Não se
              preocupe, use os botões abaixo para voltar ao início ou entrar em
              contato.
            </Text>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center mt-12 md:mt-18 w-full"
        >
          <Button
            as={Link}
            to="/"
            variant="primary"
            className="justify-center py-4.5 md:w-65 whitespace-nowrap"
          >
            Voltar ao Início
            <Icon
              svg={ArrowUpRight}
              className="fill-neutral-white"
              animate="rotate"
            />
          </Button>

          <Button
            as={Link}
            to="/contato"
            variant="secondary"
            className="justify-center py-4.5 md:w-65 whitespace-nowrap"
          >
            Entre em contato
            <Icon svg={ArrowUpRight} animate="rotate" />
          </Button>
        </motion.div>
      </Section>
    </main>
  );
}
