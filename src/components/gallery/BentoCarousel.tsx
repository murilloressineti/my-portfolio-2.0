import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "../../lib/utils";

interface BentoCarouselProps {
  children: React.ReactNode; // Aceita qualquer conteúdo React como filho, permitindo flexibilidade na composição dos itens do carrossel
}

export default function BentoCarousel({ children }: BentoCarouselProps) {
  // Configurações do Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // O carrossel não irá voltar ao início automaticamente
    align: "center", // Alinha os itens ao centro do carrossel
    containScroll: "trimSnaps", // Garante que o carrossel pare no final dos itens, evitando espaços vazios
  });

  const [selectedIndex, setSelectedIndex] = useState(0); // Estado para rastrear o índice do item atualmente selecionado no carrossel

  const totalItems = React.Children.count(children); // Conta o número total de itens filhos para renderizar os pontos de navegação corretamente

  // Faz uma única coisa: pergunta para o motor (emblaApi) qual é o índice do item que está atualmente selecionado e atualiza o estado selectedIndex com essa informação.
  const onSelect = useCallback(() => {
    if (!emblaApi) return; // Verifica se o emblaApi está disponível antes de tentar acessar suas funções
    setSelectedIndex(emblaApi.selectedScrollSnap()); // Atualiza o estado selectedIndex com o índice do item atualmente selecionado, obtido através da função selectedScrollSnap() do emblaApi
    
  }, [emblaApi]); // O useCallback é usado para memorizar a função onSelect, garantindo que ela seja recriada apenas quando o emblaApi mudar, o que pode melhorar a performance ao evitar re-renderizações desnecessárias.

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* VIEWPORT DO EMBLA */}
      <div
        className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
        ref={emblaRef} // A referência do Embla Carousel é passada para este div, permitindo que o Embla controle o comportamento de rolagem e interação do carrossel
      >
        {/* O container flexível que envolve os itens do carrossel, permitindo que eles sejam dispostos em linha e possam ser rolados horizontalmente. A classe touch-pan-y permite que o carrossel seja rolado verticalmente em dispositivos móveis, evitando conflitos com a rolagem horizontal do carrossel. */}
        <div className="flex touch-pan-y">
          {/*// Mapeia cada filho passado para o componente BentoCarousel e os envolve em um div com estilos específicos. A classe flex-[0_0_100%] garante que cada item ocupe 100% da largura do carrossel, enquanto min-w-0 evita que os itens cresçam além do necessário.*/}
          {React.Children.map(children, (child) => (
            <div className="flex-[0_0_100%] min-w-0 p-4 h-125">
              <div className="h-full w-full">{child}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION DOTS */}
      <div className="flex justify-center items-center gap-2">
        {Array.from({ length: totalItems }).map(
          (
            _, // O primeiro parâmetro é o valor do elemento (que não é usado, por isso é representado por _), e o segundo parâmetro é o
            index, // Cria um array do tamanho do número total de itens e mapeia sobre ele para renderizar os pontos de navegação. Cada ponto é um botão que, quando clicado, chama a função scrollTo do emblaApi para navegar até o item correspondente no carrossel.
          ) => (
            <button
              key={index}
              aria-label={`Ir para o slide ${index + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                index === selectedIndex // Verifica se o índice do ponto atual é igual ao índice do item selecionado para aplicar estilos diferentes, indicando visualmente qual item está ativo no carrossel.
                  ? "bg-brand-primary w-6"
                  : "bg-neutral-300 w-1.5",
              )}
              onClick={() => emblaApi?.scrollTo(index)} // Navega para o item correspondente no carrossel quando o ponto é clicado, usando a função scrollTo do emblaApi.
            />
          ),
        )}
      </div>
    </div>
  );
}
