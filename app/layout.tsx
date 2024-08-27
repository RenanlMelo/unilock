import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.scss";
import { Midia } from "./components/midia/Midia";
import { ToTop } from "./components/pTopo/ToTop";
import { Footer } from "./components/footer/Footer";

const mainFontFamily = Roboto({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unilock Pisos",
  description: "Pisos Intertravados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFontFamily.className}>
        {children}
        <ToTop />
        <Midia />
        <Footer />
      </body>
    </html>
  );
}
