import { Profile } from "@/assets/images/background";
import * as Gallery from "@/assets/images/gallery";
import * as Projects from "@/assets/images/projects";
import Profile1600 from "@/assets/images/responsive/background/profile-1600.webp";
import Profile960 from "@/assets/images/responsive/background/profile-960.webp";
import Family1280 from "@/assets/images/responsive/gallery/image-family-1280.webp";
import Family640 from "@/assets/images/responsive/gallery/image-family-640.webp";
import Football1280 from "@/assets/images/responsive/gallery/image-football-1280.webp";
import Football640 from "@/assets/images/responsive/gallery/image-football-640.webp";
import Gaming1280 from "@/assets/images/responsive/gallery/image-gaming-1280.webp";
import Gaming640 from "@/assets/images/responsive/gallery/image-gaming-640.webp";
import Gym1280 from "@/assets/images/responsive/gallery/image-gym-1280.webp";
import Gym640 from "@/assets/images/responsive/gallery/image-gym-640.webp";
import PlayingGuitar1280 from "@/assets/images/responsive/gallery/image-playing-guitar-1280.webp";
import PlayingGuitar640 from "@/assets/images/responsive/gallery/image-playing-guitar-640.webp";
import Reading1280 from "@/assets/images/responsive/gallery/image-reading-1280.webp";
import Reading640 from "@/assets/images/responsive/gallery/image-reading-640.webp";

interface ImageMetadata {
  width: number;
  height: number;
  srcSet?: string;
}

// Originais continuam disponíveis para telas que precisam de maior resolução.
export const imageMetadata: Record<string, ImageMetadata> = {
  // Retrato
  [Profile]: {
    width: 2675,
    height: 4013,
    srcSet: `${Profile960} 960w, ${Profile1600} 1600w, ${Profile} 2675w`,
  },
  // Galeria pessoal
  [Gallery.Family]: {
    width: 3024,
    height: 4032,
    srcSet: `${Family640} 640w, ${Family1280} 1280w, ${Gallery.Family} 3024w`,
  },
  [Gallery.Football]: {
    width: 4032,
    height: 3024,
    srcSet: `${Football640} 640w, ${Football1280} 1280w, ${Gallery.Football} 4032w`,
  },
  [Gallery.Gaming]: {
    width: 3024,
    height: 4032,
    srcSet: `${Gaming640} 640w, ${Gaming1280} 1280w, ${Gallery.Gaming} 3024w`,
  },
  [Gallery.Gym]: {
    width: 2066,
    height: 3478,
    srcSet: `${Gym640} 640w, ${Gym1280} 1280w, ${Gallery.Gym} 2066w`,
  },
  [Gallery.PlayingGuitar]: {
    width: 2270,
    height: 3703,
    srcSet: `${PlayingGuitar640} 640w, ${PlayingGuitar1280} 1280w, ${Gallery.PlayingGuitar} 2270w`,
  },
  [Gallery.Reading]: {
    width: 3024,
    height: 4032,
    srcSet: `${Reading640} 640w, ${Reading1280} 1280w, ${Gallery.Reading} 3024w`,
  },
  // Imagens dos projetos
  [Projects.AgendaPetThumb]: { width: 952, height: 624 },
  [Projects.AgendaPetDetails]: { width: 1537, height: 961 },
  [Projects.DSRGraficaThumb]: { width: 952, height: 624 },
  [Projects.DSRGraficaDetails]: { width: 1537, height: 961 },
  [Projects.HairDayThumb]: { width: 952, height: 622 },
  [Projects.HairDayDetails]: { width: 1537, height: 961 },
  [Projects.HelpDeskThumb]: { width: 952, height: 624 },
  [Projects.HelpDeskDetails]: { width: 1537, height: 961 },
  [Projects.RefundThumb]: { width: 952, height: 622 },
  [Projects.RefundDetails]: { width: 1537, height: 961 },
  [Projects.VerdurasGuimaraesThumb]: {width: 952, height: 624,},
  [Projects.VerdurasGuimaraesDetails]: {width: 1537,height: 961,},
};
