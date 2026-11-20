import { motion, MotionConfig } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeUp } from "@/lib/motion";

import { Section } from ".";
import { Button, Icon, Text } from "../ui";

import {
  ArrowUpRight,
  Download,
  GitHubLogo,
  LinkedinLogo,
} from "@/assets/icons";
import { GridBackground } from "@/assets/images/background";

export default function CTASection() {
  return (
    <MotionConfig reducedMotion="user">
      <Section
        id="cta"
        className="respect-reduced-motion bg-neutral-black relative overflow-hidden text-center md:py-20"
      >
        {/* Fundo decorativo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none z-0 bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${GridBackground})` }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="max-w-165">
            {/* Convite para contato */}
            <motion.header {...fadeUp} className="flex flex-col">
              <Text
                as="h2"
                variant="h2"
                className="text-neutral-white uppercase mb-3"
              >
                Vamos trabalhar juntos?
              </Text>
              <Text
                variant="body-lg"
                className="md:text-2xl leading-snug tracking-tight text-neutral-200 mb-8"
              >
                Disponível para oportunidades onde possa desenvolver, aprender e
                contribuir em projetos reais.
              </Text>
            </motion.header>

            {/* Contato e currículo */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row items-center justify-center gap-5 mb-12"
            >
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
                  href: "/curriculo_murillo_ressineti_desenvolvedor_de_software.pdf",
                  download: "Curriculo_Murillo_Ressineti.pdf",
                  animate: "down" as const,
                },
              ].map((item) => {
                const content = (
                  <>
                    <Text as="span" variant="ui-action">
                      {item.label}
                    </Text>
                    <Icon
                      svg={item.icon}
                      animate={item.animate}
                      className="fill-neutral-white group-hover:fill-neutral-black"
                    />
                  </>
                );
                // Os ramos separam props de Link e âncora para que o TypeScript confira cada elemento.
                return item.to ? (
                  <Button
                    key={item.label}
                    as={Link}
                    to={item.to}
                    variant="footerCta"
                    className="w-auto"
                  >
                    {content}
                  </Button>
                ) : (
                  <Button
                    key={item.label}
                    as="a"
                    href={item.href}
                    download={item.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="footerCta"
                    className="w-auto"
                  >
                    {content}
                  </Button>
                );
              })}
            </motion.div>
            
            {/* Redes sociais */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-5"
            >
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
            </motion.div>
          </div>
        </div>
      </Section>
    </MotionConfig>
  );
}
