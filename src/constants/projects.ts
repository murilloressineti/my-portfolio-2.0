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
  // Portal Tech News
  {
    id: "portal-tech-news",
    title: "Portal Tech News",
    description:
      "Portal de notícias desenvolvido com CSS Grid, com foco em layouts modernos e responsivos. Estrutura organizada em múltiplas seções hierárquicas, seguindo protótipo do Figma.",
    imageSrc: Images.PortalTechNewsThumb,
    imageDetails: Images.PortalTechNewsDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/html-css/avan%C3%A7ando-no-html-e-css/projetos/portal-de-noticias",
    deployUrl: "https://portaltechnews.netlify.app/",
    techs: ["HTML", "CSS", "figma"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Estruturei toda a página utilizando HTML semântico, organizando corretamente seções como header, main, section e aside.",
          "Implementei o layout completo com CSS Grid, distribuindo os elementos em diferentes áreas da página de forma consistente.",
          "Realizei a estilização seguindo fielmente o protótipo do Figma, incluindo tipografia, espaçamentos e organização visual.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Compreender e aplicar corretamente o funcionamento do CSS Grid para estruturar um layout mais complexo.",
          "Organizar múltiplas seções com diferentes hierarquias visuais mantendo consistência no design.",
          "Adaptar o posicionamento dos elementos para evitar quebra de layout em diferentes resoluções.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Desenvolvi uma base sólida no uso de CSS Grid para criação de layouts mais estruturados e escaláveis.",
          "Passei a entender melhor como dividir a interface em áreas reutilizáveis e organizadas.",
          "Evoluí na leitura e interpretação de layouts no Figma, conseguindo transformar protótipos em código com mais precisão.",
        ],
      },
    ],
  },

  // Estrelas Do Amanha
  {
    id: "estrelas-do-amanha",
    title: "Estrelas Do Amanhã",
    description:
      "Formulário de matrícula escolar desenvolvido com HTML e CSS, com foco em estruturação, responsividade e organização visual. O projeto utiliza CSS Grid para distribuir diferentes tipos de campos com base em um layout do Figma.",
    imageSrc: Images.EstrelasDoAmanhaThumb,
    imageDetails: Images.EstrelasDoAmanhaDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/html-css/avan%C3%A7ando-no-html-e-css/projetos/formulario-de-matricula",
    deployUrl: "https://escolaestrelas.netlify.app/",
    techs: ["HTML", "CSS", "figma"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Estruturei o formulário completo utilizando HTML semântico, organizando os campos em fieldsets para melhorar a hierarquia e acessibilidade.",
          "Implementei diferentes tipos de inputs, como text, date, select, radio, checkbox e upload de arquivos.",
          "Desenvolvi o layout utilizando CSS Grid e Flexbox para organizar os campos de forma clara e responsiva.",
          "Apliquei estilizações personalizadas em elementos como radio buttons, checkboxes e área de upload para melhorar a experiência visual.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Organizar um grande volume de campos mantendo clareza visual e boa experiência de preenchimento.",
          "Customizar inputs nativos do HTML (radio, checkbox e file) mantendo consistência com o design do Figma.",
          "Garantir alinhamento e proporção entre campos diferentes utilizando Grid e Flexbox em conjunto.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Aprofundei minha habilidade em estruturar formulários complexos de forma organizada e escalável.",
          "Desenvolvi maior atenção à experiência do usuário em formulários, pensando na clareza e fluidez do preenchimento.",
          "Evoluí na criação de componentes visuais customizados a partir de elementos nativos do HTML.",
        ],
      },
    ],
  },

  // Zingen Karaoke
  {
    id: "zingen-karaoke",
    title: "Zingen Karaoke",
    description:
      "Landing page de um aplicativo de karaokê, desenvolvida com foco em hierarquia visual, organização de conteúdo e modularização de estilos. O projeto segue um protótipo no Figma e prioriza clareza e responsividade.",
    imageSrc: Images.ZingenKaraokeThumb,
    imageDetails: Images.ZingenKaraokeDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/html-css/avan%C3%A7ando-no-html-e-css/projetos/landing-page",
    deployUrl: "https://zingenkaraoke.netlify.app/",
    techs: ["HTML", "CSS", "figma"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Estruturei a landing page utilizando HTML semântico, organizando seções como hero, funcionalidades, planos e chamada para download.",
          "Implementei o layout completo com CSS, utilizando Grid e Flexbox para distribuir os elementos de forma consistente e responsiva.",
          "Organizei os estilos de forma modular, criando classes reutilizáveis para botões, cards e espaçamentos.",
          "Apliquei o design do Figma com foco na hierarquia visual, destacando áreas estratégicas como CTA, funcionalidades e planos.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Organizar uma página longa com múltiplas seções mantendo consistência visual e fluidez na navegação.",
          "Equilibrar o uso de Grid e Flexbox para diferentes tipos de layout dentro da mesma página.",
          "Reproduzir fielmente a hierarquia visual do design, principalmente em seções com grande volume de conteúdo.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Desenvolvi uma melhor compreensão sobre construção de landing pages focadas em apresentação de produto.",
          "Evoluí na organização de estilos reutilizáveis, facilitando a manutenção e escalabilidade do CSS.",
          "Passei a entender melhor como estruturar páginas com múltiplas seções mantendo consistência visual e clareza na navegação.",
        ],
      },
    ],
  },

  // Snitap Patins
  {
    id: "snitap-patins",
    title: "Snitap Patins",
    description:
      "Landing page com foco em animações em CSS, explorando transições e efeitos visuais para criar uma experiência dinâmica e interativa na apresentação de produto.",
    imageSrc: Images.SnitapPatinsThumb,
    imageDetails: Images.SnitapPatinsDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/html-css/avan%C3%A7ando-no-html-e-css/projetos/lp-patins-animations",
    deployUrl: "https://snitappatins.netlify.app/",
    techs: ["HTML", "CSS", "figma"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Estruturei a landing page utilizando HTML semântico, organizando as seções de apresentação do produto.",
          "Implementei o layout responsivo com CSS, utilizando Grid e Flexbox para distribuir os elementos.",
          "Desenvolvi animações utilizando CSS, aplicando keyframes, transições e efeitos visuais em diferentes partes da interface.",
          "Criei interações visuais em elementos como botões, banners e galeria, tornando a navegação mais dinâmica.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Compreender e aplicar animações com CSS de forma controlada, evitando excessos que comprometessem a usabilidade.",
          "Sincronizar diferentes animações na mesma interface mantendo fluidez e consistência visual.",
          "Equilibrar performance e efeitos visuais, garantindo que as animações não impactassem negativamente a experiência.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Aprofundei meus conhecimentos em animações com CSS, incluindo uso de keyframes e transições.",
          "Passei a entender melhor como utilizar animações para enriquecer a experiência do usuário, e não apenas como efeito visual.",
          "Evoluí na criação de interfaces mais dinâmicas, explorando movimento como parte da comunicação visual do produto.",
        ],
      },
    ],
  },

  // Encantos Literários
  {
    id: "encantos-literarios",
    title: "Encantos Literários",
    description:
      "Landing page para clube de livros com foco em experiência visual e composição de interface. Utiliza animações em CSS e organização responsiva para apresentação do produto.",
    imageSrc: Images.EncantosLiterariosThumb,
    imageDetails: Images.EncantosLiterariosDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/html-css/avan%C3%A7ando-no-html-e-css/desafios/lp-clube-de-assinatura",
    deployUrl: "https://encantosliterarios.netlify.app/",
    techs: ["HTML", "CSS", "figma"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Estruturei a landing page utilizando HTML semântico, organizando seções como hero, apresentação do produto, kit mensal e planos de assinatura.",
          "Implementei o layout responsivo com CSS, utilizando Grid e Flexbox para lidar com diferentes níveis de complexidade visual.",
          "Desenvolvi animações e transições em CSS para enriquecer a experiência do usuário em elementos como destaques do produto, ícones e seções.",
          "Trabalhei a composição visual de elementos sobrepostos, criando uma interface mais dinâmica e imersiva.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Gerenciar uma grande quantidade de elementos visuais e decorativos sem comprometer a organização da interface.",
          "Criar animações que complementassem a experiência sem prejudicar a legibilidade e usabilidade.",
          "Trabalhar com sobreposição de elementos e posicionamentos mais complexos mantendo responsividade.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Aprofundei minha capacidade de construir interfaces visualmente mais complexas e organizadas.",
          "Evoluí no uso de animações como parte da experiência do usuário, integrando movimento à comunicação do produto.",
          "Desenvolvi maior domínio sobre composição visual e posicionamento de elementos em layouts mais avançados.",
        ],
      },
    ],
  },

  // Convert BR
  {
    id: "convert-br",
    title: "Convert BR",
    description:
      "Aplicação de conversão de moedas para BRL com interface dinâmica. Utiliza JavaScript para manipulação de DOM, validação de dados e cálculo sob demanda a partir da interação do usuário.",
    imageSrc: Images.ConvertBRThumb,
    imageDetails: Images.ConvertBRDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/javascript/projetos/convert",
    deployUrl: "https://convertbr.netlify.app/",
    techs: ["HTML", "CSS", "javaScript", "figma"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Implementei a lógica de conversão de moedas utilizando JavaScript, considerando diferentes taxas e símbolos.",
          "Realizei a manipulação do DOM para capturar dados do formulário e exibir os resultados dinamicamente.",
          "Implementei validação de entrada, restringindo o campo de valor para aceitar apenas números.",
          "Criei feedback visual ao usuário após a conversão, atualizando a interface com base na ação realizada.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Entender o fluxo de eventos no JavaScript, como input e submit, e como utilizá-los corretamente.",
          "Garantir a manipulação correta dos dados inseridos pelo usuário antes de realizar os cálculos.",
          "Trabalhar com formatação de valores monetários utilizando toLocaleString.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Deixei de trabalhar apenas com interfaces estáticas e passei a desenvolver funcionalidades interativas com JavaScript.",
          "Compreendi na prática conceitos fundamentais como eventos, funções e manipulação de DOM.",
          "Evoluí na construção de aplicações que respondem às ações do usuário em tempo real.",
        ],
      },
    ],
  },

  // QuickList
  {
    id: "quicklist",
    title: "QuickList",
    description:
      "Aplicação de lista de compras interativa com manipulação de DOM e eventos. Permite adicionar, marcar e remover itens dinamicamente em tempo real.",
    imageSrc: Images.QuickListThumb,
    imageDetails: Images.QuickListDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/javascript/desafios/quicklist",
    deployUrl: "https://quicklistapp.netlify.app/",
    techs: ["HTML", "CSS", "javaScript", "figma"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Implementei a lógica de adição, remoção e marcação de itens utilizando JavaScript.",
          "Realizei manipulação dinâmica do DOM, criando e inserindo novos elementos na lista em tempo real.",
          "Utilizei event delegation para gerenciar interações em elementos criados dinamicamente.",
          "Implementei feedback visual ao usuário, como alertas temporários e alterações de estilo ao marcar itens.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Gerenciar eventos em elementos dinâmicos sem duplicar listeners, utilizando event delegation.",
          "Garantir consistência na criação de novos itens, incluindo identificação única para checkboxes.",
          "Controlar estados visuais da interface (marcado, removido, alerta) de forma sincronizada com as ações do usuário.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Consolidei meu entendimento sobre manipulação de DOM e eventos no JavaScript.",
          "Passei a estruturar melhor interações em aplicações, separando responsabilidades em funções.",
          "Evoluí na construção de aplicações mais interativas, com múltiplas ações acontecendo de forma coordenada.",
        ],
      },
    ],
  },

  // Sorteador De Números
  {
    id: "sorteador-de-numeros",
    title: "Sorteador De Números",
    description:
      "Aplicação para sorteio de números com regras personalizáveis. Permite definir intervalos, quantidade e repetição, com validação de dados e feedback visual dinâmico.",
    imageSrc: Images.SorteadorDeNumerosThumb,
    imageDetails: Images.SorteadorDeNumerosDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/javascript/desafios/sorteador-de-numeros",
    deployUrl: "https://sorteanumeros.netlify.app/",
    techs: ["HTML", "CSS", "javaScript", "figma"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Implementei a lógica de sorteio de números utilizando JavaScript, considerando regras como intervalo e repetição.",
          "Desenvolvi validações para garantir consistência dos dados inseridos pelo usuário antes do processamento.",
          "Realizei manipulação de DOM para alternar entre estados da aplicação (formulário e resultado).",
          "Implementei animações dinâmicas na exibição dos números sorteados, melhorando a experiência do usuário.",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Criar uma lógica de sorteio que respeitasse a regra de não repetição sem comprometer o desempenho.",
          "Garantir validação consistente entre múltiplos campos interdependentes (mínimo, máximo e quantidade).",
          "Controlar a transição de estados da interface de forma fluida e sincronizada com as animações.",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Evoluí na construção de regras de negócio mais complexas utilizando JavaScript.",
          "Desenvolvi maior atenção à validação de dados e tratamento de cenários de erro.",
          "Passei a integrar lógica e experiência visual, criando aplicações mais completas e interativas.",
        ],
      },
    ],
  },

  // Agenda Petshop
  {
    id: "agendamento-petshop",
    title: "Agenda Petshop",
    description:
      "Sistema de agendamento para petshop com gestão de clientes e serviços. Organização automática por períodos do dia e controle dinâmico de horários disponíveis.",
    imageSrc: Images.AgendaPetThumb,
    imageDetails: Images.AgendaPetDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/javascript/desafios/agendamento-petshop",
    deployUrl: "https://agendapet.netlify.app/",
    techs: ["HTML", "CSS", "javaScript", "figma"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Desenvolvimento completo da interface e lógica de agendamento",
          "Implementação de formulário com validação de dados (nome, telefone, serviço e horário)",
          "Criação do sistema de organização automática dos agendamentos por período (manhã, tarde e noite)",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Gerenciamento dinâmico dos horários disponíveis, evitando conflitos e horários no passado",
          "Manipulação do DOM para atualizar a agenda em tempo real após novos agendamentos",
          "Implementação de um seletor de horários customizado com controle de estado (selecionado, disponível, indisponível)",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Evolução na organização da lógica JavaScript, separando responsabilidades em módulos e funções reutilizáveis",
          "Maior domínio na manipulação de datas e horários com bibliotecas externas (dayjs)",
          "Aprofundamento na construção de interfaces interativas orientadas a estado, aproximando o comportamento de aplicações reais",
        ],
      },
    ],
  },

  // Jogo De Adivinhação
  {
    id: "jogo-de-adivinhacao",
    title: "Jogo De Adivinhação",
    description:
      "Aplicação interativa desenvolvida em React onde o usuário precisa descobrir uma palavra secreta com base em dicas, utilizando gerenciamento de estado, validações e atualização dinâmica da interface.",
    imageSrc: Images.JogoDeAdvinhacaoThumb,
    imageDetails: Images.JogoDeAdvinhacaoDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/react/iniciando-no-react/jogo-de-advinhacao",
    deployUrl: "https://adivinhapalavra.vercel.app/",
    techs: ["react", "CSS", "typeScript", "figma"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Desenvolvimento completo da aplicação utilizando React com TypeScript",
          "Estruturação e componentização da interface (Header, Input, Letter, etc.)",
          "Implementação da lógica do jogo, incluindo validações, controle de tentativas e fluxo de vitória/derrota",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Gerenciamento de estado para controlar letras utilizadas, pontuação e progresso do jogo",
          "Sincronização das regras do jogo com a renderização da interface (acertos, erros e fim de partida)",
          "Validação de entradas repetidas e controle de fluxo para evitar inconsistências no estado",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Consolidação prática de conceitos do React, como useState e useEffect, aplicados em um projeto com regras e fluxo de jogo",
          "Evolução na componentização e separação de responsabilidades na interface",
          "Melhoria na organização do fluxo da aplicação, conectando estado, regras e interface de forma mais consistente",
        ],
      },
    ],
  },

  // Refund
  {
    id: "refund",
    title: "Refund",
    description:
      "Sistema completo de solicitação de reembolsos com autenticação de usuários, integração com API, upload de comprovantes e dashboard para gerenciamento das solicitações com paginação e filtros.",
    imageSrc: Images.RefundThumb,
    imageDetails: Images.RefundDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/react/avan%C3%A7ando-no-react/refund-2.0",
    deployUrl: "https://formrefund.vercel.app/",
    techs: [
      "react",
      "tailwind",
      "typeScript",
      "node.js",
      "prisma",
      "figma",
    ],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: [
          "Desenvolvimento completo da aplicação full-stack (frontend em React e backend em Node.js)",
          "Implementação de autenticação com JWT e controle de acesso por usuário",
          "Criação de funcionalidades como cadastro, login, envio de solicitações e dashboard com listagem paginada",
        ],
      },
      {
        title: "Desafios técnicos",
        items: [
          "Integração entre frontend e API, lidando com estados assíncronos, erros e feedback ao usuário",
          "Implementação de upload de arquivos e validação de dados no frontend e backend",
          "Gerenciamento de rotas protegidas e fluxo de autenticação na aplicação",
        ],
      },
      {
        title: "Aprendizados e evolução",
        items: [
          "Evolução na construção de aplicações full-stack, conectando frontend, backend e banco de dados",
          "Maior domínio no consumo de APIs e tratamento de estados assíncronos em aplicações React",
          "Aprofundamento em arquitetura de aplicações, separação de responsabilidades e organização de código em escala maior",
        ],
      },
    ],
  },
];
