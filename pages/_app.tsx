import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Random Quotes Generator</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
