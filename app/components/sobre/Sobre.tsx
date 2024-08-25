import Image from "next/image";
import { Dados } from "./Dados";
import styles from "./sobre.module.scss";

export const About = () => {
  return (
    <>
      <section className={styles.sobre_section}>
        <div className={styles.sobre_div_title}>
          <h3>Sobre Nós</h3>
          <h4>Conheça mais sobre a nossa história</h4>
        </div>
        <div className={styles.sobre_div_content}>
          <div className={styles.sobre_texto1}>
            <div>
              <p>
                A Unilock Pisos está a 23 anos no mercado de instalações de
                pisos intertravados, 10 anos no Sul da Florida (EUA) e agora 13
                anos no Brasil se tornando a maior e mais importante deste
                setor, agora localizada em Sorocaba e atendendo toda região,
                pretendemos manter a mesma qualidade nas instalações de pisos
                intertravados.
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
            <h4>
              Se você está pensando em construir ou reformar, não deixe de nos
              consultar.
            </h4>
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
