import { Header } from "../../components/cabecalho/Cabecalho";
import { Servicos } from "../../components/servicos/Servicos";
import { ToTop } from "../../components/pTopo/ToTop";

export const metadata = {
  title: "Unilock Pisos | Serviços | Página com modelos, cores e serviços",
  description: "Página com os serviços, modelos e cores dos pisos disponíveis",
};

export default function page() {
  return (
    <>
      <Header />
      <Servicos />
      <ToTop />
    </>
  );
}
