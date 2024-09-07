import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.scss";
import { Midia } from "../components/midia/Midia";
import { ToTop } from "../components/pTopo/ToTop";
import { Footer } from "../components/footer/Footer";
import Head from "next/head";

const mainFontFamily = Roboto({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unilock Pisos Intertravados | Sorocaba e Região de São Paulo |",
  description:
    "Empresa especializada na instalação de pisos intertravados, piso grama, piso drenante, guias e sarjetas para projetos residenciais e comerciais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Unilock Pisos Intertravados</title>
        <meta
          name="description"
          content="Sorocaba e Região de São Paulo - Especializada em instalação de pisos intertravados."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <body className={mainFontFamily.className}>
        {children}
        <ToTop />
        <Midia />
        <Footer />
      </body>
    </html>
  );
}
