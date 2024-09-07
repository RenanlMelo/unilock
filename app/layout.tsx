import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.scss";
import { Midia } from "../components/midia/Midia";
import { ToTop } from "../components/pTopo/ToTop";
import { Footer } from "../components/footer/Footer";

const mainFontFamily = Roboto({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "| Unilock Pisos Intertravados | Sorocaba e Região de São Paulo |",
  description:
    "Empresa especializada na instalação de pisos intertravados, piso grama, piso drenante, guias e sarjetas para projetos residenciais e comerciais.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <meta
        name="google-site-verification"
        content="YtcmfZc-rl1ACXnLb-0bSN4xha0GfQXL4Rt7P6QVXiA"
      />
      <body className={mainFontFamily.className}>
        {children}
        <ToTop />
        <Midia />
        <Footer />
      </body>
    </html>
  );
}
