import { Section } from "../components/layout";
import { Text } from "../components/ui";

export default function Home() {
  return (
    <main>
      <Section
        id="hero"
        className="flex flex-col items-center justify-center text-center"
      >
        <div className="flex flex-col items-center justify-center gap-2 max-w-212.5 mx-auto">
          <Text variant="hero-desktop" className="text-text-primary">
            DESENVOLVEDOR <strong>FRONT-END</strong>
          </Text>

          <Text
            variant="body-extra-large"
            className="text-text-primary opacity-70 min-w-258"
          >
            Transformo ideias em experiências digitais intuitivas, acessíveis e
            impactantes. Meu foco está em performance, propósito e design
            funcional.
          </Text>
        </div>
      </Section>

      <Section id="aboutMe" className="bg-bg-surface">
        <h1>Evoluir como pessoa é o meu maior projeto.</h1>
      </Section>

      <Section id="skills" className="bg-neutral-gray-50">
        <h1>Minhas habilidades</h1>
      </Section>
    </main>
  );
}
