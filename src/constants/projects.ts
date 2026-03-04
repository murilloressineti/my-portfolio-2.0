import ThumbImg from "../assets/images/thumbnail/thumb.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  githubUrl: string;
  deployUrl: string;
  techs: string[];
  functions: string;
  contribution: string;
  challenge: string;
}

export const projects: Project[] = [
  {
    id: "rocket-movies",
    title: "RocketMovies",
    description:
      "Desenvolvi uma plataforma Full-Stack para o cadastro e gerenciamento de filmes, oferecendo uma experiência intuitiva para o usuário organizar sua biblioteca pessoal. A aplicação permite registrar detalhes como nome, descrição e nota, além de categorizar filmes com tags personalizadas.",
    imageSrc: ThumbImg,
    githubUrl: "https://github.com/murilloressineti",
    deployUrl: "https://www.google.com/",
    techs: ["react", "tailwind", "typescript", "figma"],
    functions: "Cadastro completo de filmes, incluindo nome, descrição e nota",
    contribution:
      "Construção da interface visual interativa utilizando ReactJS, com estruturação eficiente via ViteJS e estilização modular com Styled Components.",
    challenge:
      "O principal desafio foi a integração fluida e eficiente entre o Front-end e o Back-end, garantindo a comunicação de dados.",
  },
  {
    id: "agenda-petshop",
    title: "Agenda Petshop",
    description:
      "O Agenda Petshop é um sistema de agendamento que otimiza a gestão de atendimentos para estabelecimentos do ramo. A plataforma permite o registro de informações completas como nome do tutor, nome do pet, telefone, descrição do serviço, data e horário do atendimento. Os agendamentos são organizados automaticamente por períodos do dia (manhã, tarde e noite), garantindo uma interface clara e funcional.",
    imageSrc: ThumbImg,
    githubUrl: "https://github.com/murilloressineti",
    deployUrl: "https://www.google.com/",
    techs: ["react", "tailwind", "typescript", "figma"],
    functions: "-",
    contribution: "-",
    challenge: "-",
  },
  {
    id: "sorteador-de-numeros",
    title: "Sorteador de Números",
    description:
      "Este projeto é um sorteador de números interativo que oferece ao usuário controle total sobre a aleatoriedade. Permite definir um intervalo numérico personalizado, escolher a quantidade de números a serem sorteados e decidir se deseja incluir ou excluir números repetidos. ",
    imageSrc: ThumbImg,
    githubUrl: "https://github.com/murilloressineti",
    deployUrl: "https://www.google.com/",
    techs: ["react", "tailwind", "typescript", "figma"],
    functions: "-",
    contribution: "-",
    challenge: "-",
  },
  {
    id: "landing-page",
    title: "Landing Page - Clube de Assinatura de Livros",
    description:
      "Landing page responsiva e visualmente atraente para um clube de assinatura de livros. O objetivo foi criar uma experiência informativa e envolvente, destacando o produto e capturando a atenção do visitante.",
    imageSrc: ThumbImg,
    githubUrl: "https://github.com/murilloressineti",
    deployUrl: "https://www.google.com/",
    techs: ["react", "tailwind", "typescript", "figma"],
    functions: "-",
    contribution: "-",
    challenge: "-",
  },
];
