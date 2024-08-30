import { Header } from "../components/cabecalho/Cabecalho";
import { Form } from "../components/formulario/Formulario";

export const metadata = {
  title: "",
  description:
    "Página de contato destinado aos clientes, para que possam entrar em contato com o ",
};

export default function page() {
  return (
    <>
      <Header />
      <Form />
    </>
  );
}
