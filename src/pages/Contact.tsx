import React, { useState } from "react";
import { Section } from "../components/layout";
import { Button, Icon, Input, Text } from "../components/ui";
import {
  ArrowUpRight,
  Copy,
  EnvelopeOpen,
  GitHubLogo,
  LinkedinLogo,
} from "@/assets/icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função para atualizar dados e limpar erro ao digitar
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Função para copiar E-mail
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("murillo@ressineti.com.br");
    // Trocar por um Toast no futuro para ser mais elegante que o alert
    alert("E-mail copiado!");
  };

  // Função para validações
  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Por favor, me diga seu nome.";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Insira um e-mail válido.";
    if (formData.message.length < 10)
      newErrors.message = "A mensagem precisa de pelo menos 10 caracteres.";

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mzdjpkak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Ops! Algo deu errado no servidor.");
      }
    } catch {
      alert("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Section className="py-20 md:py-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:max-w-276 mx-auto">
          {/* Coluna da Esquerda: Info */}
          <div className="flex flex-col gap-12">
            <header className="flex flex-col">
              <Text as="h2" className="text-4xl uppercase font-normal mb-3">
                Vamos <strong className="font-semibold">conversar?</strong>
              </Text>
              <Text
                variant="body-lg"
                className="text-text-secondary max-w-136 mb-6"
              >
                Se o que viu por aqui faz sentido para você, me chame por um dos
                canais abaixo.
              </Text>
              <Text variant="body-lg" className="text-text-secondary">
                Podemos construir algo relevante juntos.
              </Text>
            </header>

            <div className="flex flex-col gap-12">
              {/* Card de Email com função de copiar */}
              <Button
                variant="wrapper"
                className="normal-case group flex items-center justify-between bg-bg-surface p-6 rounded-md border border-border-default hover:border-neutral-400 transition-all cursor-pointer text-left"
                onClick={handleCopyEmail}
              >
                <div className="flex items-center gap-6">
                  <div>
                    <Icon svg={EnvelopeOpen} />
                  </div>
                  <div className="flex flex-col">
                    <Text
                      variant="ui-headline"
                      className="text-neutral-400 mb-1.5"
                    >
                      E-mail
                    </Text>
                    <Text variant="body-lg">murillo@ressineti.com.br</Text>
                  </div>
                </div>
                <Icon
                  svg={Copy}
                  className="fill-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Button>

              {/* Redes Sociais */}
              <nav className="flex flex-col gap-6" aria-label="Redes sociais">
                <Text variant="h4">Conecte-se comigo</Text>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      label: "LinkedIn",
                      href: "https://linkedin.com/in/murilloressineti/",
                      icon: LinkedinLogo,
                    },
                    {
                      label: "Github",
                      href: "https://github.com/murilloressineti",
                      icon: GitHubLogo,
                    },
                  ].map((social) => (
                    <Button
                      key={social.label}
                      as="a"
                      href={social.href}
                      target="_blank"
                      variant="contactCard"
                      className="w-full justify-between "
                    >
                      <Text
                        className="flex items-center gap-6"
                        variant="body-lg"
                      >
                        <Icon
                          svg={social.icon}
                          className="group-hover:text-white"
                        />
                        <span className="group-hover:text-neutral-white">
                          {social.label}
                        </span>
                      </Text>
                      <Icon
                        svg={ArrowUpRight}
                        className="fill-neutral-400 group-hover:fill-neutral-white"
                      />
                    </Button>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          {/* Coluna da Direita: Formulário */}
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <Input
              name="name"
              label="Nome"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
            />

            <Input
              name="email"
              label="E-mail"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />

            <Input
              as="textarea"
              name="message"
              label="Mensagem"
              rows={6}
              placeholder="Sua mensagem sobre o próximo desafio..."
              value={formData.message}
              onChange={handleInputChange}
              error={errors.message}
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
