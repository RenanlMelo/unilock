"use client";

import React, { useState } from "react";
import styles from "./obras.module.scss";
import Image from "next/image";

export const Obras = () => {
  const [active, setActive] = useState(-1);

  const handleChange = (index: number) => {
    const buttons = document.getElementsByClassName("button");

    if (buttons.length > 0) {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
      }

      if (buttons[index]) {
        buttons[index].classList.add("active");
      } else if (active == -1) {
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.add("active");
        }
      }
    }

    setActive(index);
  };

  const var_dictModelos = [
    {
      modelo: "Piso Intertravados",
      imagens: [
        "/intertravados/Piso1.jpg",
        "/intertravados/Piso2.jpg",
        "/intertravados/Piso3.jpg",
        "/intertravados/Piso4.jpg",
        "/intertravados/Piso5.jpg",
        "/intertravados/Piso6.jpg",
        "/intertravados/Piso7.jpg",
      ],
      nomes: ["10x20", "16 faces", "20x20"],
    },
    {
      modelo: "Piso Grama",
      imagens: ["/grama/Piso1.jpg"],
      nomes: ["Piso Grama"],
    },
    {
      modelo: "Guias e Sarjetas",
      imagens: ["/guia/Piso1.jpg"],
      nomes: ["Guias", "Sarjeta"],
    },
    {
      modelo: "Piso Drenante",
      imagens: ["/drenante/Piso1.jpg"],
      nomes: ["Piso Drenante"],
    },
  ];

  const var_listButtons = [
    { clsName: "Piso Intertravados" },
    { clsName: "Piso Grama" },
    { clsName: "Guias e Sarjetas" },
    { clsName: "Piso Drenante" },
  ];

  return (
    <section className={styles.obras_section}>
      <div className={styles.obras_div_title}>
        <h3>Obras</h3>
        <h4>Veja algumas de nossas obras</h4>
      </div>
      <div className={styles.obras_modelos}>
        {var_listButtons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleChange(index)}
            className={`${styles.obras_span} ${
              index === active
                ? "bg-black/90 text-white border-transparent"
                : "bg-transparent border-black/90"
            }`}
          >
            {btn.clsName}
          </button>
        ))}
      </div>
      <div className={styles.obras_content}>
        {var_dictModelos.map(
          (obra, index) =>
            active === index && (
              <div
                key={index}
                onClick={() => console.log("INDEX", index)}
                className={styles.obras_modelo_content}
              >
                {obra.imagens.map((imgSrc, subImgIndex) => (
                  <div key={subImgIndex}>
                    <Image
                      src={imgSrc}
                      alt={imgSrc}
                      width={500}
                      height={500}
                      className="w-full h-full bg-contain bg-center"
                    />
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    </section>
  );
};
