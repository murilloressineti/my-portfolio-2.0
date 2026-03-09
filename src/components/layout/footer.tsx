import { Link } from "react-router-dom";
import { Text } from "../ui";
import { LogoSymbol } from "@/assets/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-black py-8 px-6 md:px-30">
      <div className="w-full max-w-420 mx-auto flex flex-row justify-between items-start md:items-center gap-4">
        <Text variant="body-base" className="text-neutral-400">
          © {currentYear} Murillo Ressineti. Todos os direitos reservados.
        </Text>

        <div className="shrink-0">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar para o topo"
          >
            <LogoSymbol className="fill-neutral-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
