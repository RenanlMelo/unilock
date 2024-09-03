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
        "/intertravado/1.jpeg",
        "/intertravado/2.jpg",
        "/intertravado/3.jpeg",
        "/intertravado/4.jpg",
        "/intertravado/5.jpeg",
        "/intertravado/6.jpg",
        "/intertravado/7.jpeg",
        "/intertravado/8.jpg",
        "/intertravado/9.jpeg",
        "/intertravado/10.jpg",
        "/intertravado/11.jpeg",
        "/intertravado/12.jpg",
        "/intertravado/15.jpeg",
        "/intertravado/16.jpg",
        "/intertravado/17.jpeg",
        "/intertravado/18.jpeg",
        "/intertravado/19.jpeg",
        "/intertravado/20.jpg",
        "/intertravado/21.jpeg",
        "/intertravado/22.jpeg",
        "/intertravado/23.jpg",
        "/intertravado/24.jpg",
        "/intertravado/25.jpg",
        "/intertravado/26.jpg",
        "/intertravado/27.jpg",
        "/intertravado/28.jpg",
        "/intertravado/29.jpg",
        "/intertravado/30.jpg",
        "/intertravado/31.jpg",
        "/intertravado/32.jpg",
        "/intertravado/33.jpg",
        "/intertravado/34.jpeg",
        "/intertravado/35.jpg",
        "/intertravado/36.jpeg",
        "/intertravado/37.jpg",
        "/intertravado/38.jpeg",
        "/intertravado/39.jpg",
        "/intertravado/40.jpeg",
        "/intertravado/41.jpg",
        "/intertravado/42.jpeg",
        "/intertravado/43.jpg",
        "/intertravado/44.jpeg",
        "/intertravado/45.jpg",
        "/intertravado/46.jpeg",
        "/intertravado/47.jpg",
        "/intertravado/48.jpeg",
        "/intertravado/49.jpg",
        "/intertravado/50.jpg",
        "/intertravado/51.jpg",
        "/intertravado/52.jpg",
        "/intertravado/53.jpg",
        "/intertravado/54.jpg",
        "/intertravado/55.jpg",
        "/intertravado/56.jpg",
        "/intertravado/57.jpg",
        "/intertravado/58.jpg",
        "/intertravado/59.jpg",
        "/intertravado/60.jpg",
        "/intertravado/61.jpeg",
        "/intertravado/62.jpg",
        "/intertravado/63.png",
        "/intertravado/64.jpg",
        "/intertravado/65.png",
      ],
    },
    {
      modelo: "Pisos Grama",
      imagens: [
        "/grama/1.jpg",
        "/grama/2.jpeg",
        "/grama/3.jpg",
        "/grama/4.jpg",
      ],
    },
    {
      modelo: "Guias e Sarjetas",
      imagens: [
        "/guia/1.jpeg",
        "/guia/2.jpeg",
        "/guia/3.jpeg",
        "/guia/4.jpeg",
        "/guia/5.jpeg",
        "/guia/6.jpeg",
        "/guia/7.jpeg",
        "/guia/8.jpeg",
        "/guia/9.jpeg",
        "/guia/10.jpeg",
        "/guia/11.jpg",
        "/guia/12.jpeg",
        "/guia/13.jpg",
        "/guia/14.jpg",
      ],
    },
    {
      modelo: "Pisos Drenante",
      imagens: ["/drenante/1.jpg"],
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
