import * as Images from "../assets/images/projects";

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
  // Portal Tech News
  {
    id: "1",
    title: "Portal Tech News",
    description: "-",
    imageSrc: Images.PortalTechNewsThumb,
    imageDetails: Images.PortalTechNewsDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/html-css/avan%C3%A7ando-no-html-e-css/projetos/portal-de-noticias",
    deployUrl: "https://portaltechnews.netlify.app/",
    techs: ["react", "react", "react", "react"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: ["-", "-", "-"],
      },
      {
        title: "Minha Contribuição",
        items: ["-", "-"],
      },
      {
        title: "Desafios e Aprendizados",
        items: ["-", "-"],
      },
    ],
  },

  // Estrelas Do Amanha
  {
    id: "2",
    title: "Estrelas Do Amanhã",
    description: "-",
    imageSrc: Images.EstrelasDoAmanhaThumb,
    imageDetails: Images.EstrelasDoAmanhaDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/html-css/avan%C3%A7ando-no-html-e-css/projetos/formulario-de-matricula",
    deployUrl: "https://escolaestrelas.netlify.app/",
    techs: ["react", "react", "react", "react"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: ["-", "-", "-"],
      },
      {
        title: "Minha Contribuição",
        items: ["-", "-"],
      },
      {
        title: "Desafios e Aprendizados",
        items: ["-", "-"],
      },
    ],
  },

  // Zingen Karaoke
  {
    id: "3",
    title: "Zingen Karaoke",
    description: "-",
    imageSrc: Images.ZingenKaraokeThumb,
    imageDetails: Images.ZingenKaraokeDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/html-css/avan%C3%A7ando-no-html-e-css/projetos/landing-page",
    deployUrl: "https://zingenkaraoke.netlify.app/",
    techs: ["react", "react", "react", "react"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: ["-", "-", "-"],
      },
      {
        title: "Minha Contribuição",
        items: ["-", "-"],
      },
      {
        title: "Desafios e Aprendizados",
        items: ["-", "-"],
      },
    ],
  },

  // Snitap Patins
  {
    id: "4",
    title: "Snitap Patins",
    description: "-",
    imageSrc: Images.SnitapPatinsThumb,
    imageDetails: Images.SorteadorDeNumerosDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/html-css/avan%C3%A7ando-no-html-e-css/projetos/lp-patins-animations",
    deployUrl: "https://snitappatins.netlify.app/",
    techs: ["react", "react", "react", "react"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: ["-", "-", "-"],
      },
      {
        title: "Minha Contribuição",
        items: ["-", "-"],
      },
      {
        title: "Desafios e Aprendizados",
        items: ["-", "-"],
      },
    ],
  },

  // Encantos Literarios
  {
    id: "5",
    title: "Encantos Literarios",
    description: "-",
    imageSrc: Images.EncantosLiterariosThumb,
    imageDetails: Images.EncantosLiterariosDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/html-css/avan%C3%A7ando-no-html-e-css/desafios/lp-clube-de-assinatura",
    deployUrl: "https://encantosliterarios.netlify.app/",
    techs: ["react", "react", "react", "react"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: ["-", "-", "-"],
      },
      {
        title: "Minha Contribuição",
        items: ["-", "-"],
      },
      {
        title: "Desafios e Aprendizados",
        items: ["-", "-"],
      },
    ],
  },

  // Convert BR
  {
    id: "6",
    title: "Convert BR",
    description: "-",
    imageSrc: Images.ConvertBRThumb,
    imageDetails: Images.ConvertBRDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/javascript/projetos/convert",
    deployUrl: "https://convertbr.netlify.app/",
    techs: ["react", "react", "react", "react"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: ["-", "-", "-"],
      },
      {
        title: "Minha Contribuição",
        items: ["-", "-"],
      },
      {
        title: "Desafios e Aprendizados",
        items: ["-", "-"],
      },
    ],
  },

  // QuickList
  {
    id: "7",
    title: "QuickList",
    description: "-",
    imageSrc: Images.QuickListThumb,
    imageDetails: Images.QuickListDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/javascript/desafios/quicklist",
    deployUrl: "https://quicklistapp.netlify.app/",
    techs: ["react", "react", "react", "react"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: ["-", "-", "-"],
      },
      {
        title: "Minha Contribuição",
        items: ["-", "-"],
      },
      {
        title: "Desafios e Aprendizados",
        items: ["-", "-"],
      },
    ],
  },

  // Sorteador De Números
  {
    id: "8",
    title: "Sorteador De Números",
    description: "-",
    imageSrc: Images.SorteadorDeNumerosThumb,
    imageDetails: Images.SorteadorDeNumerosDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/javascript/desafios/sorteador-de-numeros",
    deployUrl: "https://sorteanumeros.netlify.app/",
    techs: ["react", "react", "react", "react"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: ["-", "-", "-"],
      },
      {
        title: "Minha Contribuição",
        items: ["-", "-"],
      },
      {
        title: "Desafios e Aprendizados",
        items: ["-", "-"],
      },
    ],
  },

  // Agendamento Petshop
  {
    id: "9",
    title: "Agendamento Petshop",
    description: "-",
    imageSrc: Images.AgendaPetThumb,
    imageDetails: Images.AgendaPetDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/javascript/desafios/agendamento-petshop",
    deployUrl: "https://agendapet.netlify.app/",
    techs: ["react", "react", "react", "react"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: ["-", "-", "-"],
      },
      {
        title: "Minha Contribuição",
        items: ["-", "-"],
      },
      {
        title: "Desafios e Aprendizados",
        items: ["-", "-"],
      },
    ],
  },

  // Jogo De Adivinhação
  {
    id: "10",
    title: "Jogo De Adivinhação",
    description: "-",
    imageSrc: Images.JogoDeAdvinhacaoThumb,
    imageDetails: Images.JogoDeAdvinhacaoDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/react/iniciando-no-react/jogo-de-advinhacao",
    deployUrl: "https://adivinhapalavra.vercel.app/",
    techs: ["react", "react", "react", "react"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: ["-", "-", "-"],
      },
      {
        title: "Minha Contribuição",
        items: ["-", "-"],
      },
      {
        title: "Desafios e Aprendizados",
        items: ["-", "-"],
      },
    ],
  },

  // Refund
  {
    id: "11",
    title: "Refund",
    description: "-",
    imageSrc: Images.RefundThumb,
    imageDetails: Images.RefundDetails,
    githubUrl:
      "https://github.com/murilloressineti/full-stack-rocketseat/tree/main/react/avan%C3%A7ando-no-react/refund-2.0",
    deployUrl: "https://formrefund.vercel.app/",
    techs: ["react", "react", "react", "react"],
    sections: [
      {
        title: "Minhas funções no projeto",
        items: ["-", "-", "-"],
      },
      {
        title: "Minha Contribuição",
        items: ["-", "-"],
      },
      {
        title: "Desafios e Aprendizados",
        items: ["-", "-"],
      },
    ],
  },
];
