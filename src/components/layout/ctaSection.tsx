import { useNavigate } from "react-router-dom";
import { Button, Text, Icon } from "../ui";
import { Section } from "../layout";
import {
  ArrowUpRight,
  Download,
  LinkedinLogo,
  GitHubLogo,
} from "@/assets/icons";
import { GridBackground } from "@/assets/images/background";

export default function CTASection() {
  const navigate = useNavigate();
  return (
    <Section className="bg-neutral-black relative overflow-hidden text-center">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none z-0 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${GridBackground})` }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-175">
          <header className="flex flex-col">
            <Text variant="h2" className="text-neutral-white uppercase mb-3">
              Vamos trabalhar juntos?
            </Text>
            <Text
              className="text-2xl leading-snug tracking-tight text-neutral-200 mb-8"
            >
              Sempre em busca de desafios e oportunidades que conectem
              propósito, tecnologia e impacto real.
            </Text>
          </header>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center md:flex-row gap-5 mb-16">
            <Button
              variant="composite"
              className="w-68 md:w-auto bg-black border border-neutral-200 text-text-inverted hover:bg-neutral-200 hover:text-black"
              onClick={() => navigate("/contato")}
            >
              Entre em contato
              <Icon
                svg={ArrowUpRight}
                animate="rotate"
                className="fill-neutral-white group-hover:fill-black"
              />
            </Button>

            <Button
              variant="composite"
              className="w-68 md:w-auto bg-black border border-neutral-200  text-text-inverted hover:bg-neutral-200 hover:text-black"
            >
              Baixar currículo
              <Icon
                svg={Download}
                animate="down"
                className="fill-neutral-white group-hover:fill-black"
              />
            </Button>
          </div>

          {/* Redes Sociais */}
          <div className="flex items-center justify-center gap-6">
            <a
              className="group relative p-2 transition-all duration-500 ease-out hover:-translate-y-2"
              href="https://www.linkedin.com/in/murilloressineti/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar meu LinkedIn"
            >
              <Icon
                svg={LinkedinLogo}
                className="fill-neutral-400 transition-all duration-300 group-hover:fill-neutral-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
              />
              <span className="absolute inset-0 bg-neutral-white/5 rounded-full scale-0 group-hover:scale-125 transition-transform duration-500 blur-xl" />
            </a>

            <a
              className="group relative p-2 transition-all duration-500 ease-out hover:-translate-y-2"
              href="https://github.com/murilloressineti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar meu GitHub"
            >
              <Icon
                svg={GitHubLogo}
                className="fill-neutral-400 transition-all duration-300 group-hover:fill-neutral-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
              />
              <span className="absolute inset-0 bg-neutral-white/5 rounded-full scale-0 group-hover:scale-125 transition-transform duration-500 blur-xl" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
