import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, NavLink, Text, Icon } from "../ui";
import {
  ArrowUpRight,
  Close,
  GitHubLogo,
  LinkedinLogo,
  List,
} from "@/assets/icons";
import { LogoFull, LogoSymbol } from "@/assets/logo";
import { fadeDown } from "@/lib/motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu mobile. Funciona como uma lâmpada que acende quando o menu está aberto e apaga quando fechado

  const location = useLocation(); // Hook para detectar mudanças de rota e fechar o menu

  useEffect(() => setIsMenuOpen(false), [location]); // Toda vez que o GPS (location) mudar, apague a lâmpada do menu

  useEffect(() => {
    // Controla o scroll do body quando o menu está aberto
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const navLinks = [
    // Centralizando os links de navegação para evitar repetição
    { label: "Página Inicial", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Projetos", href: "/projetos" },
  ];

  return (
    <header className="relative z-50 w-full bg-bg-surface lg:bg-transparent">
      {/* CONTAINER PRINCIPAL */}
      <div className="w-full py-5 lg:pb-0 px-6 md:px-12 lg:px-30 max-w-420 mx-auto">
        <div className="flex items-center justify-between lg:py-5">
          {/* LOGO - Entra primeiro */}
          <motion.div {...fadeDown}>
            <Link
              to="/"
              aria-label="Ir para página inicial"
              className="shrink-0"
            >
              <LogoFull className="hidden lg:block w-auto" />
              <LogoSymbol className="block lg:hidden w-auto fill-brand-primary" />
            </Link>
          </motion.div>

          {/* NAVEGAÇÃO DESKTOP - Delay 0.25s */}
          <motion.nav
            {...fadeDown}
            transition={{ delay: 0.25 }}
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-8 bg-neutral-100 backdrop-blur-lg rounded-full px-6 py-3"
          >
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    isSelected={location.pathname === link.href} // Verifica se o link é o selecionado para aplicar estilos
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* AÇÕES DESKTOP - Delay 0.5s */}
          <motion.div
            {...fadeDown}
            transition={{ delay: 0.5 }}
            className="hidden lg:flex items-center gap-3"
          >
            <div className="flex items-center gap-3">
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
                <Button
                  key={social.label}
                  as="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  shape="rounded"
                  aria-label={social.label}
                >
                  <Icon svg={social.icon} />
                </Button>
              ))}
            </div>

            <Link to="/contato">
              <div className="flex group gap-1.5 ">
                <Button shape="rounded" variant="navAction">
                  <Text variant="ui-action">Vamos conversar</Text>
                </Button>

                <Button shape="rounded" variant="navAction">
                  <Icon svg={ArrowUpRight} animate="rotate" />
                </Button>
              </div>
            </Link>
          </motion.div>

          {/* BOTÃO MENU MOBILE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna o estado do menu
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="lg:hidden p-2 z-50 relative cursor-pointer"
          >
            <div
              className={`transition-transform duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"}`}
            >
              <Icon svg={isMenuOpen ? Close : List} className="w-8 h-8" />
            </div>
          </button>
        </div>
      </div>

      {/* MENU MOBILE OVERLAY - Mantendo sua lógica de CSS Transition para performance mobile */}
      <nav
        className={`fixed inset-0 bg-bg-default transition-all duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center gap-10 ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {/* ... conteúdo do menu mobile ... */}
        <ul className="flex flex-col items-center gap-10 text-center">
          {navLinks.map((link) => {
            const isSelected = location.pathname === link.href; // Verifica se o link é o selecionado para aplicar estilos
            return (
              <li key={link.href} className="overflow-hidden">
                <NavLink
                  href={link.href}
                  isSelected={isSelected}
                  className={`text-3xl font-medium transition-transform duration-500 ${isMenuOpen ? "translate-y-0" : "translate-y-10"}`}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <Link to="/contato">
          <div className="group">
            <Button shape="rounded" variant="navAction">
              <Text variant="ui-action">Vamos conversar</Text>
            </Button>
          </div>
        </Link>

        <div className="flex items-center gap-3">
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
            <Button
              key={social.label}
              as="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              shape="rounded"
              aria-label={social.label}
            >
              <Icon svg={social.icon} />
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
}
