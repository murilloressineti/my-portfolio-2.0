import { useState } from "react";

import { motion, MotionConfig } from "framer-motion";

import { projects } from "../constants";

import { fadeUp } from "@/lib/motion";

import { CTASection, Section } from "../components/layout";
import { ProjectCard } from "../components/projects";
import { Button, Icon, Text } from "../components/ui";

import { ArrowDown } from "@/assets/icons";

export default function Projects() {
  // Exibição progressiva
  const [visibleCount, setVisibleCount] = useState(3);

  // Invertemos uma cópia para preservar a ordem dos dados compartilhados.
  const visibleProjects = [...projects].reverse().slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div data-reduced-motion>
        <Section id="portfolio">
          {/* Apresentação do portfólio */}
          <div className="flex flex-col gap-2 mb-20">
            <motion.div {...fadeUp}>
              <Text variant="ui-headline" className="text-gradient-gray">
                Portfólio
              </Text>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <Text as="h1" variant="h2" className="uppercase font-normal">
                <strong className="font-semibold">Trabalhos</strong> recentes
              </Text>
            </motion.div>
          </div>

          {/* Lista de projetos */}
          <div className="flex flex-col w-full overflow-hidden gap-12">
            {visibleProjects.map((project, index, array) => (
              <motion.div
                key={project.id}
                {...fadeUp}
                transition={{ delay: index * 0.05 }}
              >
                <ProjectCard
                  imageLoading={index === 0 ? "eager" : "lazy"}
                  headingAs="h2"
                  {...project}
                  techs={project.techs}
                />

                {index < array.length - 1 && (
                  <hr className="border-border-default mt-12" />
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Carregamento de mais projetos */}
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
        <CTASection />
      </div>
    </MotionConfig>
  );
}
