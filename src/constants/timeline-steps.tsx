import React from "react";
import FootPrints from "../assets/icons/footprints.svg?react";
import PencilRuler from "../assets/icons/pencil-ruler.svg?react";
import RocketLaunch from "../assets/icons/rocket-launch.svg?react";
import GraduationCap from "../assets/icons/graduation-cap.svg?react";

export interface TimelineStep {
  side: "left" | "right";
  title: string;
  description: string;
  date: string;
  badgeText: string;
  badgeIcon: React.ReactNode;
}

export const timelineSteps: TimelineStep[] = [
  {
    side: "left",
    title: "*Primeiros passos* na programação",
    description: "Introdução à lógica e fundamentos.",
    date: "Setembro 2022",
    badgeText: "Início da Jornada",
    badgeIcon: <FootPrints className="w-6 h-6" />,
  },
  {
    side: "right",
    title: "Descobrindo o *front-end*",
    description:
      "Foco em interfaces visuais, culminando no Projeto RocketMovies.",
    date: "Março 2023",
    badgeText: "Desenvolvimento Web",
    badgeIcon: <PencilRuler className="w-6 h-6" />,
  },
  {
    side: "left",
    title: "Formação *Full-Stack*",
    description:
      "Aprofundamento técnico, elevando o conhecimento para o desenvolvimento web completo.",
    date: "Agosto 2024",
    badgeText: "Expansão Técnica",
    badgeIcon: <RocketLaunch className="w-6 h-6" />,
  },
  {
    side: "right",
    title: "Atuação e *ensino superior*",
    description:
      "Início como Assistente de Sistemas no IJC e do curso de Análise e Desenvolvimento de Sistemas.",
    date: "Janeiro 2025",
    badgeText: "Início Profissional e Acadêmico",
    badgeIcon: <GraduationCap className="w-6 h-6" />,
  },
];
