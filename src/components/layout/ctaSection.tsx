import { Button, Text, Icon } from "../ui";
import ArrowUpRight from "../../assets/icons/arrow-up-right.svg?react";
import Download from "../../assets/icons/download.svg?react";
import LinkedinLogo from "../../assets/icons/linkedin-logo.svg?react";
import GitHubLogo from "../../assets/icons/github-logo.svg?react";
import GridBG from "../../assets/images/background/grid-bg.png";

export default function CTASection() {
  return (
    <section className="bg-black py-30 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-100 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${GridBG})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="max-w-7xl mx-auto items-center justify-center flex flex-col text-center relative z-10">
        <div className="max-w-175">
          <div className="flex flex-col">
            <Text variant="h1" className="text-neutral-white uppercase mb-3">
              Vamos trabalhar juntos?
            </Text>
            <Text
              variant="body-extra-large"
              className="text-neutral-gray-200 mb-8"
            >
              Sempre em busca de desafios e oportunidades que conectem
              propósito, tecnologia e impacto real.
            </Text>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center md:flex-row gap-5 mb-16">
            <Button
              variant="composite"
              className="w-68 md:w-auto bg-black border border-neutral-gray-200 text-text-inverted hover:bg-neutral-gray-200 hover:text-black"
            >
              Entre em contato
              <Icon
                svg={ArrowUpRight}
                animate={true}
                className="fill-neutral-white group-hover:fill-black"
              />
            </Button>

            <Button
              variant="composite"
              className="w-68 md:w-auto bg-black border border-neutral-gray-200  text-text-inverted hover:bg-neutral-gray-200 hover:text-black"
            >
              Baixar currículo
              <Icon
                svg={Download}
                animate={false}
                className="fill-neutral-white group-hover:fill-black transition-all duration-300 group-hover:translate-y-1"
              />
            </Button>
          </div>

          {/* Redes Sociais */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              target="_blank"
              className="group relative p-2 transition-all duration-500 ease-out hover:-translate-y-2"
              aria-label="LinkedIn"
            >
              <Icon
                svg={LinkedinLogo}
                className="fill-neutral-gray-400 transition-all duration-300 group-hover:fill-neutral-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
              />
              <span className="absolute inset-0 bg-neutral-white/5 rounded-full scale-0 group-hover:scale-125 transition-transform duration-500 blur-xl" />
            </a>

            <a
              href="#"
              target="_blank"
              className="group relative p-2 transition-all duration-500 ease-out hover:-translate-y-2"
              aria-label="GitHub"
            >
              <Icon
                svg={GitHubLogo}
                className="fill-neutral-gray-400 transition-all duration-300 group-hover:fill-neutral-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
              />
              <span className="absolute inset-0 bg-neutral-white/5 rounded-full scale-0 group-hover:scale-125 transition-transform duration-500 blur-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
