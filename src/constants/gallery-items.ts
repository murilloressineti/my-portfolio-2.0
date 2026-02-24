import PhotoA from "../assets/images/gallery/original.jpg";
import PhotoB from "../assets/images/gallery/original-1.jpg";

export interface GalleryItem {
  image: string;
  title: string;
  textPosition: "top" | "bottom";
}

export const galleryItems: GalleryItem[] = [
  {
    image: PhotoA,
    title: "Formado na EM&T e integrante de uma banda, encontrei na música minha forma de expressão.",
    textPosition: "bottom",
  },
  {
    image: PhotoB,
    title: "Meu ponto de equilíbrio. Onde recarrego a energia e lembro do que realmente importa.",
    textPosition: "top",
  },
  {
    image: PhotoA,
    title: "Família e momentos especiais com a Gabi e a Jasmine são o que dão sentido a tudo.",
    textPosition: "bottom",
  },
  {
    image: PhotoB,
    title: "Treinar me traz foco e disciplina, essenciais para manter a saúde física e mental em dia.",
    textPosition: "top",
  },
  {
    image: PhotoA,
    title: "Autodesenvolvimento, espiritualidade, negócios e ficção. Ler me ajuda a evoluir como pessoa.",
    textPosition: "bottom",
  },
  {
    image: PhotoB,
    title: "Me conecto com o esporte e o SPFC desde cedo. Suas histórias sempre me inspiram.",
    textPosition: "top",
  },
];