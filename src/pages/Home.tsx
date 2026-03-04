import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Icon, Tag, Text } from "../components/ui";
import { Section, CTASection } from "../components/layout";
import { ProjectCard } from "../components/projects";
import { projects } from "../constants/projects";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg?react";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main>
      {/* Hero Section */}
      <Section
        id="hero"
        className="flex flex-col items-center justify-center text-center pb-60 md:pt-40 md:pb-55"
      >
        <div className="flex flex-col items-center justify-center max-w-258 mx-auto">
          <Text variant="hero" className="text-text-primary mb-4 md:mb-2">
            DESENVOLVEDOR <strong>FRONT-END</strong>
          </Text>

          <Text
            variant="body-hero"
            className="text-text-primary opacity-70 mb-6 md:mb-16"
          >
            Transformo ideias em experiências digitais intuitivas, acessíveis e
            impactantes. Meu foco está em performance, propósito e design
            funcional.
          </Text>

          <div className="flex flex-col md:flex-row gap-3">
            <Button
              variant="primary"
              shape="rectangular"
              onClick={() => navigate("/projetos")}
            >
              Veja Meus Projetos
            </Button>

            <Button
              variant="tertiary"
              shape="rectangular"
              onClick={() => navigate("/contato")}
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="aboutMe" className="bg-bg-surface flex flex-col">
        <div className="border-l-5 border-brand-primary pl-8 mb-16 md:mb-22">
          <Text variant="h2" className="italic text-text-primary">
            Evoluir como pessoa é o meu maior projeto.
          </Text>
        </div>

        <div className="flex flex-col gap-6 md:gap-12">
          <div className="flex flex-col gap-2">
            <Text
              variant="headline-medium"
              className="uppercase text-gradient-gray"
            >
              Sobre
            </Text>
            <Text
              variant="h3"
              className="text-text-primary uppercase font-normal"
            >
              Mais que <strong className="font-semibold">código</strong> e
              interfaces
            </Text>
          </div>

          <hr className="border-border-default" />

          {/* About Text Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-50">
            <Text variant="section-body" className="text-text-secondary">
              Minha jornada começou com Python, mas foi no front-end que
              encontrei meu caminho, onde estética e funcionalidade se
              encontram.
            </Text>
            <Text variant="section-body" className="text-text-secondary">
              Desde então, desenvolvo interfaces com clareza e boas práticas.
              Cada projeto fortalece meu repertório técnico e minha visão sobre
              boas experiências digitais.
            </Text>
          </div>

          {/* About Call to Action */}
          <Button
            variant="quaternary"
            shape="rectangular"
            className="justify-center md:w-fit"
            onClick={() => navigate("/sobre")}
          >
            Conheça minha trajetória{" "}
            <Icon svg={ArrowUpRight} animate="rotate" />
          </Button>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="flex flex-col items-center justify-center mx-auto">
          <Text variant="headline-medium" className="text-gradient-gray mb-2">
            Minhas Habilidades
          </Text>

          <Text
            variant="h1"
            className="uppercase font-normal mb-12 text-center"
          >
            <strong className="font-semibold">Tecnologias</strong> que utilizo
          </Text>

          {/* Tech Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Tag dot="react" size="default">
              React
            </Tag>
            <Tag dot="tailwind" size="default">
              Tailwind CSS
            </Tag>
            <Tag dot="typescript" size="default">
              TypeScript
            </Tag>
            <Tag dot="figma" size="default">
              Figma
            </Tag>
            <Tag dot="git" size="default">
              Git
            </Tag>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-2">
            <Text
              variant="headline-medium"
              className="uppercase text-gradient-gray"
            >
              Projetos
            </Text>
            <Text
              variant="h3"
              className="text-text-primary uppercase font-normal"
            >
              Principais <strong className="font-semibold">desafios</strong>
            </Text>
          </div>

          {/* ProjectCard */}
          <div className="flex flex-col w-full overflow-hidden gap-12">
            {projects.slice(0, 2).map((project, index, array) => (
              <React.Fragment key={project.id}>
                <ProjectCard {...project} techs={project.techs as any} />

                {/* Linha divisória, exceto após o último item */}
                {index < array.length - 1 && (
                  <hr className="border-border-default" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Projects Call to Action */}
          <div className="flex items-center justify-center">
            <Button
              variant="quaternary"
              shape="rectangular"
              className="justify-center md:w-fit"
              onClick={() => navigate("/projetos")}
            >
              Ver todos os projetos <Icon svg={ArrowUpRight} animate="rotate" />
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer CTA Section */}
      <CTASection />
    </main>
  );
}
