"use client";

import React, { useState } from "react";
import styles from "./obras.module.scss";
import Image from "next/image";

export const Obras = () => {
  const [active, setActive] = useState(-1);

  const handleChange = (index: number) => {
    setActive(index);
  };

  const var_dictModelos = [
    {
      modelo: "Pisos Intertravados",
      imagens: [
        "/intertravados/Piso1.jpg",
        "/intertravados/Piso2.jpg",
        "/intertravados/Piso3.jpg",
        "/intertravados/Piso4.jpg",
        "/intertravados/Piso5.jpg",
        "/intertravados/Piso6.jpg",
        "/intertravados/Piso7.jpg",
      ],
    },
    {
      modelo: "Pisos Grama",
      imagens: ["/grama/Piso1.jpg"],
    },
    {
      modelo: "Guias e Sarjetas",
      imagens: ["/guia/Piso1.jpg"],
    },
    {
      modelo: "Pisos Drenante",
      imagens: ["/drenante/Piso1.jpg"],
    },
  ];

  const var_listButtons = [
    { clsName: "Pisos Intertravados" },
    { clsName: "Pisos Grama" },
    { clsName: "Guias e Sarjetas" },
    { clsName: "Pisos Drenante" },
  ];

  return (
    <section className={styles.obras_section}>
      <div className={styles.obras_div_title}>
        <h1>Obras</h1>
        <h2>Veja algumas de nossas obras</h2>
      </div>
      <div className={styles.obras_modelos}>
        {var_listButtons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleChange(index)}
            className={`${styles.obras_span} ${
              index === active ? `${styles.active}` : `${styles.inactive}`
            }`}
          >
            {btn.clsName}
          </button>
        ))}
      </div>
      <div className={styles.obras_content}>
        {active === -1 ? (
          <div className={styles.obras_all_images_container}>
            {var_dictModelos.flatMap((obra, index) =>
              obra.imagens.reverse().map((imgSrc, subImgIndex) => (
                <div
                  key={`${index}-${subImgIndex}`}
                  className={styles.obras_image_container}
                >
                  <Image
                    src={imgSrc}
                    alt={imgSrc}
                    width={500}
                    height={500}
                    className="w-full h-full bg-contain bg-center"
                  />
                </div>
              ))
            )}
          </div>
        ) : (
          var_dictModelos.map((obra, index) =>
            active === index ? (
              <div key={index} className={styles.obras_modelo_content}>
                {obra.imagens.map((imgSrc, subImgIndex) => (
                  <div
                    key={subImgIndex}
                    className={styles.obras_image_container}
                  >
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
            ) : null
          )
        )}
      </div>
    </section>
  );
};
