"use client";

import React, { useState } from "react";
import styles from "./obras.module.scss";
import Image from "next/image";
import { getImagesFromFolder } from "@/utils/getImages";

export const Obras = () => {
  const [active, setActive] = useState(-1);

  const handleChange = (index: number) => {
    setActive(index);
  };

  const var_dictModelos = [
    {
      modelo: "Pisos Intertravados",
      imagens: [
        "/intertravados/1.jpeg",
        "/intertravados/2.jpg",
        "/intertravados/3.jpeg",
        "/intertravados/4.jpg",
        "/intertravados/5.jpeg",
        "/intertravados/6.jpg",
        "/intertravados/7.jpeg",
        "/intertravados/8.jpg",
        "/intertravados/9.jpeg",
        "/intertravados/10.jpg",
        "/intertravados/11.jpeg",
        "/intertravados/12.jpg",
        "/intertravados/13.jpeg",
        "/intertravados/14.jpeg",
        "/intertravados/15.jpeg",
        "/intertravados/16.jpg",
        "/intertravados/17.jpeg",
        "/intertravados/18.jpeg",
        "/intertravados/19.jpeg",
        "/intertravados/20.jpg",
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
