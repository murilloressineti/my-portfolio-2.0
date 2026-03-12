import { Link } from "react-router-dom";
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
  return (
    <Section
      id="cta"
      className="bg-neutral-black relative overflow-hidden text-center md:py-20"
    >
      <div
        className="absolute inset-0 opacity-50 pointer-events-none z-0 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${GridBackground})` }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-165">
          <header className="flex flex-col">
            <Text variant="h2" className="text-neutral-white uppercase mb-3">
              Vamos trabalhar juntos?
            </Text>
            <Text className="text-2xl leading-snug tracking-tight text-neutral-200 mb-8">
              Sempre em busca de desafios e oportunidades que conectem
              propósito, tecnologia e impacto real.
            </Text>
          </header>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-12">
            {[
              {
                label: "Entre em contato",
                icon: ArrowUpRight,
                to: "/contato",
                animate: "rotate" as const,
              },
              {
                label: "Baixar currículo",
                icon: Download,
                href: "/seu-curriculo.pdf",
                animate: "down" as const,
              },
            ].map((item) => (
              <Button
                key={item.label}
                as={item.to ? Link : "a"}
                to={item.to}
                href={item.href}
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noopener noreferrer" : undefined}
                variant="footerCta"
                className="w-auto"
              >
                {item.label}
                <Icon
                  svg={item.icon}
                  animate={item.animate}
                  className="fill-neutral-white group-hover:fill-neutral-black"
                />
              </Button>
            ))}
          </div>

          {/* Redes Sociais */}
          <div className="flex items-center justify-center gap-5">
            {[
              {
                href: "https://linkedin.com/in/murilloressineti/",
                icon: LinkedinLogo,
                label: "LinkedIn",
              },
              {
                href: "https://github.com/murilloressineti",
                icon: GitHubLogo,
                label: "GitHub",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group p-2 transition-all duration-500 ease-out hover:-translate-y-2"
              >
                <Icon
                  svg={social.icon}
                  className="fill-neutral-400 transition-all duration-300 group-hover:fill-neutral-white"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
