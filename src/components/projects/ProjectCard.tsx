import type React from "react";
import { useEffect, useRef, useState } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "react-router-dom";

import { cn } from "../../lib/utils";

import { Button, Icon, Tag, Text } from "../ui";
import type { AvailableTechs } from "../ui/Tag";
import { ProjectThumbnail } from "./";

import { ArrowUpRight, GitHubLogo } from "@/assets/icons";

// min-w-0 permite encolher texto e listas dentro dos layouts flex sem alargar a página.
const projectCardVariants = cva("flex min-w-0 w-full", {
  variants: {
    variant: {
      default: "flex-col lg:flex-row items-start gap-6 md:gap-12",
      grid: "flex-col items-start gap-7",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ProjectCardProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof projectCardVariants> {
  imageLoading?: "eager" | "lazy";
  headingAs?: "h2" | "h3";
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageDetails: string;
  githubUrl?: string;
  deployUrl?: string;
  techs: AvailableTechs[];
}

export default function ProjectCard({
  id,
  headingAs = "h3",
  imageLoading = "lazy",
  variant = "default",
  title,
  description,
  imageSrc,
  githubUrl,
  deployUrl,
  techs,
  className,
  imageDetails,
  ...props
}: ProjectCardProps) {
  // Compatibilidade com os dados compartilhados: este campo não deve ser encaminhado ao DOM.
  void imageDetails;
  const [isAtEnd, setIsAtEnd] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // O elemento sentinela no fim das tags controla a indicação visual de conteúdo ainda fora da área visível.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtEnd(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (endRef.current) {
      observer.observe(endRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const desktopTechs = techs.slice(0, 3);
  const remainingCount = techs.length - 3;
  const projectLink = `/projetos/${id}`;

  return (
    <div className={cn(projectCardVariants({ variant, className }))} {...props}>
      {/* Capa do projeto */}
      <Link
        to={projectLink}
        className={cn(
          "shrink-0 block w-full",
          variant === "default" ? "lg:w-auto" : "md:w-full",
        )}
      >
        <ProjectThumbnail
          src={imageSrc}
          loading={imageLoading}
          alt={`Preview do projeto ${title}`}
          variant="default"
          animate={true}
          className="w-full"
        />
      </Link>

      {/* Informações e ações */}
      <div className="flex flex-col min-w-0 flex-1 w-full">
        <div
          className={cn(
            "flex w-full gap-5",
            variant === "grid"
              ? "flex-col items-start"
              : "flex-col md:flex-row md:justify-between md:items-center",
          )}
        >
          <Link to={projectLink} className="flex-1">
            <Text
              variant="h3"
              as={headingAs}
              className={cn(
                "hover:text-brand-primary transition-all duration-300 cursor-pointer",
                "line-clamp-1",
              )}
            >
              {title}
            </Text>
          </Link>

          <div className="flex gap-3 shrink-0">
            {githubUrl && (
              <Button
                as="a"
                href={githubUrl}
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

            {deployUrl && (
              <Button
                as="a"
                href={deployUrl}
                target="_blank"
                variant="projectDeploy"
                shape="rectangular"
              >
                Acessar <Icon svg={ArrowUpRight} animate="rotate" />
              </Button>
            )}
          </div>
        </div>
        
        {/* Descrição do projeto */}
        <Text
          variant="body-lg"
          className={cn(
            "text-text-secondary opacity-70 mt-7 md:mt-12",
            variant === "grid"
              ? "line-clamp-3 md:mt-7"
              : "line-clamp-3 md:line-clamp-none",
          )}
        >
          {description}
        </Text>

        {/* Tecnologias do projeto */}
        <div className="relative mt-5 w-full">
          <div
            className={cn(
              "flex gap-3 overflow-x-auto no-scrollbar w-full",
              variant === "grid" ? "md:hidden" : "md:flex md:flex-wrap",
            )}
          >
            {techs.slice(0, 5).map(
              (tech, index) => (
                <Tag
                  key={`${tech}-${index}`}
                  dot={tech}
                  size="default"
                  className="shrink-0"
                >
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </Tag>
              ),
            )}

            <div ref={endRef} className="w-1 shrink-0" />{" "}
            <div
              className={cn(
                "absolute top-0 right-0 h-full w-12 bg-linear-to-l from-bg-surface to-transparent pointer-events-none md:hidden transition-opacity duration-300",
                isAtEnd ? "opacity-0" : "opacity-100",
              )}
            />
          </div>
          
          {/* Resumo de tecnologias no desktop */}
          {variant === "grid" && (
            <div className="hidden md:flex items-center gap-2">
              {desktopTechs.map((tech, index) => (
                <Tag key={`${tech}-${index}`} dot={tech} size="sm">
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </Tag>
              ))}
              {remainingCount > 0 && (
                <Text variant="body-sm" className="text-text-secondary">
                  +{remainingCount}
                </Text>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
