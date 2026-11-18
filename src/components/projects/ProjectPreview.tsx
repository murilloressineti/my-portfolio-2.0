import { ArrowUpRight } from "@/assets/icons";
import { Button, Icon } from "@/components/ui";
import { imageMetadata } from "@/constants/image-metadata";

interface ProjectPreviewProps {
  src: string;
  title: string;
  deployUrl?: string;
}

export default function ProjectPreview({
  src,
  title,
  deployUrl,
}: ProjectPreviewProps) {
  const preview = (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-md transition-transform duration-500 ease-out motion-reduce:transition-none group-hover/preview:scale-[1.02]">
      {/* Barra do navegador */}
      <div className="flex items-center gap-1.5 border-b border-neutral-100 px-3 py-1.5">
        <span className="size-2 rounded-full bg-[#FF5F57]" />
        <span className="size-2 rounded-full bg-[#FEBC2E]" />
        <span className="size-2 rounded-full bg-[#28C840]" />
      </div>

      {/* Imagem */}
      <div className="h-36 overflow-hidden sm:h-44">
        <img
          src={src}
          {...imageMetadata[src]}
          alt={`Prévia da interface do projeto ${title}`}
          loading="lazy"
          decoding="async"
          className="h-auto w-full pointer-events-none"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-neutral-100 p-5 md:flex-row md:items-center md:gap-8 md:p-8">
      {/* Preview visual */}
      <div className="w-full min-w-0 md:flex-1">
        {deployUrl ? (
          <a
            href={deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Acessar projeto ${title}`}
            className="group/preview block rounded-lg cursor-pointer"
          >
            {preview}
          </a>
        ) : (
          preview
        )}
      </div>

      {/* Divisor */}
      <div
        aria-hidden="true"
        className="hidden h-32 w-px shrink-0 bg-neutral-200 md:block"
      />

      {/* Informações */}
      <div className="flex w-full flex-col gap-3 md:flex-1">
        <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
          Prévia do projeto
        </span>

        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-neutral-black">
            Interface da aplicação
          </h3>

          {deployUrl && (
            <Button
              as="a"
              href={deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="projectDeploy"
              shape="square"
              size="md"
              aria-label={`Acessar projeto ${title}`}
              title={`Acessar ${title}`}
              className="shrink-0"
            >
              <Icon svg={ArrowUpRight} animate="rotate" />
            </Button>
          )}
        </div>

        <p className="text-sm leading-relaxed text-text-secondary">
          Um recorte visual da experiência desenvolvida.
        </p>
      </div>
    </div>
  );
}
