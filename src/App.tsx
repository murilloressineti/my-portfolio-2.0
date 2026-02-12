import Text from "./components/text";
import Icon from "./components/icon";
import ArrowRight from "./assets/icons/arrow-right.svg?react";
import ArrowUpRight from "./assets/icons/arrow-up-right.svg?react";
import LinkedinLogo from "./assets/icons/linkedin-logo.svg?react";
import GitHubLogo from "./assets/icons/github-logo.svg?react";
import Tag from "./components/tag";
import Link from "./components/link";
import Button from "./components/button";
import Input from "./components/input";
import ProjectThumbnail from "./components/projectThumbnail";
import ThumbImg from "./assets/thumbnail/thumb.png";
import MackbookThumbImg from "./assets/thumbnail/macbook.png";
import ProjectCard from "./components/projectCard";

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

      <div></div>

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

        <div>
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
      </div>

      <div>
        <Button variant="primary" shape="rectangular">
          Veja Meus Projetos
        </Button>
        <Button variant="tertiary" shape="rectangular">
          Entre em contato
        </Button>
        <Button variant="quaternary" shape="rectangular">
          Conheça minha trajetória <Icon svg={ArrowUpRight} animate={true} />
        </Button>
      </div>

      <div className="flex">
        <Button
          as="a"
          href="https://github.com/murilloressineti"
          target="_blank"
          variant="quinary"
          shape="square"
          className="gap-0 flex items-center overflow-hidden transition-all duration-500 ease-in-out rounded-md hover:pr-6"
        >
          <Icon svg={GitHubLogo} />

          <Text
            variant="action-button"
            className="max-w-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-w-25 group-hover:opacity-100 group-hover:ml-2"
          >
            GITHUB
          </Text>
        </Button>

        <Button variant="tertiary" shape="rectangular">
          Acessar <Icon svg={ArrowUpRight} animate={true} />
        </Button>
      </div>

      <div className="flex flex-col gap-8 max-w-md">
        <Input
          label="Mensagem"
          placeholder="Conte-me sobre seu projeto ou ideia..."
        />

        <Input
          as="textarea"
          label="Mensagem"
          placeholder="Conte-me sobre seu projeto ou ideia..."
          className="min-h-50"
        />
      </div>

      <div className="flex flex-col gap-5">
        <ProjectThumbnail
          src={ThumbImg}
          alt="Preview do meu projeto React"
          variant="default"
          animate={true}
        ></ProjectThumbnail>

        <ProjectThumbnail
          src={ThumbImg}
          alt="Preview do meu projeto React"
          variant="default"
          animate={true}
        ></ProjectThumbnail>

        <ProjectThumbnail
          src={MackbookThumbImg}
          alt="Preview do meu projeto React"
          variant="full"
        ></ProjectThumbnail>
      </div>

      <div>
        <ProjectCard
          title="Portfólio Interativo de Desenvolvedor"
          description="Este projeto é um portfólio online interativo desenvolvido com foco em responsividade, acessibilidade e performance. A proposta é apresentar os projetos pessoais e profissionais de forma clara e objetiva, com navegação fluida e componentes reutilizáveis."
          imageSrc={ThumbImg}
          githubUrl="https://github.com/murilloressineti"
          deployUrl="https://www.google.com/"
          techs={["react", "react", "react"]}
        />
      </div>
    </div>
  );
}
