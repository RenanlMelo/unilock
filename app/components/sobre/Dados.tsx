import React from "react";
import styles from "./sobre.module.scss";

export const Dados = () => {
  return (
    <div className={styles.sobre_dados_bg}>
      <div className={styles.sobre_dados}>
        <div>
          <span className={styles.sobre_dado_span}>
            <h5>20+</h5>
          </span>
          <p>Anos no mercado</p>
          <div />
        </div>
        <div>
          <span className={styles.sobre_dado_span}>
            <h5>4000+</h5>
          </span>
          <p> Obras concluidas</p>
          <div />
        </div>
        <div>
          <span className={styles.sobre_dado_span}>
            <h5>500.000+</h5>
          </span>
          <p> M2 de pisos instalados</p>
          <div />
        </div>
      </div>
    </div>
  );
};
