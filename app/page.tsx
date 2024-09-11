import { Header } from "../components/cabecalho/Cabecalho";
import { Inicio } from "../components/inicio/Inicio";

export default function Home() {
  return (
    <>
      <link rel="canonical" href="https://www.unilockpisos.com.br"></link>
      <main className="w-full flex flex-col justify-between items-center bg-[#fff] relative">
        <Inicio />
        <Header />
      </main>
    </>
  );
}
