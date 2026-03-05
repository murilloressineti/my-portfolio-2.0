import React, { useState } from "react";
import { Section } from "../components/layout";
import { Button, Icon, Input, Text } from "../components/ui";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg?react";
import LinkedinLogo from "../assets/icons/linkedin-logo.svg?react";
import GitHubLogo from "../assets/icons/github-logo.svg?react";
import Envelope from "../assets/icons/envelope-open.svg?react";
import Copy from "../assets/icons/copy.svg?react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("murillo@ressineti.com.br");
    alert("E-mail copiado!");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples: se estiver vazio, marca como erro
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      message: !formData.message,
    };

    setErrors(newErrors);

    // Se algum erro for verdadeiro, para a execução
    if (Object.values(newErrors).some((error) => error)) return;

    setIsSubmitting(true);

    // Envio para o Formspree
    try {
      const response = await fetch("https://formspree.io/f/mzdjpkak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" }); // Limpa o form
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      alert("Erro de conexão.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Section className="py-20 md:py-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Coluna da Esquerda: Info */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col">
              <Text variant="h1" className="font-normal uppercase mb-3">
                Vamos <strong className="font-semibold">conversar?</strong>
              </Text>
              <Text
                variant="body-large"
                className="text-text-secondary opacity-80 max-w-140 mb-6"
              >
                Se o que viu por aqui faz sentido para você, me chame por um dos
                canais abaixo.
              </Text>
              <Text
                variant="body-large"
                className="text-text-secondary opacity-80 max-w-140"
              >
                Podemos construir algo relevante juntos.
              </Text>
            </div>

            <div className="flex flex-col gap-10">
              {/* Card de Email com função de copiar */}
              <div
                className="group flex items-center justify-between bg-bg-surface p-6 rounded-md border border-border-default hover:border-neutral-gray-400 transition-all cursor-pointer"
                onClick={handleCopyEmail}
              >
                <div className="flex items-center gap-6">
                  <div>
                    <Icon svg={Envelope} />
                  </div>
                  <div className="flex flex-col">
                    <Text
                      variant="headline-small"
                      className="text-neutral-gray-400 mb-1.5"
                    >
                      E-mail
                    </Text>
                    <Text variant="body-large">murillo@ressineti.com.br</Text>
                  </div>
                </div>
                <Icon
                  svg={Copy}
                  className="fill-neutral-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Redes Sociais */}
              <div className="flex flex-col gap-6">
                <Text variant="h4">Conecte-se comigo</Text>
                <div className="flex flex-col gap-4">
                  <Button
                    as="a"
                    href="https://www.linkedin.com/in/murilloressineti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Acessar meu LinkedIn"
                    variant="composite"
                    className="w-full justify-between bg-bg-surface p-6 h-auto rounded-md border border-border-default hover:bg-neutral-black hover:text-neutral-white hover:fill-neutral-white normal-case transition-all duration-300"
                  >
                    <Text
                      variant="body-large"
                      className="flex items-center gap-6"
                    >
                      <Icon svg={LinkedinLogo} /> LinkedIn
                    </Text>
                    <Icon
                      svg={ArrowUpRight}
                      className="fill-neutral-gray-400 group-hover:fill-neutral-white"
                    />
                  </Button>

                  <Button
                    as="a"
                    href="https://github.com/murilloressineti"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Acessar meu GitHub"
                    variant="composite"
                    className="w-full justify-between bg-bg-surface p-6 h-auto rounded-md border border-border-default hover:bg-neutral-black hover:text-neutral-white hover:fill-neutral-white normal-case transition-all duration-300"
                  >
                    <Text
                      variant="body-large"
                      className="flex items-center gap-6"
                    >
                      <Icon svg={GitHubLogo} /> Github
                    </Text>
                    <Icon
                      svg={ArrowUpRight}
                      className="fill-neutral-gray-400 group-hover:fill-neutral-white"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Formulário */}
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <Input
              id="name"
              name="name" // Importante para o Formspree
              label="Nome"
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: (e.target as HTMLInputElement).value,
                })
              }
              variant={errors.name ? "error" : "default"}
            />

            <Input
              id="email"
              name="email"
              label="E-mail"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: (e.target as HTMLInputElement).value,
                })
              }
              variant={errors.email ? "error" : "default"}
            />

            <Input
              as="textarea"
              id="message"
              name="message"
              label="Mensagem"
              rows={6}
              placeholder="Sua mensagem sobre o próximo desafio..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: (e.target as HTMLTextAreaElement).value,
                })
              }
              variant={errors.message ? "error" : "default"}
            />

            <Button
              type="submit"
              variant="primary"
              className="justify-center w-full p-4.5 mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              {!isSubmitting && (
                <Icon
                  svg={ArrowUpRight}
                  animate="rotate"
                  className="fill-neutral-white"
                />
              )}
            </Button>
          </form>
        </div>
      </Section>
    </main>
  );
}
