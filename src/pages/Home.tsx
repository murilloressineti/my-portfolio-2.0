import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Section, CTASection, LoadingScreen } from "../components/layout";
import { Button, Icon, Tag, Text } from "../components/ui";
import { ProjectCard } from "../components/projects";
import { projects } from "../constants";
import { ArrowUpRight } from "@/assets/icons";
import { staggerContainer, childItem, fadeUp } from "@/lib/motion";

export default function Home() {
  const [showLoader, setShowLoader] = useState(() => {
    const hasLoaded = sessionStorage.getItem("portfolioLoaded");
    return !hasLoaded;
  });

  const [loaderFinished, setLoaderFinished] = useState(false);

  useEffect(() => {
    if (!showLoader) {
      setLoaderFinished(true);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("portfolioLoaded", "true");
      setShowLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [showLoader]);

  return (
    <>
      {/* Loader */}
      <AnimatePresence onExitComplete={() => setLoaderFinished(true)}>
        {showLoader && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* Conteúdo */}
      <motion.div
        key="site-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaderFinished ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <main>
          {/* Hero Section */}
          <Section
            id="hero"
            className="flex flex-col items-center justify-center text-center py-30 md:pt-40 md:pb-55"
          >
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={loaderFinished ? "animate" : "initial"}
              className="flex flex-col items-center justify-center max-w-258 mx-auto"
            >
              <motion.div variants={childItem}>
                <Text
                  variant="h1"
                  className="uppercase font-normal mb-4 md:mb-2"
                >
                  Desenvolvedor <br className="block lg:hidden" />
                  <strong className="font-semibold">front-end</strong>
                </Text>
              </motion.div>

              <motion.div variants={childItem}>
                <Text variant="body-lg" className="opacity-90 mb-6 md:mb-16">
                  Transformo ideias em experiências digitais intuitivas,
                  acessíveis e impactantes. <br />
                  Meu foco está em performance, propósito e design funcional.
                </Text>
              </motion.div>

              <motion.div
                variants={childItem}
                className="flex flex-col md:flex-row gap-3"
              >
                <Button
                  as={Link}
                  to="/projetos"
                  variant="primary"
                  shape="rectangular"
                >
                  Veja Meus Projetos
                </Button>

                <Button
                  as={Link}
                  to="/contato"
                  variant="secondary"
                  shape="rectangular"
                >
                  Entre em contato
                </Button>
              </motion.div>
            </motion.div>
          </Section>

          {/* About Section */}
          <Section id="aboutMe" className="bg-bg-surface flex flex-col">
            <motion.div
              {...fadeUp}
              className="border-l-5 border-brand-primary pl-8 mb-16 md:mb-22"
            >
              <Text variant="h2" className="md:text-3xl italic">
                Evoluir como pessoa é o meu maior projeto.
              </Text>
            </motion.div>

            <div className="flex flex-col gap-6 md:gap-12">
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                className="flex flex-col gap-2"
              >
                <Text variant="ui-headline" className="text-gradient-gray">
                  Sobre
                </Text>

                <Text variant="h3" className="uppercase font-normal">
                  Mais que <strong className="font-semibold">código</strong> e
                  interfaces
                </Text>
              </motion.div>

              <motion.hr
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.3 }}
                className="border-border-default"
              />

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-50"
              >
                <Text variant="body-lg" className="text-text-secondary">
                  Minha jornada começou com Python, mas foi no front-end que
                  encontrei meu caminho, onde estética e funcionalidade se
                  encontram.
                </Text>

                <Text variant="body-lg" className="text-text-secondary">
                  Desde então, desenvolvo interfaces com clareza e boas
                  práticas. Cada projeto fortalece meu repertório técnico e
                  minha visão sobre boas experiências digitais.
                </Text>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.5 }}
              >
                <Button
                  as={Link}
                  to="/sobre"
                  variant="tertiary"
                  shape="rectangular"
                  className="justify-center md:w-fit"
                >
                  Conheça minha trajetória{" "}
                  <Icon svg={ArrowUpRight} animate="rotate" />
                </Button>
              </motion.div>
            </div>
          </Section>

          {/* Skills Section */}
          <Section id="skills" className="py-60 md:py-60">
            <div className="flex flex-col items-center justify-center mx-auto">
              <motion.div {...fadeUp} className="text-center">
                <Text variant="ui-headline" className="text-gradient-gray mb-2">
                  Minhas Habilidades
                </Text>

                <Text variant="h2" className="uppercase font-normal mb-12">
                  <strong className="font-semibold">Tecnologias</strong> que
                  utilizo
                </Text>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {["react", "tailwind", "typescript", "figma", "git"].map(
                  (tech) => (
                    <Tag key={tech} dot={tech as any} size="default">
                      {tech.charAt(0).toUpperCase() + tech.slice(1)}
                    </Tag>
                  ),
                )}
              </motion.div>
            </div>
          </Section>

          {/* Projects Section */}
          <Section id="projects">
            <div className="flex flex-col gap-20">
              <motion.div {...fadeUp} className="flex flex-col gap-2">
                <Text
                  variant="ui-headline"
                  className="uppercase text-gradient-gray"
                >
                  Projetos
                </Text>

                <Text
                  variant="h2"
                  className="text-text-primary uppercase font-normal"
                >
                  Principais <strong className="font-semibold">desafios</strong>
                </Text>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                className="flex flex-col w-full gap-12"
              >
                {projects.slice(0, 2).map((project, index, array) => (
                  <React.Fragment key={project.id}>
                    <ProjectCard {...project} techs={project.techs as any} />

                    {index < array.length - 1 && (
                      <hr className="border-border-default" />
                    )}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </Section>

          <CTASection />
        </main>
      </motion.div>
    </>
  );
}
