import { useMemo } from "react";
import { motion } from "framer-motion";
import { Section, CTASection } from "../components/layout";
import { Text } from "../components/ui";
import { Timeline, TimelineItem } from "../components/timeline";
import { BentoGrid, BentoItem, BentoCarousel } from "../components/gallery";
import { timelineSteps, galleryItems } from "../constants";
import { Profile } from "@/assets/images/background";
import { fadeUp } from "@/lib/motion";

export default function AboutMe() {
  // Memoriza a lista para Desktop
  const desktopGallery = useMemo(() => {
    return [...galleryItems].sort(
      (a, b) => (a.desktopOrder || 0) - (b.desktopOrder || 0),
    );
  }, []);

  // Memoriza a lista para Mobile
  const mobileGallery = useMemo(() => {
    return [...galleryItems].sort(
      (a, b) => (a.mobileOrder || 0) - (b.mobileOrder || 0),
    );
  }, []);

  return (
    <main>
      {/* Introduction Section */}
      <Section id="intro" className="py-10 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-0">
          {/* Coluna de Texto */}
          <div className="flex flex-col gap-10 md:pl-30 md:pr-20 mx-auto w-full">
            <motion.div {...fadeUp}>
              <Text variant="h2" className="uppercase font-normal">
                Desenvolvendo{" "}
                <strong className="font-semibold">soluções</strong> que conectam{" "}
                <strong className="font-semibold">pessoas</strong> e impulsionam{" "}
                <strong className="font-semibold"> resultados.</strong>
              </Text>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <Text
                variant="body-base"
                className="text-text-secondary opacity-70"
              >
                Minha jornada na tecnologia começou com Python, mas foi no
                front-end que encontrei meu caminho, unindo estética e
                funcionalidade. Meus projetos focam em performance e experiência
                do usuário. Acredito que constância é a maior força que
                impulsiona e ajuda a superar qualquer desafio.
              </Text>

              <Text
                variant="body-base"
                className="text-text-secondary opacity-70"
              >
                Para aprimorar minhas habilidades, ingressei no bootcamp
                Full-Stack da Rocketseat, consolidando conhecimentos em HTML,
                CSS, JavaScript, React, TypeScript e Node.js. Paralelamente,
                busco uma base teórica sólida em Análise e Desenvolvimento de
                Sistemas na Universidade Presbiteriana Mackenzie.
              </Text>
            </motion.div>
          </div>

          {/* Coluna da Imagem - Surge com um leve delay lateral */}
          <div className="md:px-0 overflow-hidden">
            {" "}
            {/* Overflow-hidden evita scrollbar lateral */}
            <motion.img
              src={Profile}
              alt="Murillo Ressineti trabalhando em seu notebook"
              className="w-full h-screen object-cover md:object-[60%_40%] rounded-lg md:rounded-l-lg"
              // Estado Inicial: Invisível, deslocado para a direita e ligeiramente maior
              initial={{ opacity: 0, x: 40, scale: 1.05 }}
              // Estado Final (ao entrar no viewport): Visível, no lugar e tamanho normal
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              // viewport config idêntica para manter o gatilho sincronizado
              viewport={{ once: true, margin: "-15%" }}
              // Transição: Duração maior e ease mais lento no final (premium)
              transition={{
                duration: 1, // Um pouco mais lenta que o texto para ser notada
                delay: 0.3, // Aparece por último na sequência
                ease: "easeOut", // Curva Cubic-Bezier para desaceleração extra suave
              }}
            />
          </div>
        </div>
      </Section>

      {/* TimeLine */}
      <Section id="timeline" className="bg-bg-surface">
        <Timeline>
          {timelineSteps.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </Timeline>
      </Section>

      {/* Gallery */}
      <Section id="gallery">
        <div className="flex items-center justify-center md:justify-start mb-12 md:mb-20">
          <Text variant="h2" className="uppercase font-normal">
            Fora do <strong className="font-semibold">código</strong>
          </Text>
        </div>

        <div className="max-w-7xl md:mx-auto md:px-30 overflow-hidden">
          {/* Gallery Desktop */}
          <div className="hidden md:block">
            <BentoGrid>
              {desktopGallery.map((item, index) => (
                <BentoItem key={index} {...item} />
              ))}
            </BentoGrid>
          </div>

          {/* Gallery Mobile */}
          <div className="block md:hidden">
            <BentoCarousel>
              {mobileGallery.map((item, index) => (
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
