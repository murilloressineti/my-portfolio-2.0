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
    /* * 1. [...galleryItems]: Cria uma cópia para não alterar o array original.
     * 2. .sort(): Organiza os itens comparando o 'desktopOrder'.
     * 3. (a - b): Se o resultado for negativo, 'a' vem primeiro. Se positivo, 'b' vem primeiro.
     * 4. || 0: Segurança para caso algum item esteja sem o número de ordem.
     */
    return [...galleryItems].sort(
      (a, b) => (a.desktopOrder || 0) - (b.desktopOrder || 0),
    );
  }, []); // O array de dependências vazio ([]) indica que a função de ordenação será executada apenas uma vez, na montagem do componente, e os resultados serão memorizados para uso em renderizações subsequentes, melhorando a performance ao evitar reordenações desnecessárias.

  // Memoriza a lista para Mobile
  const mobileGallery = useMemo(() => {
    return [...galleryItems].sort(
      (a, b) => (a.mobileOrder || 0) - (b.mobileOrder || 0),
    );
  }, []);

  return (
    <main>
      {/* Introduction Section */}
      <Section id="intro" className="py-10 md:py-20 lg:p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0">
          {/* Coluna de Texto */}
          <div className="flex flex-col gap-10 lg:pl-30 lg:pr-20 mx-auto w-full">
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
                Minha jornada na tecnologia começou com Python, mas foi no{" "}
                <strong className="font-semibold ">front-end</strong> que
                encontrei meu caminho, unindo{" "}
                <strong className="font-semibold ">
                  estética e funcionalidade
                </strong>
                . Meus projetos focam em{" "}
                <strong className="font-semibold ">
                  performance e experiência do usuário
                </strong>
                . Acredito que{" "}
                <strong className="font-semibold ">constância</strong> é a maior
                força que impulsiona e ajuda a superar qualquer desafio.
              </Text>

              <Text
                variant="body-base"
                className="text-text-secondary opacity-70"
              >
                Para aprimorar minhas habilidades, ingressei no bootcamp{" "}
                <strong className="font-semibold ">
                  Full-Stack da Rocketseat
                </strong>
                , consolidando conhecimentos em{" "}
                <strong className="font-semibold ">
                  React, TypeScript e Node.js
                </strong>
                . Paralelamente, busco uma base teórica sólida em{" "}
                <strong className="font-semibold ">
                  Análise e Desenvolvimento de Sistemas
                </strong>{" "}
                na{" "}
                <strong className="font-semibold ">
                  Universidade Presbiteriana Mackenzie
                </strong>
                . Essa combinação de aprendizado prático e acadêmico me permite
                construir soluções digitais que geram valor.
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
                delay: 0.2, // Aparece por último na sequência
                ease: "easeOut", // Curva Cubic-Bezier para desaceleração extra suave
              }}
            />
          </div>
        </div>
      </Section>

      {/* TimeLine */}
      <Section id="timeline" className="bg-bg-surface">
        <Timeline>
          {/* Mapeia cada item da timelineSteps e renderiza um TimelineItem para cada um, passando as propriedades do item como props para o componente TimelineItem. */}
          {timelineSteps.map((item, index) => (
            <TimelineItem key={index} {...item} /> // Renderiza o item da linha do tempo
          ))}
        </Timeline>
      </Section>

      {/* Gallery */}
      <Section id="gallery">
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="flex items-center justify-center lg:justify-start mb-12 lg:mb-20"
        >
          <Text variant="h2" className="uppercase font-normal">
            Fora do <strong className="font-semibold">código</strong>
          </Text>
        </motion.div>

        <div>
          {/* Gallery Desktop */}
          <div className="hidden lg:block">
            <BentoGrid>
              {desktopGallery.map((item) => (
                <BentoItem key={item.title} {...item} /> // Renderiza o item do carrossel para desktop, passando as propriedades do item como props para o componente BentoItem. item.title é usado como chave única para cada item renderizado, garantindo que o React possa identificar e gerenciar corretamente cada elemento na lista.
              ))}
            </BentoGrid>
          </div>

          {/* Gallery Mobile */}
          <div className="block lg:hidden">
            <BentoCarousel>
              {mobileGallery.map((item) => (
                <BentoItem key={item.title} {...item} textPosition="bottom" />
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
