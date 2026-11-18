import React, { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

import { cn } from "../../lib/utils";

interface BentoCarouselProps {
  children: React.ReactNode;
}

export default function BentoCarousel({ children }: BentoCarouselProps) {
  // Configuração e seleção do carrossel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const totalItems = React.Children.count(children);

  // Sincronização da posição
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // A API é criada depois da montagem; o frame lê a posição inicial e pode ser cancelado no cleanup.
    const frame = requestAnimationFrame(onSelect);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    // A mesma função precisa ser removida para não acumular assinaturas em remontagens.
    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Área dos slides */}
      <div
        className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {React.Children.map(children, (child) => (
            <div className="flex-[0_0_100%] min-w-0 p-4 h-125">
              <div className="h-full w-full">{child}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navegação por indicadores */}
      <div className="flex justify-center items-center gap-2">
        {Array.from({ length: totalItems }).map(
          (_, index) => (
            <button
              key={index}
              aria-label={`Ir para o slide ${index + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                index === selectedIndex
                  ? "bg-brand-primary w-6"
                  : "bg-neutral-300 w-1.5",
              )}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ),
        )}
      </div>
    </div>
  );
}
