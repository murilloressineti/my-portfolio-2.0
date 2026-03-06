import { Link } from "react-router-dom";
import { Text } from "../ui";
import { LogoSymbol } from "@/assets/logo";

export default function Footer() {
  return (
    <footer className="bg-black py-8 px-6 md:px-12 lg:px-20 xl:px-30">
      <div className="max-w-360 mx-auto flex justify-between md:items-center items-start gap-4">
        <Text variant="body-base" className="text-neutral-gray-400">
          © 2026 Murillo Ressineti. Todos os direitos reservados.
        </Text>

        <div className="shrink-0">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <LogoSymbol className="fill-neutral-gray-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
