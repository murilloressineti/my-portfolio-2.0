import { useParams, useNavigate } from "react-router-dom";
import { Section, CTASection } from "../components/layout";
import { Tag, Text, Button, Icon } from "../components/ui";
import { ProjectCard, ProjectThumbnail } from "../components/projects";
import { projects } from "../constants";
import { ArrowLeft, ArrowUpRight, GitHubLogo } from "@/assets/icons";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) return null;

  return (
    <main>
      {/* SEÇÃO PRINCIPAL: DETALHES DO PROJETO */}
      <Section id="content" className="md:pb-20">
        {/* HEADER: TÍTULO E BOTÕES */}
        <div className="flex flex-col mb-20">
          <Button
            variant="wrapper"
            onClick={() => navigate(-1)}
            className="group flex w-fit items-center gap-2 p-0 mb-2"
          >
            <Icon
              svg={ArrowLeft}
              className="fill-neutral-400 group-hover:fill-neutral-black"
            />
            <Text
              variant="ui-headline"
              className="text-neutral-400 transition-all duration-300 group-hover:text-neutral-black"
            >
              Voltar
            </Text>
          </Button>

          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <Text variant="h2">{project.title}</Text>

            <div className="flex gap-3 shrink-0">
              {project.githubUrl && (
                <Button
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  variant="projectGithub"
                  shape="square"
                  className="gap-0 overflow-hidden transition-all duration-500 ease-in-out hover:pr-6"
                >
                  <Icon svg={GitHubLogo} />
                  <Text
                    variant="ui-action"
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
                  variant="projectDeploy"
                  shape="rectangular"
                >
                  Acessar <Icon svg={ArrowUpRight} animate="rotate" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-12 max-w-220">
          {/* Techs */}
          <div className="flex flex-col gap-4">
            <Text variant="h3">Techs</Text>
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
            <Text variant="h3">Descrição do projeto</Text>
            <Text variant="body-lg" className="text-text-secondary opacity-80">
              {project.description}
            </Text>
          </div>

          {/* Listas Dinâmicas (Funções, Contribuição e Desafios) */}
          {project.sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              {/* Título da Seção */}
              <Text variant="h3" className="uppercase">
                {section.title}
              </Text>

              <ul className="flex flex-col gap-1">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    {/* Bullet point */}
                    <span className="text-text-primary font-bold text-lg leading-none mt-1.5">
                      •
                    </span>

                    <Text
                      variant="body-lg"
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

        {/* Preview do Projeto */}
        <div className="pt-20">
          {project.imageDetails && (
            <ProjectThumbnail
              src={project.imageDetails}
              alt={`Preview do projeto ${project.title}`}
              variant="full"
              animate={false}
            />
          )}
        </div>
      </Section>

      {/* SEÇÃO DE SUGESTÕES: OUTROS PROJETOS */}
      <Section id="related-projects" className="bg-bg-surface">
        <div className="flex flex-col gap-2 mb-20">
          <Text variant="ui-headline" className="text-gradient-gray">
            Portfólio
          </Text>
          <Text variant="h2" className="uppercase font-normal">
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
