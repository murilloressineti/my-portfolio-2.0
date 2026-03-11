import * as Images from "../assets/images/projectsThumbnail";

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
  techs: string[];
  sections: ProjectContent[];
}
export const projects: Project[] = [
  {
    id: "rocket-movies",
    title: "RocketMovies",
    description:
      "Desenvolvi uma plataforma Full-Stack para o cadastro e gerenciamento de filmes, oferecendo uma experiência intuitiva para o usuário organizar sua biblioteca pessoal. A aplicação permite registrar detalhes como nome, descrição e nota, além de categorizar filmes com tags personalizadas.",
    imageSrc: Images.RocketThumb,
    imageDetails: Images.RocketDetails,
    githubUrl: "https://github.com/murilloressineti",
    deployUrl: "https://www.google.com/",
    techs: ["react", "react", "react", "react"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Cadastro completo de filmes e notas",
          "Sistema de tags dinâmicas",
          "Gerenciamento de perfil de usuário",
        ],
      },
      {
        title: "Minha Contribuição",
        items: [
          "Construção da interface visual com Styled Components",
          "Estruturação do Back-end com Node.js e Express",
        ],
      },
      {
        title: "Desafios e Aprendizados",
        items: [
          "Integração fluida entre Front e Back-end",
          "Consumo de API com tratamento de erros global",
        ],
      },
    ],
  },

  {
    id: "agenda-petshop",
    title: "Agenda Petshop",
    description:
      "O Agenda Petshop é um sistema de agendamento que otimiza a gestão de atendimentos para estabelecimentos do ramo. A plataforma permite o registro de informações completas como nome do tutor, nome do pet, telefone, descrição do serviço, data e horário do atendimento. Os agendamentos são organizados automaticamente por períodos do dia (manhã, tarde e noite), garantindo uma interface clara e funcional.",
    imageSrc: Images.RocketThumb,
    imageDetails: Images.RocketDetails,
    githubUrl: "https://github.com/murilloressineti",
    deployUrl: "https://www.google.com/",
    techs: ["tailwind", "tailwind", "tailwind", "tailwind"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Cadastro completo de filmes e notas",
          "Sistema de tags dinâmicas",
          "Gerenciamento de perfil de usuário",
        ],
      },
      {
        title: "Minha Contribuição",
        items: [
          "Construção da interface visual com Styled Components",
          "Estruturação do Back-end com Node.js e Express",
        ],
      },
      {
        title: "Desafios e Aprendizados",
        items: [
          "Integração fluida entre Front e Back-end",
          "Consumo de API com tratamento de erros global",
        ],
      },
    ],
  },

  {
    id: "sorteador-de-numeros",
    title: "Sorteador de Números",
    description:
      "Este projeto é um sorteador de números interativo que oferece ao usuário controle total sobre a aleatoriedade. Permite definir um intervalo numérico personalizado, escolher a quantidade de números a serem sorteados e decidir se deseja incluir ou excluir números repetidos. ",
    imageSrc: Images.RocketThumb,
    imageDetails: Images.RocketDetails,
    githubUrl: "https://github.com/murilloressineti",
    deployUrl: "https://www.google.com/",
    techs: ["typescript", "typescript", "typescript", "typescript"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Cadastro completo de filmes e notas",
          "Sistema de tags dinâmicas",
          "Gerenciamento de perfil de usuário",
        ],
      },
      {
        title: "Minha Contribuição",
        items: [
          "Construção da interface visual com Styled Components",
          "Estruturação do Back-end com Node.js e Express",
        ],
      },
      {
        title: "Desafios e Aprendizados",
        items: [
          "Integração fluida entre Front e Back-end",
          "Consumo de API com tratamento de erros global",
        ],
      },
    ],
  },

  {
    id: "landing-page",
    title: "Landing Page - Clube de Assinatura de Livros",
    description:
      "Landing page responsiva e visualmente atraente para um clube de assinatura de livros. O objetivo foi criar uma experiência informativa e envolvente, destacando o produto e capturando a atenção do visitante.",
    imageSrc: Images.RocketThumb,
    imageDetails: Images.RocketDetails,
    githubUrl: "https://github.com/murilloressineti",
    deployUrl: "https://www.google.com/",
    techs: ["figma", "figma", "figma", "figma"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Cadastro completo de filmes e notas",
          "Sistema de tags dinâmicas",
          "Gerenciamento de perfil de usuário",
        ],
      },
      {
        title: "Minha Contribuição",
        items: [
          "Construção da interface visual com Styled Components",
          "Estruturação do Back-end com Node.js e Express",
        ],
      },
      {
        title: "Desafios e Aprendizados",
        items: [
          "Integração fluida entre Front e Back-end",
          "Consumo de API com tratamento de erros global",
        ],
      },
    ],
  },
];
