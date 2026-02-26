import { Button, Icon, Input, Tag, Text } from "./components/ui";
import ArrowUpRight from "./assets/icons/arrow-up-right.svg?react";

import GitHubLogo from "./assets/icons/github-logo.svg?react";

import { ProjectThumbnail, ProjectCard } from "./components/projects";
import ThumbImg from "./assets/images/thumbnail/thumb.png";
import MackbookThumbImg from "./assets/images/thumbnail/macbook.png";

import { Timeline, TimelineItem } from "./components/timeline";
import { timelineSteps } from "./constants/timeline-steps";

import { BentoGrid, BentoItem, BentoCarousel } from "./components/gallery";
import { galleryItems } from "./constants/gallery-items";

import { Header } from "./components/layout";
import { CTASection, Footer } from "./components/layout";

export default function App() {
  return (
    <div className="grid">
      <Header />

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
        <Timeline>
          {timelineSteps.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </Timeline>
      </section>

      {/* Gallery */}
      <div className="max-w-7xl md:mx-auto my-20  md:p-30 overflow-hidden">
        <div className="hidden md:block">
          <BentoGrid>
            {[...galleryItems]
              .sort((a, b) => (a.desktopOrder || 0) - (b.desktopOrder || 0))
              .map((item, index) => (
                <BentoItem key={index} {...item} />
              ))}
          </BentoGrid>
        </div>

        <div className="block md:hidden">
          <BentoCarousel>
            {galleryItems
              .sort((a, b) => (a.mobileOrder || 0) - (b.mobileOrder || 0))
              .map((item, index) => (
                <BentoItem key={index} {...item} textPosition="bottom" />
              ))}
          </BentoCarousel>
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}
