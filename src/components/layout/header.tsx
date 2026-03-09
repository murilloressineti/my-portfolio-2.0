import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Button, NavLink, Text, Icon } from "../ui";

import {
  ArrowUpRight,
  Close,
  GitHubLogo,
  LinkedinLogo,
  List,
} from "@/assets/icons";

import { LogoFull, LogoSymbol } from "@/assets/logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Página Inicial", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Projetos", href: "/projetos" },
  ];

  return (
    <header className="relative z-50 bg-bg-default border-b border-b-neutral-gray-100 md:border-0 md:bg-transparent">
      <div className="w-full py-5 md:pb-0 px-6 md:px-30 max-w-420 mx-auto">
        <div className="flex items-center justify-between md:p-5">
          {/* LOGO */}
          <Link to="/" aria-label="Ir para página inicial" className="shrink-0">
            <LogoFull className="hidden md:block w-auto" />
            <LogoSymbol className="block md:hidden w-auto fill-brand-primary" />
          </Link>

          {/* NAVEGAÇÃO DESKTOP */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-8 bg-neutral-100 backdrop-blur-md rounded-full px-6 py-3"
          >
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isSelected = location.pathname === link.href;

                return (
                  <li key={link.href}>
                    <NavLink
                      href={link.href}
                      isSelected={isSelected}
                      aria-current={isSelected ? "page" : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(link.href);
                      }}
                      className="tracking-wide"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* AÇÕES DESKTOP */}
          <div className="hidden md:flex items-center gap-3">
            {/* LINKS SOCIAIS */}
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                shape="rounded"
                as="a"
                href="https://www.linkedin.com/in/murilloressineti/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar meu LinkedIn"
              >
                <Icon svg={LinkedinLogo} />
              </Button>

              <Button
                variant="secondary"
                shape="rounded"
                as="a"
                href="https://github.com/murilloressineti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar meu GitHub"
              >
                <Icon svg={GitHubLogo} />
              </Button>
            </div>

            {/* CTA */}
            <Link to="/contato">
              <Button
                variant="composite"
                shape="none"
                className="group gap-1.5"
              >
                <div className="rounded-full p-3 bg-neutral-white text-text-secondary border border-neutral-300 group-hover:bg-neutral-200 group-hover:border-neutral-200 transition-all duration-300">
                  <Text variant="ui-action">Vamos conversar</Text>
                </div>

                <div className="rounded-full p-3 bg-neutral-white text-text-secondary border border-neutral-300 group-hover:bg-neutral-200 group-hover:border-neutral-200 transition-all duration-300">
                  <Icon svg={ArrowUpRight} animate="rotate" />
                </div>
              </Button>
            </Link>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex md:hidden items-center gap-4">
            <Link to="/contato">
              <Button
                variant="composite"
                shape="none"
                className="group gap-1.5"
              >
                <div className="rounded-full p-3 bg-neutral-white text-text-secondary border border-neutral-300 group-hover:bg-neutral-200 group-hover:border-neutral-200 transition-all duration-300">
                  <Text variant="ui-action">Vamos conversar</Text>
                </div>

                <div className="rounded-full p-3 bg-neutral-white text-text-secondary border border-neutral-300 group-hover:bg-neutral-200 group-hover:border-neutral-200 transition-all duration-300">
                  <Icon svg={ArrowUpRight} animate="rotate" />
                </div>
              </Button>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="text-neutral-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <div
                className={`transition-all duration-300 transform ${
                  isMenuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
                }`}
              >
                <Icon svg={isMenuOpen ? Close : List} className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <nav
        id="mobile-menu"
        aria-label="Navegação principal"
        className={`fixed inset-0 bg-bg-default z-[-1] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-10 text-center">
          {navLinks.map((link) => {
            const isSelected = location.pathname === link.href;

            return (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  isSelected={isSelected}
                  aria-current={isSelected ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="flex gap-3 mt-10">
          <Button
            variant="secondary"
            shape="rounded"
            as="a"
            href="https://www.linkedin.com/in/murilloressineti/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar meu LinkedIn"
          >
            <Icon svg={LinkedinLogo} />
          </Button>

          <Button
            variant="secondary"
            shape="rounded"
            as="a"
            href="https://github.com/murilloressineti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar meu GitHub"
          >
            <Icon svg={GitHubLogo} />
          </Button>
        </div>
      </nav>
    </header>
  );
}
