import { Header } from "../components/cabecalho/Cabecalho";
import { Servicos } from "../components/servicos/Servicos";
import { ToTop } from "../components/pTopo/ToTop";

export default function page() {
  return (
    <>
      <Header />
      <Servicos />
      <ToTop />
    </>
  );
}
