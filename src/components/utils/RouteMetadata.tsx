import { useEffect } from "react";

import { matchPath, useLocation } from "react-router-dom";

import { projects } from "@/constants/projects";

interface PageMetadata {
  title: string;
  description: string;
}

// Metadados das páginas
const pages: Record<string, PageMetadata> = {
  "/": {
    title: "Murillo Ressineti | Desenvolvedor Front-end",
    description: "Portfólio de Murillo Ressineti, desenvolvedor front-end com React e TypeScript. Conheça meus projetos, minha trajetória e entre em contato.",
  },
  "/sobre": {
    title: "Sobre mim | Murillo Ressineti",
    description: "Conheça a trajetória, a formação e os interesses de Murillo Ressineti no desenvolvimento de interfaces web.",
  },
  "/projetos": {
    title: "Projetos | Murillo Ressineti",
    description: "Explore os projetos de Murillo Ressineti: interfaces responsivas, aplicações React e TypeScript e soluções para negócios reais.",
  },
  "/contato": {
    title: "Contato | Murillo Ressineti",
    description: "Entre em contato com Murillo Ressineti para conversar sobre oportunidades e projetos de desenvolvimento front-end.",
  },
};

// Atualização das tags de metadados
function updateMeta(attribute: "name" | "property", key: string, content: string) {
  // Reutiliza as tags do HTML inicial e das rotas anteriores para não acumulá-las na navegação.
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.append(meta);
  }
  meta.content = content;
}

// A atualização depende de JavaScript: robôs que não o executam recebem os metadados gerais do HTML.
export default function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Seleção dos metadados da rota
    const route = Object.keys(pages).find((path) => matchPath({ path, end: true }, pathname));
    const details = matchPath("/projetos/:id", pathname);
    const project = details && projects.find(({ id }) => id === details.params.id);
    let metadata: PageMetadata;
    if (project) {
      metadata = {
        title: `${project.title} | Murillo Ressineti`,
        description: project.description,
      };
    } else if (route) {
      metadata = pages[route];
    } else {
      metadata = {
        title: "Página não encontrada | Murillo Ressineti",
        description: "A página procurada não foi encontrada. Explore os projetos ou entre em contato com Murillo Ressineti.",
      };
    }

    // Aplicação ao documento
    document.title = metadata.title;
    updateMeta("name", "description", metadata.description);
    updateMeta("property", "og:title", metadata.title);
    updateMeta("property", "og:description", metadata.description);
    updateMeta("name", "twitter:title", metadata.title);
    updateMeta("name", "twitter:description", metadata.description);
  }, [pathname]);

  return null;
}
