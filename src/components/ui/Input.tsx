import React, { useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import Text from "./Text";

export const inputVariants = cva(
  "w-full bg-bg-default border border-border-default rounded-lg p-4 text-base text-text-primary placeholder:text-neutral-400 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/10 focus:border-border-focus resize-none transition-all disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "",
        error:
          "border-feedback-error focus:border-feedback-error focus:ring-feedback-error/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface InputProps
  extends
    Omit<
      // Exclui o atributo "as" para evitar conflitos, já que estamos definindo nosso próprio "as"
      React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, // Certidão de nascimento para atributos de input padrão, mas sem "as"
      "as"
    >,
    VariantProps<typeof inputVariants> {
  // Permite usar as variantes definidas em inputVariants
  as?: "input" | "textarea"; // Restringe "as" para apenas "input" ou "textarea"
  label?: string;
  error?: string;
  rows?: number;
}

export default function Input({
  as: Component = "input",
  variant,
  className,
  label,
  error,
  id,
  ...props
}: InputProps) {
  const generatedId = useId(); // Gera um ID único para associar o label ao input
  const inputId = id || generatedId; // Usa o ID fornecido ou o gerado
  return (
    // Container para o label, input e mensagem de erro
    <div className="w-full flex flex-col gap-2.5">
      {label && ( // Renderiza o label apenas se ele for fornecido
        // Associa o label ao input usando htmlFor e o ID do input
        <label htmlFor={inputId}>
          <Text
            variant="body-base"
            className="text-text-primary font-semibold uppercase"
          >
            {label}
          </Text>
        </label>
      )}

      <Component // Renderiza o input ou textarea com base na prop "as"
        id={inputId} // Atribui o ID ao input para associação com o label
        className={cn(
          inputVariants({
            variant: error ? "error" : variant, // Aplica a variante de erro se houver uma mensagem de erro, caso contrário, usa a variante fornecida
            className,
          }),
        )}
        {...(props as React.ComponentPropsWithRef<any>)} // Garante que as props sejam passadas corretamente para o input ou textarea, mesmo com a tipagem genérica
      />

      {error && ( // Renderiza a mensagem de erro apenas se ela for fornecida
        <Text variant="body-sm" className="text-feedback-error">
          {error}
        </Text>
      )}
    </div>
  );
}
