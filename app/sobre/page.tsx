import { Header } from "../components/cabecalho/Cabecalho";
import { About } from "../components/sobre/Sobre";

export const metadata = {
  title: "Unilock Pisos | Sobre | Página explicativa sobre empresa",
  description: "Página com conteúdo informativo sobre a história da empresa",
};

export default function page() {
  return (
    <>
      <Header />
      <About />
    </>
  );
}
