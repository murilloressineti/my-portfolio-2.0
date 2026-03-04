import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../constants/projects";
import { Section, CTASection } from "../components/layout";
import { Tag, Text, Button, Icon } from "../components/ui";
import ArrowLeft from "../assets/icons/arrow-down.svg?react";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg?react";
import GitHubLogo from "../assets/icons/github-logo.svg?react";
import { ProjectCard, ProjectThumbnail } from "../components/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) return null;

  return (
    <main>
      <Section id="header" className="pt-14 md:pt-60 pb-20">
        <div className="flex flex-col">
          <a
            className="flex text-neutral-gray-400 mb-2 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <Icon svg={ArrowLeft} className="fill-neutral-gray-400" /> Voltar
          </a>

          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <Text variant="h1">{project.title}</Text>

            <div className="flex gap-3 shrink-0">
              {project.githubUrl && (
                <Button
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  variant="quinary"
                  shape="square"
                  className="group gap-0 flex items-center overflow-hidden transition-all duration-500 ease-in-out rounded-md hover:pr-6"
                >
                  <Icon svg={GitHubLogo} />
                  <Text
                    variant="action-button"
                    className="max-w-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-w-25 group-hover:opacity-100 group-hover:ml-2"
                  >
                    GITHUB
                  </Text>
                </Button>
              )}

              {project.deployUrl && (
                <Button
                  as="a"
                  href={project.deployUrl}
                  target="_blank"
                  variant="tertiary"
                  shape="rectangular"
                >
                  Acessar <Icon svg={ArrowUpRight} animate="rotate" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section id="content" className="py-10 md:py-20">
        <div className="flex flex-col gap-15 max-w-240">
          {/* Techs */}
          <div className="flex flex-col gap-6">
            <Text variant="h3" className="text-text-primary">
              Techs
            </Text>
            <div className="flex flex-wrap gap-3">
              {project.techs.map((tech) => (
                <Tag
                  key={tech}
                  dot={tech as any}
                  size="default"
                  className="shrink-0"
                >
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </Tag>
              ))}
            </div>
          </div>

          {/* Descrição */}
          <div className="flex flex-col gap-4">
            <Text variant="h3" className=" text-text-primary">
              Descrição do projeto
            </Text>
            <Text
              variant="body-large"
              className="text-text-secondary opacity-80 leading-relaxed"
            >
              {project.description}
            </Text>
          </div>

          {/* Listas Dinâmicas (Funções, Contribuição e Desafios) */}
          {[
            { title: "Minhas funções no projeto", list: project.functions },
            { title: "Minha Contribuição", list: project.contribution },
            { title: "Desafios e Aprendizados", list: project.challenge },
          ].map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <Text variant="h3" className=" text-text-primary">
                {section.title}
              </Text>
              <ul className="flex flex-col gap-4">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-text-primary mt-1.5">•</span>
                    <Text
                      variant="body-large"
                      className="text-text-secondary opacity-80"
                    >
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-18">
        {/* Preview do Projeto */}

        {project.imageDetails && (
          <ProjectThumbnail
            src={project.imageDetails}
            alt={`Preview do projeto ${project.title}`}
            variant="full"
            animate={true}
          />
        )}
      </Section>

      <Section className="bg-bg-surface">
        <div className="flex flex-col gap-2 mb-20">
          <Text
            variant="headline-medium"
            className="uppercase text-gradient-gray"
          >
            Portfólio
          </Text>
          <Text
            variant="h3"
            className="text-text-primary uppercase font-normal"
          >
            Veja os <strong className="font-semibold">outros projetos</strong>
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects
            .filter((p) => p.id !== id) // Não mostra o projeto que já está aberto
            .slice(0, 3)
            .map((item) => (
              <ProjectCard
                className="w-full items-center justify-center"
                key={item.id}
                variant="grid"
                {...item}
                techs={item.techs as any}
              />
            ))}
        </div>
      </Section>

      <CTASection />
    </main>
  );
}
