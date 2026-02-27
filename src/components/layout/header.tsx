import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, NavLink, Text, Icon } from "../ui";
import ArrowUpRight from "../../assets/icons/arrow-up-right.svg?react";
import LinkedinLogo from "../../assets/icons/linkedin-logo.svg?react";
import GitHubLogo from "../../assets/icons/github-logo.svg?react";
import List from "../../assets/icons/list.svg?react";
import Close from "../../assets/icons/close.svg?react";

import LogoFull from "../../assets/logo/logo.svg?react";
import LogoSymbol from "../../assets/logo/logo-symbol.svg?react";

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
    <div className="relative z-50 bg-bg-default border-b border-b-neutral-gray-100 md:border-0 md:bg-transparent">
      <header className="w-full py-8 px-6 md:px-30">
        <div className="max-w-360 mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="shrink-0">
            <LogoFull className="hidden md:block w-auto" />
            <LogoSymbol className="block md:hidden w-auto fill-brand-primary" />
          </Link>

          {/* NAVEGAÇÃO DESKTOP */}
          <nav className="hidden md:flex items-center gap-12 bg-neutral-gray-100 backdrop-blur-md rounded-full px-12 py-3">
            {navLinks.map((link) => {
              const isSelected = location.pathname === link.href;

              return (
                <NavLink
                  key={link.href}
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
              );
            })}
          </nav>

          {/* BOTÕES DE AÇÃO */}
          <div className="hidden md:flex items-center gap-3">
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
            <Link to="/contato">
              <Button
                variant="composite"
                shape="none"
                className="group gap-1.5"
              >
                <div className="rounded-full p-3 bg-neutral-white text-text-secondary border border-neutral-gray-300 group-hover:bg-neutral-gray-200 group-hover:border-neutral-gray-200 group-hover:text-text-primary transition-all duration-300">
                  <Text variant="action-button">Vamos conversar</Text>
                </div>
                <div className="rounded-full p-3 bg-neutral-white border border-neutral-gray-300  group-hover:bg-neutral-gray-200 group-hover:border-neutral-gray-200 group-hover:fill-text-primary transition-all duration-300">
                  <Icon svg={ArrowUpRight} animate={true} />
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
                <div className="rounded-full p-3 bg-neutral-white text-text-secondary border border-neutral-gray-300 group-hover:bg-neutral-gray-200 group-hover:border-neutral-gray-200 group-hover:text-text-primary transition-all duration-300">
                  <Text variant="action-button">Vamos conversar</Text>
                </div>
                <div className="rounded-full p-3 bg-neutral-white border border-neutral-gray-300  group-hover:bg-neutral-gray-200 group-hover:border-neutral-gray-200 group-hover:fill-text-primary transition-all duration-300">
                  <Icon svg={ArrowUpRight} animate={true} />
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
                className={`transition-all duration-300 transform ${isMenuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"}`}
              >
                <Icon svg={isMenuOpen ? Close : List} className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}
      <div
        className={`fixed inset-0 bg-bg-default z-[-1] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {navLinks.map((link) => {
            const isSelected = location.pathname === link.href;

            return (
              <NavLink
                key={link.href}
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
            );
          })}

          <div className="flex gap-3">
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
          </div>
        </nav>
      </div>
    </div>
  );
}
