import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Button, Icon, Tag, Text } from "../ui";
import { ProjectThumbnail } from "./";
import { ArrowUpRight, GitHubLogo } from "@/assets/icons";
import type { AvailableTechs } from "../ui/Tag";

export const projectCardVariants = cva("flex min-w-0 w-full", {
  // min-w-0 para garantir que o texto dentro do card possa encolher corretamente
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
  extends
    React.HTMLAttributes<HTMLDivElement>, // Permite passar atributos comuns de div, como className, style, etc.
    VariantProps<typeof projectCardVariants> {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageDetails: string;
  githubUrl?: string;
  deployUrl?: string;
  techs: AvailableTechs[]; // Array de tecnologias usadas no projeto, por exemplo: ["react", "nodejs", "typescript"]
}

export default function ProjectCard({
  id,
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
  const [isAtEnd, setIsAtEnd] = useState(false); // Estado para controlar se o usuário chegou ao fim da lista de tecnologias
  const endRef = useRef<HTMLDivElement>(null); // Referência para a "bandeirinha" invisível no final da lista de tecnologias

  useEffect(() => {
    // Criamos o "Guarda" (Observer)
    const observer = new IntersectionObserver( // O IntersectionObserver é uma API do navegador que permite observar quando um elemento entra ou sai da área visível (viewport). Ele é perfeito para detectar quando o usuário chega ao fim da lista de tecnologias.
      ([entry]) => {
        // Se a "bandeirinha" (endRef) estiver visível, isAtEnd vira true
        setIsAtEnd(entry.isIntersecting);
      },
      { threshold: 0.1 }, // Avisa quando pelo menos 10% da bandeira aparecer
    );

    if (endRef.current) {
      // Se a referência estiver pronta, começamos a observar
      observer.observe(endRef.current);
    }

    return () => observer.disconnect(); // Limpa o guarda quando sairmos da página
  }, []);

  const desktopTechs = techs.slice(0, 3); // Pegamos apenas as 3 primeiras tecnologias para mostrar na visualização em grid
  const remainingCount = techs.length - 3; // Calculamos quantas tecnologias sobraram para mostrar o contador "+X" na visualização em grid
  const projectLink = `/projetos/${id}`; // Link para a página de detalhes do projeto, usando o ID fornecido

  return (
    <div className={cn(projectCardVariants({ variant, className }))} {...props}>
      {/* THUMBNAIL */}
      <Link
        to={projectLink}
        className={cn(
          "shrink-0 block w-full",
          variant === "default" ? "lg:w-auto" : "md:w-full",
        )}
      >
        <ProjectThumbnail
          src={imageSrc}
          alt={`Preview do projeto ${title}`}
          variant="default"
          animate={true}
          className="w-full"
        />
      </Link>

      {/* HEADER: TÍTULO E BOTÕES */}
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
              as="h3"
              className={cn(
                "hover:text-brand-primary transition-all duration-300 cursor-pointer",
                variant === "grid" ? "line-clamp-1" : "line-clamp-1",
              )}
            >
              {title}
            </Text>
          </Link>

          <div className="flex gap-3 shrink-0">
            {githubUrl && ( // Exibe o botão do GitHub apenas se a URL for fornecida
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

            {deployUrl && ( // Exibe o botão de acesso apenas se a URL for fornecida
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

        {/* DESCRIÇÃO */}
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

        {/* TECNOLOGIAS */}
        <div className="relative mt-5 w-full">
          {/* DEFAULT  */}
          <div
            className={cn(
              "flex gap-3 overflow-x-auto no-scrollbar w-full",
              variant === "grid" ? "md:hidden" : "md:flex md:flex-wrap",
            )}
          >
            {techs.map(
              (
                tech,
                index, // tech aqui é o nome da tecnologia, por exemplo: "react", "nodejs", etc. index é o número do índice no array, usado para criar uma key única para cada Tag
              ) => (
                <Tag
                  key={`${tech}-${index}`} // Usa o nome da tecnologia e o índice para criar uma key única para cada Tag
                  dot={tech}
                  size="default"
                  className="shrink-0"
                >
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </Tag>
                // Exibe o nome da tecnologia com a primeira letra maiúscula
              ),
            )}
            {/*"Bandeirinha"
            invisível no final da lista, usada para detectar quando o usuário
            chegou ao fim da rolagem*/}
            <div ref={endRef} className="w-1 shrink-0" />{" "}
            <div
              className={cn(
                "absolute top-0 right-0 h-full w-12 bg-linear-to-l from-bg-surface to-transparent pointer-events-none md:hidden transition-opacity duration-300",
                isAtEnd ? "opacity-0" : "opacity-100", // Se chegou no fim, fica invisível
              )}
            />
          </div>

          {/* GRID VIEW  */}
          {variant === "grid" && ( // Na visualização em grid, mostramos apenas as 3 primeiras tecnologias e um contador de quantas mais existem, para evitar poluição visual. Na visualização padrão, mostramos todas as tecnologias.
            <div className="hidden md:flex items-center gap-3">
              {desktopTechs.map((tech, index) => (
                <Tag key={`${tech}-${index}`} dot={tech} size="sm">
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </Tag>
              ))}
              {remainingCount > 0 && ( // Se houver mais de 3 tecnologias, mostramos o contador "+X"
                <Text variant="body-sm" className="text-text-secondary ml-1">
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
