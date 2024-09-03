"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./cabecalho.module.scss";
import { useEffect, useReducer, useState } from "react";

export const Header = () => {
  const currentPath = usePathname();
  const router = useRouter();

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
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible"; // Garantir que o overflow seja restaurado
    };
  }, [isOpen]);

  const [loadingItem, setLoadingItem] = useState<string | null>(null);

  const handleLoading = (id: string, href: string) => {
    if (currentPath != "/" + href) setLoadingItem(id);
    else setIsOpen(false);
  };

  useEffect(() => {
    setLoadingItem(null);
  }, []);

  return (
    <header
      className={`${styles.header} ${
        currentPath === "/" ? "bg-transparent" : "bg-[#242424]"
      }`}
    >
      <a href="/" className={styles.logo_div}>
        <Image
          src="/image_main_logo.png"
          alt="logo"
          width={200}
          height={200}
          className={styles.logo}
        />
        <p className={styles.logo_title}>Unilock Pisos Intertravados</p>
      </a>
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
        <div className={styles.mobileDiv}>
          <div className={styles.mobileFilter}>
            <span />
            <nav className={styles.mobileNavbar}>
              <svg
                onClick={handleToggle}
                width="130"
                height="30"
                viewBox="0 0 130 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.13855 120.861L120.861 9.13846"
                  stroke="white"
                  strokeWidth="17"
                  strokeLinecap="round"
                />
                <path
                  d="M9.13855 9.13843L120.861 120.861"
                  stroke="white"
                  strokeWidth="17"
                  strokeLinecap="round"
                />
              </svg>
              {mobileNavbarItems.map((item) => (
                <div key={item.id} className={styles.mobileNavbarItem}>
                  <Link
                    href={item.href}
                    onClick={() => handleLoading(item.id, item.href)}
                    className={`${
                      currentPath === "/" + item.id
                        ? "text-[var(--primary-darken)] decoration-[var(--primary-darken)]"
                        : "decoration-white/70"
                    } ${styles.tese}`}
                  >
                    {item.name}
                  </Link>
                  {loadingItem === item.id && (
                    <span className={styles.loadingIcon} />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
      <nav className={styles.navbar}>
        {navbarItems.map((item) => (
          <Link key={item.id} href={item.href} className={styles.navItem}>
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
