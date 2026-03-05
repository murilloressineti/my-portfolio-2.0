import { useNavigate } from "react-router-dom";
import { Section } from "../components/layout";
import { Button, Icon, Text } from "../components/ui";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg?react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main>
      <Section className="flex min-h-screen flex-col items-center justify-center py-20 md:w-290 mx-auto">
        {/* Título Principal */}
        <div className="flex flex-col mb-4">
          <Text variant="h1" className="uppercase font-normal">
            <strong className="font-semibold">Ops!</strong> Parece que você se
            perdeu no caminho.
          </Text>
        </div>

        {/* Mensagem */}
        <Text
          variant="body-extra-large"
          className="text-text-secondary opacity-80"
        >
          A página que você procura não existe ou foi movida. Não se preocupe,
          use os botões abaixo para voltar ao início ou entrar em contato.
        </Text>

        {/* Ações conforme o Design */}
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-12 md:mt-24">
          <Button
            variant="primary"
            onClick={() => navigate("/")}
            className="justify-center py-4.5 px-auto md:w-88 whitespace-nowrap"
          >
            VOLTAR PARA A PÁGINA PRINCIPAL{" "}
            <Icon
              svg={ArrowUpRight}
              className="fill-neutral-white"
              animate="rotate"
            />
          </Button>

          <Button
            variant="tertiary"
            onClick={() => navigate("/contato")}
            className="justify-center py-4.5 px-auto md:w-88 whitespace-nowrap border border-border-default"
          >
            ENTRE EM CONTATO
            <Icon svg={ArrowUpRight} animate="rotate" />
          </Button>
        </div>
      </Section>
    </main>
  );
}
