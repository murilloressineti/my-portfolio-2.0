import { useState } from "react";
import { Button, Link, Text, Icon } from "../ui";
import ArrowUpRight from "../../assets/icons/arrow-up-right.svg?react";
import LinkedinLogo from "../../assets/icons/linkedin-logo.svg?react";
import GitHubLogo from "../../assets/icons/github-logo.svg?react";
import List from "../../assets/icons/list.svg?react";
import Close from "../../assets/icons/close.svg?react";

import LogoFull from "../../assets/logo/logo.svg";
import LogoSymbol from "../../assets/logo/logo-symbol.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  const navLinks = [
    { label: "Página Inicial", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Projetos", href: "#projetos" },
  ];

  return (
    <div className="relative z-50 bg-#FAFAFA border-b border-b-neutral-gray-100 md:border-0 md:bg-transparent">
      <header className="w-full py-8 px-6 md:px-30">
        <div className="max-w-360 mx-auto flex items-center justify-between">
          {/* LOGO */}
          <a href="#home" className="shrink-0">
            <img
              src={LogoFull}
              alt="Murillo Ressineti"
              className="hidden md:block w-auto"
            />
            <img
              src={LogoSymbol}
              alt="Murillo Ressineti"
              className="block md:hidden w-auto"
            />
          </a>
          {/* NAVEGAÇÃO DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 bg-neutral-gray-100 backdrop-blur-md rounded-full px-6 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                isSelected={activeHref === link.href}
                onClick={() => setActiveHref(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* BOTÕES DE AÇÃO */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="secondary" shape="rounded">
              <Icon svg={GitHubLogo} />
            </Button>
            <Button variant="secondary" shape="rounded">
              <Icon svg={LinkedinLogo} />
            </Button>
            <Button
              variant="composite"
              shape="none"
              as="a"
              href="#contato"
              className="group gap-1.5"
            >
              <div className="rounded-full p-3 bg-neutral-white text-text-secondary border border-neutral-gray-300 group-hover:bg-neutral-gray-200 group-hover:border-neutral-gray-200 group-hover:text-text-primary transition-all duration-300">
                <Text variant="action-button">Vamos conversar</Text>
              </div>
              <div className="rounded-full p-3 bg-neutral-white border border-neutral-gray-300  group-hover:bg-neutral-gray-200 group-hover:border-neutral-gray-200 group-hover:fill-text-primary transition-all duration-300">
                <Icon svg={ArrowUpRight} animate={true} />
              </div>
            </Button>
          </div>
          {/* MOBILE ACTIONS */}
          <div className="flex md:hidden items-center gap-4">
            <Button
              variant="composite"
              shape="none"
              as="a"
              href="#contato"
              className="group gap-1.5"
            >
              <div className="rounded-full p-3 bg-neutral-white text-text-secondary border border-neutral-gray-300 group-hover:bg-neutral-gray-200 group-hover:border-neutral-gray-200 group-hover:text-text-primary transition-all duration-300">
                <Text variant="action-button">Vamos conversar</Text>
              </div>
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              isSelected={activeHref === link.href}
              onClick={() => {
                setActiveHref(link.href);
                setIsMenuOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex gap-3">
            <Button variant="secondary" shape="rounded">
              <Icon svg={GitHubLogo} />
            </Button>
            <Button variant="secondary" shape="rounded">
              <Icon svg={LinkedinLogo} />
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
