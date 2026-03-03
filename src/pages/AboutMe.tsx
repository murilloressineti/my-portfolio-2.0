import { Text } from "../components/ui";
import { Section, CTASection } from "../components/layout";

import { Timeline, TimelineItem } from "../components/timeline";
import { timelineSteps } from "../constants/timeline-steps";

import { BentoGrid, BentoItem, BentoCarousel } from "../components/gallery";
import { galleryItems } from "../constants/gallery-items";

import ProfileImg from "../assets/images/gallery/original-1.jpg";

export default function AboutMe() {
  return (
    <main>
      {/* Introduction Section */}
      <Section id="intro" isFullWidth={true} className="py-10 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Coluna de Texto */}
          <div className="flex flex-col gap-14 px-6 md:pl-30 md:pr-15 ml-auto w-full max-w-220">
            <Text variant="about-title" className="uppercase font-normal">
              Desenvolvendo <strong className="font-semibold">soluções </strong>
              que <strong className="font-semibold">conectam pessoas</strong> e
              <strong className="font-semibold">
                {" "}
                impulsionam resultados.
              </strong>
            </Text>

            <div className="flex flex-col gap-8">
              <Text
                variant="about-body"
                className="text-text-secondary opacity-70"
              >
                Minha jornada na tecnologia começou com Python, mas foi no
                front-end que encontrei meu caminho, unindo estética e
                funcionalidade. Meus projetos focam em performance e experiência
                do usuário. Acredito que constância é a maior força que
                impulsiona e ajuda a superar qualquer desafio.
              </Text>

              <Text
                variant="about-body"
                className="text-text-secondary opacity-70"
              >
                Para aprimorar minhas habilidades, ingressei no bootcamp
                Full-Stack da Rocketseat, consolidando conhecimentos em HTML,
                CSS, JavaScript, React, TypeScript e Node.js. Paralelamente,
                busco uma base teórica sólida em Análise e Desenvolvimento de
                Sistemas na Universidade Presbiteriana Mackenzie. Essa
                combinação de aprendizado prático e acadêmico me permite
                construir soluções digitais que geram valor.
              </Text>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="relative px-6 md:px-0">
            <img
              src={ProfileImg}
              alt="Murillo Ressineti trabalhando em seu notebook"
              className="w-full h-116 md:h-225 object-cover rounded-lg md:rounded-l-lg"
            />
          </div>
        </div>
      </Section>

      {/* TimeLine */}
      <Section className="bg-bg-surface">
        <Timeline>
          {timelineSteps.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </Timeline>
      </Section>

      {/* Gallery */}
      <Section>
        <div className="flex items-center justify-center md:justify-start mb-12 md:mb-20">
          <Text
            variant="h3"
            className="text-text-primary uppercase font-normal"
          >
            Fora do <strong className="font-semibold">código</strong>
          </Text>
        </div>

        <div className="max-w-7xl md:mx-auto md:px-30 overflow-hidden">
          {/* Gallery Desktop */}
          <div className="hidden md:block">
            <BentoGrid>
              {[...galleryItems]
                .sort((a, b) => (a.desktopOrder || 0) - (b.desktopOrder || 0))
                .map((item, index) => (
                  <BentoItem key={index} {...item} />
                ))}
            </BentoGrid>
          </div>
          {/* Gallery Mobile */}
          <div className="block md:hidden">
            <BentoCarousel>
              {galleryItems
                .sort((a, b) => (a.mobileOrder || 0) - (b.mobileOrder || 0))
                .map((item, index) => (
                  <BentoItem key={index} {...item} textPosition="bottom" />
                ))}
            </BentoCarousel>
          </div>
        </div>
      </Section>

      {/* Footer CTA Section */}
      <CTASection />
    </main>
  );
}
