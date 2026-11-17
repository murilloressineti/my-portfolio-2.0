import type React from "react";
import { useState } from "react";

import { motion, MotionConfig } from "framer-motion";
import { toast } from "sonner";

import { fadeUp } from "@/lib/motion";

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("murillo@ressineti.com.br");
      toast.success("E-mail copiado para a área de transferência!");
    } catch {
      toast.error("Não foi possível copiar o e-mail. Tente novamente.");
    }
  };

  const validate = (data: typeof formData) => {
    const newErrors = { name: "", email: "", message: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name) newErrors.name = "Por favor, me diga seu nome.";
    if (!emailRegex.test(data.email))
      newErrors.email = "Insira um e-mail válido.";
    if (data.message.length < 10)
      newErrors.message = "A mensagem precisa de pelo menos 10 caracteres.";

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Valida e envia o mesmo snapshot, sem alterar o texto que o usuário ainda está digitando.
    const normalizedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };
    if (!validate(normalizedData)) {
      toast.error("Por favor, corrija os erros no formulário.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mzdjpkak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(normalizedData),
      });

      if (response.ok) {
        toast.success("Mensagem enviada! Retornarei em breve.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Ops! Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch {
      toast.error("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div data-reduced-motion>
        <Section id="contact" className="py-20 md:py-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-30 items-start md:max-w-276 mx-auto">
            <motion.div {...fadeUp} className="flex flex-col gap-12">
              <header className="flex flex-col">
                <Text
                  as="h1"
                  variant="h2"
                  className="text-4xl uppercase font-normal mb-3"
                >
                  Vamos <strong className="font-semibold">conversar?</strong>
                </Text>
                <Text
                  variant="body-lg"
                  className="text-text-secondary max-w-136 mb-6"
                >
                  Se você acredita que meu perfil pode contribuir com o seu
                  time, ficarei feliz em conversar.
                </Text>
                <Text variant="body-lg" className="text-text-secondary">
                  Entre em contato comigo por um dos canais abaixo.
                </Text>
              </header>
              <div className="flex flex-col gap-12">
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
                <nav className="flex flex-col gap-6" aria-label="Redes sociais">
                  <Text as="h2" variant="h4">
                    Conecte-se comigo
                  </Text>
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
                        className="w-full justify-between"
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
            </motion.div>
            <motion.form
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-8"
              onSubmit={handleSubmit}
              // As mensagens acessíveis de Input vêm da validação do formulário, em vez dos balões nativos.
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
            </motion.form>
          </div>
        </Section>
      </div>
    </MotionConfig>
  );
}
