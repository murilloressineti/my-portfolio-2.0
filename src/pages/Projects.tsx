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

  // Verifica se ainda existem projetos para mostrar
  const hasMoreProjects = visibleCount < projects.length;

  // Função para carregar mais 3 projetos
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // prevCount é o número atual de projetos visíveis, e adicionamos 3 a ele
  };

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
          {/* Faz uma cópia do array de projetos, reverte a ordem para mostrar os mais recentes primeiro, e depois limita a quantidade de projetos mostrados com base no estado visibleCount */}
          {[...projects]
            .reverse()
            .slice(0, visibleCount)
            .map(
              (
                project,
                index,
                array, // "Ei, aluno (project), você está na posição X (index), você é o último da fila inteira (array.length)? Se você for o último, eu não vou te dar uma linha de separação."
              ) => (
                <motion.div
                  key={project.id}
                  {...fadeUp}
                  transition={{ delay: index * 0.05 }} // Adiciona um pequeno delay incremental para cada card, criando um efeito de cascata
                >
                  {/* Passa as propriedades do projeto para o componente ProjectCard, incluindo as tecnologias usadas no projeto */}
                  <ProjectCard {...project} techs={project.techs as any} />
                  {/* Adiciona uma linha divisória entre os projetos, exceto após o último projeto */}
                  {index < array.length - 1 && (
                    <hr className="border-border-default mt-12" />
                  )}
                </motion.div>
              ),
            )}
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
