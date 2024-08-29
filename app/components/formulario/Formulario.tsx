"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styles from "./formulario.module.scss";

export const Form = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Formulário enviado com sucesso!");
      } else {
        console.error("Erro ao enviar o formulário.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  };

  return (
    <>
      <AnimatePresence>
        <motion.section id="form" className={styles.contato_section}>
          <Image
            className={styles.contato_bg_image}
            src="/image_form_bg.png"
            alt="imagem de fundo"
            width={1920}
            height={1080}
          />
          <span className={styles.contato_filter} />
          <div className={styles.contato_content}>
            <div className={styles.contato_informations}>
              <div>
                <h3>Unilock Pisos Intertravados</h3>
                <p>Sorocaba e Região</p>

                <p>
                  Telefone: <strong>(15) 99856-8080</strong>
                </p>
              </div>
              <h4>
                Entre em contato conosco pelas redes sociais ou pelo formulário
                ao lado.
              </h4>
              <div className={styles.contato_midia}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  fill="#ccc"
                  width="42"
                  height="42"
                  viewBox="0 0 32 32"
                >
                  <path
                    fillRule="evenodd"
                    d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  fill="#ccc"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                >
                  <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                </svg>
              </div>
              <Image
                className={styles.contato_logo}
                src="/image_dark_logo-50.png"
                alt="Logo"
                width={1000}
                height={1000}
              />
            </div>
            <form
              id="insideForm"
              method="POST"
              data-form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/ajax/contato@unilockpisos.com.br"
              className={styles.contato_form}
            >
              <input type="text" required name="nome" placeholder="Nome" />
              <input type="email" required name="email" placeholder="E-mail" />
              <input
                type="text"
                required
                name="assunto"
                placeholder="Assunto"
                className={styles.contato_assunto_input}
              />
              <textarea required name="mensagem" placeholder="Mensagem" />
              <button
                id="buttonSubmit"
                type="submit"
                value="Enviar"
                data-button
                className={styles.contato_submit}
              >
                Enviar
              </button>
            </form>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
};
