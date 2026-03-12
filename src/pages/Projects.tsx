import React, { useState } from "react";
import { Section, CTASection } from "../components/layout";
import { Button, Icon, Text } from "../components/ui";
import { ProjectCard } from "../components/projects";
import { projects } from "../constants";
import { ArrowDown } from "@/assets/icons";

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
        {/* Cabeçalho da Página */}
        <div className="flex flex-col gap-2 mb-20">
          <Text variant="ui-headline" className="text-gradient-gray">
            Portfólio
          </Text>
          <Text variant="h2" className="uppercase font-normal">
            <strong className="font-semibold">Trabalhos</strong> recentes
          </Text>
        </div>

        {/* Lista de Cards de Projeto */}
        <div className="flex flex-col w-full overflow-hidden gap-12">
          {projects.slice(0, visibleCount).map((project, index, array) => (
            <React.Fragment key={project.id}>
              <ProjectCard {...project} techs={project.techs as any} />

              {/* Linha divisória dinâmica */}
              {index < array.length - 1 && (
                <hr className="border-border-default" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Botão de Ação: Carregar Mais */}
        {hasMoreProjects && (
          <div className="flex items-center justify-center mt-24">
            <Button
              variant="tertiary"
              shape="rectangular"
              onClick={handleShowMore}
            >
              Mostrar mais <Icon svg={ArrowDown} animate="down" />
            </Button>
          </div>
        )}
      </Section>

      {/* Footer CTA Section */}
      <CTASection />
    </main>
  );
}
