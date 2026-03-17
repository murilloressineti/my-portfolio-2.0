import { useState } from "react";
import { motion } from "framer-motion";
import { Section, CTASection } from "../components/layout";
import { Button, Icon, Text } from "../components/ui";
import { ProjectCard } from "../components/projects";
import { projects } from "../constants";
import { ArrowDown } from "@/assets/icons";
import { fadeUp } from "@/lib/motion";

export default function Projects() {
  // Estado para controlar quantos projetos mostrar (começa com 3)
  const [visibleCount, setVisibleCount] = useState(3);

  // Função para carregar mais 3 projetos
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  // Verifica se ainda existem projetos para mostrar
  const hasMoreProjects = visibleCount < projects.length;

  return (
    <main>
      <Section id="portfolio">
        {/* Cabeçalho da Página: Título e subtítulo com delay */}
        <div className="flex flex-col gap-2 mb-20">
          <motion.div {...fadeUp}>
            <Text variant="ui-headline" className="text-gradient-gray">
              Portfólio
            </Text>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <Text variant="h2" className="uppercase font-normal">
              <strong className="font-semibold">Trabalhos</strong> recentes
            </Text>
          </motion.div>
        </div>

        {/* Lista de Cards de Projeto */}
        <div className="flex flex-col w-full overflow-hidden gap-12">
          {[...projects].reverse().slice(0, visibleCount).map((project, index, array) => (
            <motion.div
              key={project.id}
              {...fadeUp}
              transition={{ delay: index * 0.05 }}
            >
              <ProjectCard {...project} techs={project.techs as any} />

              {index < array.length - 1 && (
                <hr className="border-border-default mt-12" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Botão de Ação: Carregar Mais */}
        {hasMoreProjects && (
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center mt-24"
          >
            <Button
              variant="tertiary"
              shape="rectangular"
              onClick={handleShowMore}
            >
              Mostrar mais <Icon svg={ArrowDown} animate="down" />
            </Button>
          </motion.div>
        )}
      </Section>

      {/* Footer CTA Section */}
      <CTASection />
    </main>
  );
}
