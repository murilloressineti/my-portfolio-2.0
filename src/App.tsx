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
import TimelineItem from "./components/timelineItem";

const myJourney = [
  {
    title: "Primmeiros passos na programação",
    description: "Introdução à lógica e fundamentos.",
    date: "Setembro 2022",
    tag: "Início da Jornada",
    side: "left",
  },
  {
    title: "Descobrindo o front-end",
    description:
      "Foco em interfaces visuais, culminando no Projeto RocketMovies.",
    date: "Março 2023",
    tag: "Desenvolvimento Web",
    side: "right",
  },
  {
    title: "Formação full-stack",
    description:
      "Aprofundamento técnico, elevando o conhecimento para o desenvolvimento web completo.",
    date: "Agosto 2024",
    tag: "Expansão Técnica",
    side: "left",
  },
  {
    title: "Atuação e ensino superior",
    description:
      "Início como Assistente de Sistemas no IJC e do curso de Análise e Desenvolvimento de Sistemas.",
    date: "Janeiro 2025",
    tag: "Início Profissional e Acadêmico",
    side: "right",
  },
];

export default function App() {
  return (
    <div className="grid gap-3">
      {/* Text */}
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

      {/* Icon */}
      <div className="flex gap-1">
        <Icon svg={ArrowRight} className="fill-brand-primary" animate />
      </div>

      {/* Tag */}
      <div>
        <Tag dot="react" size="default">
          React
        </Tag>
        <Tag dot="tailwind" size="default">
          Tailwind CSS
        </Tag>
        <Tag dot="typescript" size="default">
          TypeScript
        </Tag>
        <Tag dot="figma" size="default">
          Figma
        </Tag>
        <Tag dot="git" size="default">
          Git
        </Tag>
      </div>

      {/* Link */}
      <div>
        <Link href="/" isSelected>
          Página Inicial
        </Link>
        <Link href="#">Sobre</Link>
      </div>

      {/* Button Header */}
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

      {/* Button */}
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

      {/* Button GitHub */}
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

      {/* Input */}
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

      {/* Thumbnail */}
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

      {/* ProjectCard */}
      <div className="w-full overflow-hidden p-4 md:px-30">
        <ProjectCard
          title="Landing Page - Clube de Assinatura de Livros"
          description="Este projeto é um portfólio online interativo desenvolvido com foco em responsividade, acessibilidade e performance. A proposta é apresentar os projetos pessoais e profissionais de forma clara e objetiva, com navegação fluida e componentes reutilizáveis."
          imageSrc={ThumbImg}
          githubUrl="https://github.com/murilloressineti"
          deployUrl="https://www.google.com/"
          techs={["react", "react", "react", "react", "react", "react"]}
        />
      </div>

      {/* ProjectCard Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-20">
          <Text variant="headline-medium">Portfólio</Text>
          <Text variant="h2" className="uppercase">
            Veja os outros projetos
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <ProjectCard
            variant="grid"
            title="Landing Page - Clube de Assinatura"
            description="Landing page responsiva e visualmente atraente para um clube de assinatura de livros. O objetivo foi criar uma experiência informativa e envolvente, destacando o produto e capturando a atenção do visitante."
            imageSrc={ThumbImg}
            githubUrl="#"
            deployUrl="#"
            techs={["react", "tailwind", "figma", "figma", "figma", "figma"]}
          />
          {/* Card 2 */}
          <ProjectCard
            variant="grid"
            title="Landing Page - Clube de Assinatura"
            description="Landing page responsiva e visualmente atraente para um clube de assinatura de livros. O objetivo foi criar uma experiência informativa e envolvente, destacando o produto e capturando a atenção do visitante."
            imageSrc={ThumbImg}
            githubUrl="#"
            deployUrl="#"
            techs={["react", "tailwind", "figma"]}
          />
          {/* Card 3 */}
          <ProjectCard
            variant="grid"
            title="Landing Page - Clube de Assinatura"
            description="Landing page responsiva e visualmente atraente para um clube de assinatura de livros. O objetivo foi criar uma experiência informativa e envolvente, destacando o produto e capturando a atenção do visitante."
            imageSrc={ThumbImg}
            githubUrl="#"
            deployUrl="#"
            techs={["react", "tailwind", "figma"]}
          />
        </div>
      </section>

      {/* TimeLine */}
      <section className="min-h-screen bg-white py-20 px-4 bg-bg-surface">
        <div className="max-w-6xl mx-auto flex flex-col border border-b-bg-dark">
          {/* Teste 1: Lado Esquerdo (Início) */}
          <TimelineItem
            side="left"
            title="Primeiros passos na programação"
            description="Introdução à lógica e fundamentos."
            date="Setembro 2022"
            badgeText="Início da Jornada"
            badgeIcon={<ArrowUpRight className="w-6 h-6" />}
          />

          {/* Teste 2: Lado Direito (Avanço) */}
          <TimelineItem
            side="right"
            title="Descobrindo o front-end"
            description="Foco em interfaces visuais, culminando no Projeto RocketMovies."
            date="Março 2023"
            badgeText="Desenvolvimento Web"
            badgeIcon={<ArrowUpRight className="w-6 h-6" />}
          />
        </div>
      </section>
    </div>
  );
}
