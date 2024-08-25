"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./cabecalho.module.scss";
import { useEffect, useState } from "react";

export const Header = () => {
  const currentPath = usePathname();

  const navbarItems = [
    { name: "Início", id: "inicio", href: "/" },
    { name: "Serviços", id: "servicos", href: "servicos" },
    { name: "Obras", id: "obras", href: "obras" },
    { name: "Sobre", id: "sobre", href: "sobre" },
  ];

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
    <header
      className={`${styles.header} ${
        currentPath === "/" ? "bg-transparent" : "bg-[#101010]"
      }`}
    >
      <Link href="/" className={styles.logo_div}>
        <Image
          src="/image_main_logo.png"
          alt="logo"
          width={200}
          height={200}
          className={styles.logo}
        />
        <h1 className={styles.logo_title}>Unilock Pisos</h1>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="#ffffff"
        className={styles.icon}
        onClick={handleToggle}
      >
        <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
      </svg>
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
      <nav className={styles.navbar}>
        {navbarItems.map((item, index) => (
          <Link key={index} href={item.href} className={styles.navItem}>
            {item.name}
          </Link>
        ))}
      </nav>
      <Link href="/contato" className={styles.contactButton}>
        Contato
      </Link>
    </header>
  );
};
