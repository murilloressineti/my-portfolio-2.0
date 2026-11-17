import { useMemo } from "react";

import { motion, MotionConfig } from "framer-motion";

import { galleryItems, timelineSteps } from "../constants";
import { imageMetadata } from "@/constants/image-metadata";

import { fadeUp } from "@/lib/motion";

import { BentoCarousel, BentoGrid, BentoItem } from "../components/gallery";
import { CTASection, Section } from "../components/layout";
import { Timeline, TimelineItem } from "../components/timeline";
import { Text } from "../components/ui";

import { Profile } from "@/assets/images/background";

export default function AboutMe() {
  // Cada layout tem uma ordem própria; copiar antes de sort preserva a lista compartilhada.
  const desktopGallery = useMemo(() => {
    return [...galleryItems].sort(
      (a, b) => (a.desktopOrder || 0) - (b.desktopOrder || 0),
    );
  }, []);

  const mobileGallery = useMemo(() => {
    return [...galleryItems].sort(
      (a, b) => (a.mobileOrder || 0) - (b.mobileOrder || 0),
    );
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div data-reduced-motion>
        <Section id="intro" className="py-10 md:py-20 lg:p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0">
            <div className="flex flex-col gap-10 lg:pl-30 lg:pr-20 mx-auto w-full">
              <motion.div {...fadeUp}>
                <Text as="h1" variant="h2" className="uppercase font-normal">
                  Desenvolvendo interfaces, construindo experiências e evoluindo
                  através do código.
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
                  Minha jornada na tecnologia ganhou direção quando encontrei no{" "}
                  <strong className="font-semibold">
                    Front-end a conexão entre lógica, código e experiência visual.
                  </strong>{" "}
                  Ver uma interface tomar forma no navegador a partir do que
                  construo em código foi o que despertou meu interesse pela área
                  e, desde então, venho aprofundando meus conhecimentos em{" "}
                  <strong className="font-semibold">desenvolvimento web.</strong>
                </Text>
                <Text
                  variant="body-base"
                  className="text-text-secondary opacity-70"
                >
                  Acredito na{" "}
                  <strong className="font-semibold">
                    constância como parte essencial da evolução.
                  </strong>{" "}
                  Busco desenvolver soluções bem construídas, organizadas e
                  visualmente cuidadas, mas, acima de tudo, quero contribuir com{" "}
                  <strong className="font-semibold">
                    produtos nos quais acredito e que possam gerar impacto
                    positivo na vida das pessoas.
                  </strong>{" "}
                  É essa combinação entre propósito, aprendizado contínuo e
                  atenção aos detalhes que direciona a carreira que venho
                  construindo.
                </Text>
              </motion.div>
            </div>
            <div className="md:px-0 overflow-hidden">
              {" "}

              <motion.img
                src={Profile}
                {...imageMetadata[Profile]}
                // A foto usa object-cover: a altura também pode determinar a resolução necessária.
                sizes="(min-width: 1024px) max(50vw, 67vh), max(100vw, 67vh)"
                decoding="async"
                alt="Murillo Ressineti trabalhando em seu notebook"
                className="w-full h-screen object-cover md:object-[60%_40%] rounded-lg md:rounded-l-lg"

                initial={{ opacity: 0, x: 40, scale: 1.05 }}

                whileInView={{ opacity: 1, x: 0, scale: 1 }}

                viewport={{ once: true, margin: "-15%" }}

                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        </Section>
        <Section id="timeline" className="bg-bg-surface">
          <Timeline>
            {timelineSteps.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </Timeline>
        </Section>
        <Section id="gallery">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="flex items-center justify-center lg:justify-start mb-12 lg:mb-20"
          >
            <Text as="h2" variant="h2" className="uppercase font-normal">
              Fora do <strong className="font-semibold">código</strong>
            </Text>
          </motion.div>
          <div>
            <div className="hidden lg:block">
              <BentoGrid>
                {desktopGallery.map((item) => (
                  <BentoItem key={item.title} {...item} />
                ))}
              </BentoGrid>
            </div>
            <div className="block lg:hidden">
              <BentoCarousel>
                {mobileGallery.map((item) => (
                  <BentoItem key={item.title} {...item} textPosition="bottom" />
                ))}
              </BentoCarousel>
            </div>
          </div>
        </Section>
        <CTASection />
      </div>
    </MotionConfig>
  );
}
