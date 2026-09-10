import React from "react";
import {
  Footsprints,
  GraduationCap,
  PencilRuler,
  RocketLaunch,
  Target,
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
    badgeIcon: Footsprints,
  },
  {
    side: "right",
    title: "Descobrindo o *front-end*",
    description:
      "HTML, CSS e JavaScript passam a direcionar meus estudos para desenvolvimento web.",
    date: "Março 2023",
    badgeText: "Desenvolvimento Web",
    badgeIcon: PencilRuler,
  },
  {
    side: "left",
    title: "Formação *Full-Stack*",
    description:
      "Aprofundamento em Front-end e Back-end através de projetos e novas tecnologias.",
    date: "Agosto 2024",
    badgeText: "Expansão Técnica",
    badgeIcon: RocketLaunch,
  },
  {
    side: "right",
    title: "Experiência e *ensino superior*",
    description:
      "Ingresso na área de sistemas e graduação em Análise e Desenvolvimento de Sistemas.",
    date: "Janeiro 2025",
    badgeText: "Evolução Profissional e Acadêmica",
    badgeIcon: GraduationCap,
  },
  {
    side: "left",
    title: "Especialização em *Interfaces*",
    description:
      "React e TypeScript aplicados em projetos completos e entregas reais  em produção.",
    date: "2026 — Atual",
    badgeText: "Direção Profissional",
    badgeIcon: Target,
  },
];
