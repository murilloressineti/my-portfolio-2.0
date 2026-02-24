import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import ProjectThumbnail from "./projectThumbnail";
import Text from "../../components/ui/text";
import Button from "../../components/ui/button";
import Icon from "../../components/ui/icon";
import ArrowUpRight from "../../assets/icons/arrow-up-right.svg?react";
import GitHubLogo from "../../assets/icons/github-logo.svg?react";
import Tag from "../../components/ui/tag";

export const projectCardVariants = cva("flex min-w-0 w-full", {
  variants: {
    variant: {
      default: "flex-col md:flex-row items-start gap-7 md:gap-12",
      grid: "flex-col items-start gap-7",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ProjectCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof projectCardVariants> {
  title: string;
  description: string;
  imageSrc: string;
  githubUrl?: string;
  deployUrl?: string;
  techs: Array<"react" | "tailwind" | "typescript" | "figma" | "git">;
}

export default function ProjectCard({
  variant = "default",
  title,
  description,
  imageSrc,
  githubUrl,
  deployUrl,
  techs,
  className,
  ...props
}: ProjectCardProps) {
  const desktopTechs = techs.slice(0, 3);
  const remainingCount = techs.length - 3;
  return (
    <div className={cn(projectCardVariants({ variant, className }))} {...props}>
      <ProjectThumbnail
        src={imageSrc}
        alt={`Preview do projeto ${title}`}
        variant="default"
        animate={true}
        className={cn(
          "w-full shrink-0",
          variant === "grid" ? "md:w-full md:h-auto" : "w-full shrink-0",
        )}
      />

      <div className="flex flex-col min-w-0 w-full">
        <div
          className={cn(
            "flex w-full gap-5",
            variant === "grid"
              ? "flex-col items-start"
              : "flex-col md:flex-row md:justify-between md:items-start",
          )}
        >
          <Text variant="h3" as="h3" className="flex-1">
            {title}
          </Text>

          <div className="flex gap-3 shrink-0">
            {githubUrl && (
              <Button
                as="a"
                href={githubUrl}
                target="_blank"
                variant="quinary"
                shape="square"
                className="gap-0 flex items-center overflow-hidden transition-all duration-500 ease-in-out rounded-md hover:pr-6"
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

            {deployUrl && (
              <Button
                as="a"
                href={deployUrl}
                target="_blank"
                variant="tertiary"
                shape="rectangular"
              >
                Acessar <Icon svg={ArrowUpRight} animate={true} />
              </Button>
            )}
          </div>
        </div>

        <Text
          variant="body-large"
          className={cn(
            "text-text-secondary opacity-70 mt-7 md:mt-12",
            variant === "grid"
              ? "line-clamp-3 md:mt-7"
              : "line-clamp-3 md:line-clamp-none",
          )}
        >
          {description}
        </Text>

        <div className="relative mt-5 w-full">
          {/* Versão MOBILE: Scroll Horizontal com Fade */}
          <div
            className={cn(
              "flex gap-3 overflow-x-auto no-scrollbar w-full",
              // No Desktop, escondemos esse container de scroll se for o modo grid
              variant === "grid" ? "md:hidden" : "md:flex md:flex-wrap",
            )}
          >
            {techs.map((tech) => (
              <Tag key={tech} dot={tech} size="default" className="shrink-0">
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </Tag>
            ))}
            {/* Gradiente de Fade (Mobile Only) */}
            <div className="absolute top-0 right-0 h-full w-12 bg-linear-to-l from-bg-surface to-transparent pointer-events-none md:hidden" />
          </div>

          {/* Versão DESKTOP (Grid): Padrão +X */}
          {variant === "grid" && (
            <div className="hidden md:flex items-center gap-3">
              {desktopTechs.map((tech) => (
                <Tag key={tech} dot={tech} size="sm">
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </Tag>
              ))}
              {remainingCount > 0 && (
                <Text variant="body-small" className="text-text-secondary ml-1">
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
