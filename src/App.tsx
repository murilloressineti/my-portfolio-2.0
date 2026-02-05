import Text from "./components/text";
import Icon from "./components/icon";
import ArrowRight from "./assets/icons/arrow-right.svg?react";
import ArrowUpRight from "./assets/icons/arrow-up-right.svg?react";
import LinkedinLogo from "./assets/icons/linkedin-logo.svg?react";
import GitHubLogo from "./assets/icons/github-logo.svg?react";
import Tag from "./components/tag";
import Link from "./components/link";
import Button from "./components/button";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text variant="hero-desktop" className="text-feedback-error">
          Olá, mundo!
        </Text>
        <Text variant="hero-mobile" className="text-feedback-error">
          Olá, mundo!
        </Text>
        <Text variant="body-extra-large" className="text-feedback-success">
          Olá, mundo!
        </Text>
        <Text variant="body-large" className="text-feedback-success">
          Olá, mundo!
        </Text>
        <Text variant="body-base" className="text-feedback-success">
          Olá, mundo!
        </Text>
        <Text variant="body-small" className="text-feedback-success">
          Olá, mundo!
        </Text>
        <Text variant="h1" className="text-brand-primary">
          Olá, mundo!
        </Text>
        <Text variant="h2" className="text-brand-primary">
          Olá, mundo!
        </Text>
        <Text variant="h3" className="text-brand-primary">
          Olá, mundo!
        </Text>
        <Text variant="h4" className="text-brand-primary">
          Olá, mundo!
        </Text>
        <Text variant="h5" className="text-brand-primary">
          Olá, mundo!
        </Text>
        <Text variant="action-link" className="text-text-link">
          Link
        </Text>
        <Text variant="action-button" className="text-text-link">
          Link
        </Text>
        <Text variant="headline-medium" className="text-text-link">
          Link
        </Text>
        <Text variant="headline-small" className="text-text-link">
          Link
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={ArrowRight} className="fill-brand-primary" animate />
      </div>

      <div>
        <Tag dot="react">React</Tag>
        <Tag dot="tailwind">Tailwind CSS</Tag>
        <Tag dot="typescript">TypeScript</Tag>
        <Tag dot="figma">Figma</Tag>
        <Tag dot="git">Git</Tag>
      </div>

      <div>
        <Link href="/" isSelected>
          Página Inicial
        </Link>
        <Link href="#">Sobre</Link>
      </div>

      <div className="flex gap-3">
        <Button variant="secondary" shape="rounded">
          <Icon svg={GitHubLogo} />
        </Button>
        <Button variant="secondary" shape="rounded">
          <Icon svg={LinkedinLogo} />
        </Button>

        <div className="flex gap-1.5">
          <Button variant="secondary" shape="rounded">
            Vamos conversar
          </Button>
          <Button variant="secondary" shape="rounded">
            <Icon svg={ArrowUpRight} />
          </Button>
        </div>
      </div>

      <div>
        {/* Componente Text dentro do button? */}
        <Button variant="primary" shape="rectangular">
          <Text variant="action-button">Veja Meus Projetos</Text>
        </Button>
        {/* Definir padrão de texto dentro do Componente Button no CVA? */}
        <Button variant="tertiary" shape="rectangular">
          Entre em contato
        </Button>
        <Button variant="quartenary" shape="rectangular">
          Conheça minha trajetória <Icon svg={ArrowUpRight} />
        </Button>
      </div>

      <div className="flex">
        <Button variant="quinary" shape="square" size="lg">
          <Icon svg={GitHubLogo} />
        </Button>
        <Button variant="tertiary" shape="rectangular">
          Acessar <Icon svg={ArrowUpRight} />
        </Button>
      </div>
    </div>
  );
}
