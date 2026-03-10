import React from "react";
import {
  Footsprints,
  GraduationCap,
  PencilRuler,
  RocketLaunch,
} from "@/assets/icons";

export interface TimelineStep {
  side: "left" | "right";
  title: string;
  description: string;
  date: string;
  badgeText: string;
  badgeIcon: React.ElementType;
}

export const timelineSteps: TimelineStep[] = [
  {
    side: "left",
    title: "*Primeiros passos* na programação",
    description: "Introdução à lógica e fundamentos.",
    date: "Setembro 2022",
    badgeText: "Início da Jornada",
    badgeIcon: Footsprints
  },
  {
    side: "right",
    title: "Descobrindo o *front-end*",
    description:
      "Foco em interfaces visuais, culminando no Projeto RocketMovies.",
    date: "Março 2023",
    badgeText: "Desenvolvimento Web",
    badgeIcon: PencilRuler
  },
  {
    side: "left",
    title: "Formação *Full-Stack*",
    description:
      "Aprofundamento técnico, elevando o conhecimento para o desenvolvimento web completo.",
    date: "Agosto 2024",
    badgeText: "Expansão Técnica",
    badgeIcon: RocketLaunch
  },
  {
    side: "right",
    title: "Atuação e *ensino superior*",
    description:
      "Início como Assistente de Sistemas no IJC e do curso de Análise e Desenvolvimento de Sistemas.",
    date: "Janeiro 2025",
    badgeText: "Início Profissional e Acadêmico",
    badgeIcon: GraduationCap
  },
];
