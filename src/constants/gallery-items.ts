import {
  PlayingGuitar,
  Family,
  Gaming,
  Gym,
  Reading,
  Football,
} from "../assets/images/gallery";

export interface GalleryItem {
  image: string;
  title: string;
  textPosition: "top" | "bottom";
  desktopOrder?: number;
  mobileOrder?: number;
}

export const galleryItems: GalleryItem[] = [
  {
    image: PlayingGuitar,
    title:
      "Formado na EM&T e integrante de uma banda, encontrei na música minha forma de expressão.",
    textPosition: "bottom",
    desktopOrder: 1,
    mobileOrder: 2,
  },
  {
    image: Family,
    title:
      "Meu ponto de equilíbrio. Onde recarrego a energia e lembro do que realmente importa.",
    textPosition: "top",
    desktopOrder: 2,
    mobileOrder: 1,
  },
  {
    image: Gaming,
    title:
      "Jogos me divertem e desafiam. É onde relaxo, mergulho em boas histórias e deixo a imaginação correr solta.",
    textPosition: "bottom",
    desktopOrder: 3,
    mobileOrder: 3,
  },
  {
    image: Gym,
    title:
      "Treinar me traz foco e disciplina, essenciais para manter a saúde física e mental em dia.",
    textPosition: "top",
    desktopOrder: 4,
    mobileOrder: 4,
  },
  {
    image: Reading,
    title:
      "Autodesenvolvimento, espiritualidade, negócios e ficção. Ler me ajuda a evoluir como pessoa e profissional.",
    textPosition: "bottom",
    desktopOrder: 5,
    mobileOrder: 5,
  },
  {
    image: Football,
    title:
      "Me conecto com o esporte desde cedo. Suas histórias de superação sempre me inspiram.",
    textPosition: "top",
    desktopOrder: 6,
    mobileOrder: 6,
  },
];
