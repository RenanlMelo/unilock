"use client";

import Image from "next/image";
import styles from "./servicos.module.scss";
import { Link as LinkScroll } from "react-scroll";

export const Servicos = () => {
  const var_dictTipos = [
    { modelo: "Pisos Intertravados" },
    { modelo: "Pisos Grama" },
    { modelo: "Guias e Sarjetas" },
    { modelo: "Pisos Drenante" },
  ];

  const var_dictModelos = [
    {
      modelo: "Pisos Intertravados",
      imagens: [
        {
          imagem1: "/intertravado/22.jpeg",
          imagem2: "/intertravado/57.jpg",
          imagem3: "/intertravado/64.jpg",
        },
      ],
      nomes: [
        {
          nome1: "10x20",
          nome2: "16 faces",
          nome3: "20x20",
        },
      ],
      cores: [
        {
          cor1: "bg-red-600",
          cor2: "bg-green-600",
          cor3: "bg-blue-600",
        },
      ],
    },
    {
      modelo: "Pisos Grama",
      imagens: [{ imagem1: "/image_piso_grama.jpg" }],
      nomes: [
        {
          nome1: "Pisos Grama",
        },
      ],
      cores: [
        {
          cor1: "bg-red-600",
          cor2: "bg-green-600",
          cor3: "bg-blue-600",
        },
      ],
    },
    {
      modelo: "Guias e Sarjetas",
      imagens: [
        {
          imagem1: "/guia/1.jpeg",
          imagem2: "/guia/3.jpeg",
        },
      ],
      nomes: [{ nome1: "Guias", nome2: "Sarjeta" }],
      cores: [
        {
          cor1: "bg-red-600",
          cor2: "bg-green-600",
          cor3: "bg-blue-600",
        },
      ],
    },
    {
      modelo: "Pisos Drenante",
      imagens: [{ imagem1: "/drenante/1.jpg" }],
      nomes: [{ nome1: "Piso Drenante" }],
      cores: [
        {
          cor1: "bg-red-600",
          cor2: "bg-green-600",
          cor3: "bg-blue-600",
        },
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicos_section}>
        <div className={styles.servicos_title_div}>
          <h1>Serviços Oferecidos</h1>
          <h2>Conheça mais sobre nossos modelos</h2>
        </div>
        <div className={styles.servicos_introduction}>
          <Image
            className={styles.servicos_logo}
            src="/image_dark_logo.png"
            alt="Logo"
            width={1200}
            height={1200}
            priority={true}
          />
          <div className={styles.servicos_div}>
            {var_dictTipos.map((tipo, index) => (
              <div key={index} className={styles.servicos_div_tipo}>
                <LinkScroll
                  smooth
                  spy
                  duration={1000}
                  to={tipo.modelo}
                  offset={-120}
                  className={styles.servicos_span}
                >
                  <p>{tipo.modelo}</p>
                </LinkScroll>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.servicos_content}>
          {var_dictModelos.map((item, index) => (
            <div
              key={index}
              id={item.modelo} // Adiciona o ID para o scroll
              className={styles.servicos_modelo}
              style={{ gridRowStart: `${index + 1}` }}
            >
              <div className={styles.servicos_modelo_item}>
                <h3>{item.modelo}</h3>
                <span key={item.modelo + index}>
                  Cores Disponíveis
                  {item.cores.map((colour, colourIndex) =>
                    Object.values(colour).map((colourStr, clrIndex) =>
                      colourStr ? (
                        <div
                          key={`${item.modelo.length * colourStr.length}`}
                          className={`${styles.servicos_availableColour} ${colourStr}`}
                        />
                      ) : null
                    )
                  )}
                </span>
              </div>
              <div className={styles.servicos_modelo_images}>
                <div>
                  {item.imagens.map((image, imgIndex) =>
                    Object.values(image).map((imgSrc, subImgIndex) =>
                      imgSrc ? (
                        <Image
                          key={`${imgIndex}-${subImgIndex}`}
                          src={imgSrc}
                          alt={`${item.modelo} image ${subImgIndex + 1}`}
                          width={500}
                          height={500}
                        />
                      ) : null
                    )
                  )}
                </div>
                <div>
                  {item.nomes.map((nome, nomeIndex) =>
                    Object.values(nome).map((nomeSrc) =>
                      nomeSrc ? <p key={nomeIndex}>{nomeSrc}</p> : null
                    )
                  )}
                </div>
              </div>
              <div className={styles.servicos_division_2} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
