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
          imagem3: "/intertravado/65.png",
        },
      ],
      nomes: [
        {
          nome1: "Piso 10x20",
          nome2: "Piso 16 faces",
          nome3: "Piso 20x20",
        },
      ],
      cores: [
        {
          cor1: "#7d8393",
          cor2: "#c7ba98",
          cor3: "#b07f85",
          cor4: "#42454b",
          cor5: "#d7d7df",
        },
      ],
    },
    {
      modelo: "Pisos Grama",
      imagens: [{ imagem1: "/image_piso_grama.jpg" }],
      nomes: [
        {
          nome1: "Piso Grama",
        },
      ],
      cores: [
        {
          cor2: "#d7d7df",
        },
      ],
    },
    {
      modelo: "Guias e Sarjetas",
      imagens: [
        {
          imagem1: "/guia/13.jpg",
          imagem2: "/guia/14.jpg",
        },
      ],
      nomes: [{ nome1: "Padrão Prefeitura", nome2: "Guia Jardim" }],
      cores: [
        {
          cor1: "#d7d7df",
        },
      ],
    },
    {
      modelo: "Pisos Drenante",
      imagens: [{ imagem1: "/drenante/1.jpg" }],
      nomes: [{ nome1: "Piso Drenante" }],
      cores: [
        {
          cor1: "#42454b",
          cor2: "#d7d7df",
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
                <h4>Cores Disponíveis</h4>
                <span key={item.modelo + index}>
                  {item.cores.map((colour, colourIndex) =>
                    Object.values(colour).map((colourStr, clrIndex) =>
                      colourStr ? (
                        <div
                          key={`${item.modelo.length * colourStr.length}`}
                          className={`${styles.servicos_availableColour}`}
                          style={{ backgroundColor: colourStr }}
                        />
                      ) : null
                    )
                  )}
                </span>
              </div>
              <div className={styles.servicos_modelo_images}>
                {item.imagens.map((image, imgIndex) =>
                  Object.values(image).map((imgSrc, subImgIndex) =>
                    imgSrc ? (
                      <div key={imgSrc + subImgIndex}>
                        <Image
                          key={`${imgIndex}-${subImgIndex}`}
                          src={imgSrc}
                          alt={`${item.modelo} image ${subImgIndex + 1}`}
                          width={500}
                          height={500}
                        />
                        {Object.values(
                          item.nomes.map((name, nIndex) =>
                            Object.values(name).map((nSrc, nSrcIndex) =>
                              nSrc && nSrcIndex === subImgIndex ? (
                                <p key={nSrc}>{nSrc}</p>
                              ) : null
                            )
                          )
                        )}
                      </div>
                    ) : null
                  )
                )}
              </div>
              <div className={styles.servicos_division_2} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
