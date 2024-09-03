import Image from "next/image";
import { Dados } from "./Dados";
import styles from "./sobre.module.scss";

export const About = () => {
  return (
    <>
      <section className={styles.sobre_section}>
        <div className={styles.sobre_div_title}>
          <h1>Sobre Nós</h1>
          <h2>Conheça mais sobre a nossa história</h2>
        </div>
        <div className={styles.sobre_div_content}>
          <div className={styles.sobre_texto1}>
            <div>
              <p>
                A Unilock Pisos está há 23 anos no mercado de instalações de
                pisos intertravados, sendo 10 anos no Sul da Flórida (EUA) e
                agora 13 anos no Brasil, tornando-se a maior e mais importante
                empresa do setor. Atualmente localizada em Sorocaba e atendendo
                toda a região, pretendemos manter a mesma qualidade nas
                instalações de pisos intertravados.
              </p>
            </div>
            <Image
              src="/image_sobre.png"
              alt="Image"
              width={400}
              height={400}
              className={styles.sobre_image}
              priority={true}
            />
          </div>

          <Dados />

          <div className={styles.sobre_texto2}>
            <h3>
              Se você está pensando em construir ou reformar, não deixe de nos
              consultar.
            </h3>
            <ul>
              <li>
                Nossos profissionais são altamente qualificados para realizar
                projetos de todos os tamanhos.{" "}
              </li>
              <li>
                Possuímos vasta experiência na realização de projetos
                residenciais e comerciais, atendendo todos os mais altos padrões
                de qualidade exigidos pelo mercado.{" "}
              </li>
              <li>
                A Unilock possui equipamentos de ultima geração, garantido desta
                forma a qualidade e o prazo de execução de seu projeto,
                superando as expectativas de nossos clientes.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
