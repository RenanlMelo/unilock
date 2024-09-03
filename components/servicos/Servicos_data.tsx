import React from "react";

export const servicos_data = () => {
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
          imagem1: "/image_intertravado1.jpg",
          imagem2: "/image_intertravado2.jpg",
          imagem3: "/image_intertravado2.jpg",
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
          nome1: "Piso Grama",
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
          imagem1: "/image_intertravado1.jpg",
          imagem2: "/image_intertravado1.jpg",
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
      imagens: [{ imagem1: "/image_intertravado1.jpg" }],
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
};
