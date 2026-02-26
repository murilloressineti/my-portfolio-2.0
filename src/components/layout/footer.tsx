import { Text } from "../ui";
import LogoGray from "../../assets/logo/logo-symbol-gray.svg";

export default function Footer() {
  return (
    <footer className="bg-black py-8 px-6 md:px-12 lg:px-20 xl:px-30">
      <div className="max-w-360 mx-auto flex justify-between md:items-center items-start gap-4">
        <Text variant="body-base" className="text-neutral-gray-400">
          © 2025 Murillo Ressineti. Todos os direitos reservados.
        </Text>

        <div className="shrink-0">
          <img
            src={LogoGray}
            alt="Logo Murillo Ressineti"
            className=""
          />
        </div>
      </div>
    </footer>
  );
}