import React, { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion"; // Importando motion
import { Section } from "../components/layout";
import { Button, Icon, Input, Text } from "../components/ui";
import {
  ArrowUpRight,
  Copy,
  EnvelopeOpen,
  GitHubLogo,
  LinkedinLogo,
} from "@/assets/icons";
import { fadeUp } from "@/lib/motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); // Estado para dados do formulário
  const [errors, setErrors] = useState({ name: "", email: "", message: "" }); // Estado para erros de validação
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controle de envio, evita usuário clicar várias vezes no botão de enviar

  // Função para atualizar dados e limpar erro ao digitar
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, // Tipo para inputs e textarea
  ) => {
    const { name, value } = e.target; // Desestruturação para nome e valor do campo
    setFormData((prev) => ({ ...prev, [name]: value })); // Atualiza o estado do formulário mantendo os outros campos inalterados

    // Verifica se há um erro para o campo atual e limpa se houver
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" })); // Limpa o erro para o campo atual se houver um erro existente
    }
  };

  // Função para copiar E-mail
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("murillo@ressineti.com.br"); // Copia o e-mail para a área de transferência
    toast.success("E-mail copiado para a área de transferência!"); // Exibe uma notificação de sucesso usando o Sonner
  };

  // Função para validações
  const validate = () => {
    const newErrors = { name: "", email: "", message: "" }; // Objeto para armazenar mensagens de erro
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular simples para validar e-mail

    if (!formData.name.trim()) newErrors.name = "Por favor, me diga seu nome."; // Verifica se o campo de nome está vazio
    if (!emailRegex.test(formData.email))
      // Verifica se o e-mail é válido usando a expressão regular
      newErrors.email = "Insira um e-mail válido.";
    if (formData.message.length < 10)
      // Verifica se a mensagem tem pelo menos 10 caracteres
      newErrors.message = "A mensagem precisa de pelo menos 10 caracteres.";

    setErrors(newErrors); // Atualiza o estado de erros com as mensagens geradas
    return !Object.values(newErrors).some((error) => error !== ""); // Retorna true se não houver erros, ou seja, se todas as mensagens de erro forem vazias
  };

  // Função para enviar o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    // Tipo para evento de formulário
    e.preventDefault();
    if (!validate()) {
      // Chama a função de validação e, se retornar false, exibe uma notificação de erro e interrompe o envio
      toast.error("Por favor, corrija os erros no formulário.");
      return;
    }

    setIsSubmitting(true); // Define o estado de envio como verdadeiro para desabilitar o botão e evitar múltiplos envios

    try {
      // Tenta enviar os dados do formulário para o endpoint do Formspree usando fetch
      const response = await fetch("https://formspree.io/f/mzdjpkak", {
        // Substitua pelo seu endpoint do Formspree
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
      setIsSubmitting(false); // Define o estado de envio como falso para reabilitar o botão, independentemente do resultado do envio
    }
  };

  return (
    <main>
      <Section id="contact" className="py-20 md:py-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-30 items-start md:max-w-276 mx-auto">
          {/* Coluna da Esquerda: Info */}
          <motion.div {...fadeUp} className="flex flex-col gap-12">
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

          {/* Coluna da Direita: Formulário */}
          <motion.form
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
            onSubmit={handleSubmit} // Adiciona o manipulador de envio ao formulário
            noValidate // Evita validação nativa do HTML para usar nossa função de validação personalizada
          >
            <Input
              name="name"
              label="Nome"
              placeholder="Seu nome"
              value={formData.name} // Controla o valor do input com o estado
              onChange={handleInputChange} // Atualiza o estado ao digitar
              error={errors.name} // Passa a mensagem de erro para o componente Input, se houver
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
              {!isSubmitting && ( // Exibe o ícone apenas quando não estiver enviando
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
    </main>
  );
}
