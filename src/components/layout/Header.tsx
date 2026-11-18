import { useEffect, useId, useRef, useState } from "react";

import { motion, MotionConfig } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import { fadeDown } from "@/lib/motion";

import { Button, Icon, NavLink, Text } from "../ui";

import {
  ArrowUpRight,
  Close,
  GitHubLogo,
  LinkedinLogo,
  List,
} from "@/assets/icons";
import { LogoFull, LogoSymbol } from "@/assets/logo";

export default function Header() {
  // Estado e referências do menu
  const location = useLocation();
  const [openLocation, setOpenLocation] = useState<typeof location | null>(
    null,
  );
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);

  // Mudar de localização invalida a abertura sem sincronizar outro estado em um efeito.
  const isMenuOpen = openLocation === location;
  const closeMenu = () => setOpenLocation(null);

  // Interação do menu mobile
  useEffect(() => {
    if (!isMenuOpen) return;

    // Restaura o valor que existia antes da abertura, inclusive na desmontagem do Header.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      event.preventDefault();
      setOpenLocation(null);
      menuButtonRef.current?.focus();
    };

    // Navegação não modal: sair pelo teclado fecha o overlay sem aprisionar o foco.
    const handleFocusIn = (event: FocusEvent) => {
      if (
        event.target instanceof Node &&
        !mobileMenuRef.current?.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target)
      ) {
        setOpenLocation(null);
      }
    };

    // Este limite precisa acompanhar o breakpoint lg do Tailwind usado nas classes do menu.
    const desktopMedia = window.matchMedia("(min-width: 64rem)");
    const handleDesktopChange = () => {
      if (!desktopMedia.matches) return;

      const activeElement = document.activeElement;
      const hasMenuFocus =
        activeElement === menuButtonRef.current ||
        (activeElement !== null &&
          mobileMenuRef.current?.contains(activeElement));

      setOpenLocation(null);
      if (hasMenuFocus) {
        desktopNavRef.current
          ?.querySelector<HTMLAnchorElement>("a[href]")
          ?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocusIn);
    desktopMedia.addEventListener("change", handleDesktopChange);
    handleDesktopChange();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn);
      desktopMedia.removeEventListener("change", handleDesktopChange);
    };
  }, [isMenuOpen]);

  // Links de navegação e redes sociais
  const navLinks = [
    { label: "Página Inicial", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Projetos", href: "/projetos" },
  ];

  const socialLinks = [
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
  ];

  return (
    <MotionConfig reducedMotion="user">
      <header
        className="relative z-50 w-full bg-bg-surface lg:bg-transparent"
        data-reduced-motion
      >
        <div className="w-full py-5 lg:pb-0 px-6 md:px-12 lg:px-30 max-w-420 mx-auto">
          <div className="flex items-center justify-between lg:py-5">
            {/* Identidade visual */}
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

            {/* Navegação desktop */}
            <motion.nav
              ref={desktopNavRef}
              {...fadeDown}
              transition={{ delay: 0.25 }}
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-8 bg-neutral-100 backdrop-blur-lg rounded-full px-6 py-3"
            >
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink to={link.href}>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Contato e redes sociais */}
            <motion.div
              {...fadeDown}
              transition={{ delay: 0.5 }}
              className="hidden lg:flex items-center gap-3"
            >
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
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
                  <Button as="span" shape="rounded" variant="navAction">
                    <Text as="span" variant="ui-action">
                      Vamos conversar
                    </Text>
                  </Button>
                  <Button as="span" shape="rounded" variant="navAction">
                    <Icon svg={ArrowUpRight} animate="rotate" />
                  </Button>
                </div>
              </Link>
            </motion.div>

            {/* Controle do menu mobile */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() =>
                isMenuOpen ? closeMenu() : setOpenLocation(location)
              }
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-controls={menuId}
              aria-expanded={isMenuOpen}
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

        {/* Mantém a transição montada; inert impede interação enquanto o menu está fechado. */}
        <nav
          ref={mobileMenuRef}
          id={menuId}
          aria-label="Navegação mobile"
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
          className={`fixed inset-0 bg-bg-default transition-all duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center gap-10 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-10 text-center">
            {navLinks.map((link) => (
              <li key={link.href} className="overflow-hidden">
                <NavLink
                  to={link.href}
                  className={`text-3xl font-medium transition-transform duration-500 ${isMenuOpen ? "translate-y-0" : "translate-y-10"}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/contato">
            <div className="group">
              <Button as="span" shape="rounded" variant="navAction">
                <Text as="span" variant="ui-action">
                  Vamos conversar
                </Text>
              </Button>
            </div>
          </Link>
          
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
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
    </MotionConfig>
  );
}
