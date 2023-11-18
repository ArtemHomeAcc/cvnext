import { NextIntlClientProvider } from 'next-intl';
import Head from 'next/head';

import { wrapper } from '../store';
import Layout from '../components/layout/layout';
import '@/styles/globals.scss';

function App({ Component, pageProps }) {
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <Head>
        <title>Full stack developer</title>
        <meta name="description" content="This website was made to improve gained skills and demonstrate achievements" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlClientProvider>
  );
}

export default wrapper.withRedux(App, { debug: true });
