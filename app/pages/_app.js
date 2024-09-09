import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Empresa especializada na instalação de pisos intertravados, piso grama, piso drenante, guias e sarjetas para projetos residenciais e comerciais." />
        <title> Unilock Pisos Intertravados | Sorocaba e Região de São Paulo | </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
