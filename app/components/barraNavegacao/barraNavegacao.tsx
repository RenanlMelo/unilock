import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./barraNavegacao.module.scss";

export const barraNavegacao = () => {
  const mobileNavbarItems = [
    { name: "Início", id: "inicio", href: "/" },
    { name: "Serviços", id: "servicos", href: "servicos" },
    { name: "Obras", id: "obras", href: "obras" },
    { name: "Sobre", id: "sobre", href: "sobre" },
    { name: "Contato", id: "contato", href: "contato" },
  ];

  const [headerSize, setHeaderSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const headerElem = document.getElementsByTagName("header")[0];

      if (headerElem) {
        setHeaderSize(headerElem.clientHeight);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <nav style={{ top: headerSize }} className={styles.mobileNavbar}>
          {mobileNavbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={styles.mobileNavbarItem}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};
