import { Header } from "../components/cabecalho/Cabecalho";
import { Obras } from "../components/obras/Obras";

export const metadata = {
  title: "Unilock Pisos | Obras | Página com obras feitas anteriormente",
  description:
    "Página com exemplos de obras feitas anteriormente, separados por modelos",
};

export default function page() {
  return (
    <>
      <Header />
      <Obras />
    </>
  );
}
