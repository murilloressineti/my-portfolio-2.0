import * as Images from "../assets/images/projects";
import type { AvailableTechs } from "../components/ui/Tag";

export interface ProjectContent {
  title: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageDetails: string;
  githubUrl?: string;
  deployUrl?: string;
  techs: AvailableTechs[];
  sections: ProjectContent[];
}

export const projects: Project[] = [
  // Agenda Petshop
  {
    id: "agendamento-petshop",
    title: "Agenda Petshop",
    description:
      "Aplicação web para agendamento de serviços em petshop, desenvolvida em JavaScript com controle de horários e organização automática dos atendimentos por período do dia.",
    imageSrc: Images.AgendaPetThumb,
    imageDetails: Images.AgendaPetDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/javascript/desafios/agendamento-petshop",
    deployUrl: "https://agendapet.netlify.app/",
    techs: ["HTML", "CSS", "javaScript", "figma"],
    sections: [
      {
        title: "Minha atuação",
        items: [
          "Desenvolvi a interface e a lógica de agendamento em JavaScript, permitindo cadastrar clientes, serviços, datas e horários.",
          "Implementei a organização automática dos atendimentos entre manhã, tarde e noite para facilitar a visualização da agenda.",
          "Construí a atualização dinâmica dos horários e agendamentos por meio da manipulação do DOM e das interações do usuário.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Controlar horários disponíveis e impedir seleções inválidas, conflitos de agenda e agendamentos em horários passados.",
          "Sincronizar os dados dos agendamentos com a interface para refletir imediatamente inclusões e alterações realizadas pelo usuário.",
          "Manipular datas e horários com Day.js, mantendo as regras de disponibilidade organizadas dentro da lógica da aplicação.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Aprofundei meus fundamentos de JavaScript ao desenvolver regras de negócio e interações sem abstrações de frameworks.",
          "Evoluí na manipulação do DOM, eventos, módulos e organização da lógica em funções com responsabilidades específicas.",
          "Fortaleci minha compreensão sobre estado e atualização de interfaces, criando uma base importante para minha evolução posterior com React.",
        ],
      },
    ],
  },

  // Hair Day
  {
    id: "hair-day",
    title: "Hair Day",
    description:
      "Aplicação web para gerenciamento de agendamentos, desenvolvida com React e TypeScript para organizar clientes e horários disponíveis ao longo do dia.",
    imageSrc: Images.HairDayThumb,
    imageDetails: Images.HairDayDetails,
    githubUrl: "https://github.com/murilloressineti/react-rocketseat/tree/main/hair-day",
    deployUrl: "https://apphairday.vercel.app/",
    techs: ["react", "tailwind", "typeScript", "figma"],
    sections: [
      {
        title: "Minha atuação",
        items: [
          "Desenvolvi a interface em React e TypeScript, organizando o fluxo de cadastro e visualização dos agendamentos.",
          "Estruturei a aplicação em componentes reutilizáveis, separando responsabilidades entre interface, dados e regras da aplicação.",
          "Implementei o gerenciamento dos horários e atualizações da agenda a partir das interações realizadas pelo usuário.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Organizar o estado da agenda para manter a interface sincronizada após inclusões e alterações nos agendamentos.",
          "Distribuir responsabilidades entre componentes e funções, evitando concentração excessiva da lógica em uma única parte da aplicação.",
          "Trabalhar com datas e horários preservando consistência entre os dados disponíveis e sua representação na interface.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Reforcei fundamentos do React ao transformar regras de uma aplicação em componentes, estados e interações de interface.",
          "Evoluí na organização de código TypeScript e na separação de responsabilidades dentro de uma aplicação React.",
          "Aprofundei minha compreensão sobre atualização de estado e renderização da interface a partir das ações do usuário.",
        ],
      },
    ],
  },

  // Help Desk
  {
    id: "help-desk",
    title: "Help Desk",
    description:
      "Sistema Full Stack de gerenciamento de chamados com autenticação, controle de acesso por perfis e integração entre React, API REST e banco de dados PostgreSQL.",
    imageSrc: Images.HelpDeskThumb,
    imageDetails: Images.HelpDeskDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/help-desk",
    deployUrl: "https://webhelpdesk.vercel.app/",
    techs: [
      "react",
      "tailwind",
      "typeScript",
      "node.js",
      "express",
      "prisma",
      "postgreSQL",
      "zod",
      "JWT",
      "React Hook Form",
      "figma",
    ],
    sections: [
      {
        title: "Minha atuação",
        items: [
          "Desenvolvi a aplicação Full Stack integrando interface em React e TypeScript, API com Node.js e Express e banco de dados PostgreSQL.",
          "Implementei autenticação com JWT e controle de acesso para Administrador, Técnico e Cliente, criando fluxos e permissões específicos para cada perfil.",
          "Construí funcionalidades para gerenciamento de usuários, técnicos, serviços e chamados, incluindo status, serviços adicionais, avatar e alteração de senha.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Estruturar diferentes fluxos de navegação e regras de negócio de acordo com as permissões dos três perfis de usuário.",
          "Modelar os relacionamentos entre usuários, técnicos, serviços e chamados utilizando Prisma ORM e PostgreSQL.",
          "Integrar frontend, API e banco de dados mantendo autenticação, validações e tratamento consistente dos estados da aplicação.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Consolidei conhecimentos Full Stack ao conectar React, Node.js, Express, Prisma e PostgreSQL em uma aplicação completa.",
          "Evoluí na organização de projetos maiores, aplicando componentização, separação de responsabilidades e reutilização de código.",
          "Aprofundei minha compreensão de regras de negócio, autenticação, modelagem de dados e comunicação entre frontend e backend.",
        ],
      },
    ],
  },

  // DSR Gráfica
  {
    id: "dsr-grafica",
    title: "DSR Gráfica",
    description:
      "Site institucional desenvolvido para uma gráfica com mais de 40 anos de atuação, transformando um briefing e design profissional em uma experiência web responsiva, animada e publicada em domínio próprio.",
    imageSrc: Images.DSRGraficaThumb,
    imageDetails: Images.DSRGraficaDetails,
    githubUrl: "https://github.com/murilloressineti/dsr-grafica-2.0",
    deployUrl: "https://dsrgrafica.com.br/",
    techs: ["react", "tailwind", "typeScript", "Framer Motion", "figma"],
    sections: [
      {
        title: "Minha atuação",
        items: [
          "Transformei o layout desenvolvido em Figma em uma aplicação React responsiva, preservando identidade visual, hierarquia e experiência proposta no design.",
          "Estruturei a interface em componentes reutilizáveis e variantes de estilo, utilizando TypeScript, Tailwind CSS e Class Variance Authority.",
          "Implementei animações, interações e comportamento responsivo, além de configurar domínio próprio e publicação da aplicação em produção.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Reproduzir com fidelidade o design em diferentes resoluções, adaptando elementos e conteúdos sem comprometer a experiência visual.",
          "Construir componentes flexíveis com diferentes variantes de estilo e comportamento, reduzindo duplicações ao longo da interface.",
          "Equilibrar animações e interações visuais com responsividade e desempenho, especialmente durante transições e efeitos de scroll.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Aprimorei a transformação de interfaces do Figma em componentes React reutilizáveis e responsivos.",
          "Evoluí na criação de animações com Framer Motion e na construção de componentes com múltiplas variantes.",
          "Ganhei experiência na entrega de uma solução para um negócio real, desde o entendimento das necessidades até a publicação em produção.",
        ],
      },
    ],
  },

  // Refund
  {
    id: "refund",
    title: "Refund",
    description:
      "Aplicação web para solicitação e gerenciamento de reembolsos, desenvolvida em React e TypeScript com autenticação, integração com API, envio de comprovantes, filtros e paginação.",
    imageSrc: Images.RefundThumb,
    imageDetails: Images.RefundDetails,
    githubUrl:
      "https://github.com/murilloressineti/react-rocketseat/tree/main/refund-system-web",
    deployUrl: "https://refundsystemweb.vercel.app/",
    techs: [
      "react",
      "tailwind",
      "typeScript",
      "axios",
      "React Hook Form",
      "zod",
      "figma",
    ],
    sections: [
      {
        title: "Minha atuação",
        items: [
          "Desenvolvi o front-end da aplicação em React e TypeScript, estruturando páginas e componentes reutilizáveis a partir do design proposto.",
          "Integrei a interface à API REST com Axios, implementando o envio, consulta e gerenciamento das solicitações de reembolso.",
          "Construí o formulário com validações, upload de comprovantes, filtros e paginação para os diferentes fluxos da aplicação.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Integrar diferentes operações da API à interface, mantendo os dados das solicitações sincronizados ao longo da aplicação.",
          "Tratar requisições assíncronas, estados de carregamento, erros e feedbacks durante as interações com a API.",
          "Organizar o formulário, filtros e paginação de forma reutilizável, preservando tipagem e consistência entre os componentes.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Aprofundei minha experiência com React e TypeScript na construção de uma aplicação conectada a uma API REST.",
          "Evoluí no consumo de APIs, tratamento de operações assíncronas e gerenciamento dos dados recebidos pelo front-end.",
          "Consolidei práticas de componentização, tipagem e separação de responsabilidades na construção de aplicações React.",
        ],
      },
    ],
  },
];
