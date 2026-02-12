import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import ProjectThumbnail from "./projectThumbnail";
import Text from "./text";
import Button from "./button";
import Icon from "./icon";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg?react";
import GitHubLogo from "../assets/icons/github-logo.svg?react";
import Tag from "./tag";

export const projectCardVariants = cva(
  "flex flex-col md:flex-row gap-7 md:gap-12 items-start",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

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
  variant,
  title,
  description,
  imageSrc,
  githubUrl,
  deployUrl,
  techs,
  className,
  ...props
}: ProjectCardProps) {
  return (
    <div className={cn(projectCardVariants({ variant, className }))} {...props}>
      <ProjectThumbnail
        src={imageSrc}
        alt={`Preview do projeto ${title}`}
        variant="default"
        animate={true}
        className="w-full md:w-auto shrink-0"
      />

      <div className="flex flex-col">
        <div className="flex justify-between items-center w-full">
          <Text variant="h3" as="h3">
            {title}
          </Text>

          <div className="flex gap-3">
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
          className="text-text-secondary opacity-70 mt-12"
        >
          {description}
        </Text>

        <div className="flex flex-wrap gap-3 mt-5">
          {techs.map((tech) => (
            <Tag key={tech} dot={tech}>
              {/* Deixa a primeira letra maiúscula para o nome da tag */}
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
