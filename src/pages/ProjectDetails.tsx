import { motion, MotionConfig } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";

import { projects } from "../constants";

import { fadeUp } from "@/lib/motion";

import { CTASection, Section } from "../components/layout";
import { ProjectCard, ProjectThumbnail } from "../components/projects";
import { Button, Icon, Tag, Text } from "../components/ui";

import { ArrowLeft, ArrowUpRight, GitHubLogo } from "@/assets/icons";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // Percorre os anteriores do mais próximo ao mais antigo e continua pelo fim da lista.
  const currentIndex = projects.findIndex((p) => p.id === id);
  const relatedProjects = [
    ...projects.slice(0, currentIndex).reverse(),
    ...projects.slice(currentIndex + 1).reverse(),
  ].slice(0, 3);

  return (
    <MotionConfig reducedMotion="user">
      <div data-reduced-motion>
        <Section id="content" className="md:pb-20">
          <div className="flex flex-col mb-20">
            <motion.div {...fadeUp}>
              <Button
                as={Link}
                to="/projetos"
                variant="wrapper"
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
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row gap-6 justify-between"
            >
              <Text as="h1" variant="h2">
                {project.title}
              </Text>
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
            </motion.div>
          </div>
          <div className="flex flex-col gap-12 max-w-220">
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <Text as="h2" variant="h3">
                Techs
              </Text>
              <div className="flex flex-wrap gap-3">
                {project.techs.map((tech) => (
                  <Tag
                    key={tech}
                    dot={tech}
                    size="default"
                    className="shrink-0"
                  >
                    {tech.charAt(0).toUpperCase() + tech.slice(1)}
                  </Tag>
                ))}
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <Text as="h2" variant="h3">
                Descrição do projeto
              </Text>
              <Text variant="body-lg" className="text-text-secondary">
                {project.description}
              </Text>
            </motion.div>
            {project.sections.map((section, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className="flex flex-col gap-4"
              >
                <Text as="h2" variant="h3">
                  {section.title}
                </Text>
                <ul className="flex flex-col gap-1">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-text-primary font-bold text-lg leading-none mt-1.5">
                        •
                      </span>
                      <Text variant="body-lg" className="text-text-secondary">
                        {item}
                      </Text>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="pt-20">
            {project.imageDetails && (
              <ProjectThumbnail
                src={project.imageDetails}
                alt={`Preview do projeto ${project.title}`}
                variant="full"
                animate={false}
              />
            )}
          </motion.div>
        </Section>
        <Section id="related-projects" className="bg-bg-surface">
          <div className="flex flex-col gap-2 mb-20">
            <motion.div {...fadeUp}>
              <Text variant="ui-headline" className="text-gradient-gray">
                Portfólio
              </Text>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <Text as="h2" variant="h2" className="uppercase font-normal">
                Veja os{" "}
                <strong className="font-semibold">outros projetos</strong>
              </Text>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {relatedProjects.map((item, index) => (
              <motion.div
                key={item.id}
                {...fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard
                  className="w-full items-center justify-center"
                  variant="grid"
                  {...item}
                  techs={item.techs}
                />
              </motion.div>
            ))}
          </div>
        </Section>
        <CTASection />
      </div>
    </MotionConfig>
  );
}
