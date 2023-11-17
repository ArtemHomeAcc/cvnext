import { NextIntlClientProvider } from 'next-intl';
// import { Provider } from 'react-redux';
import { wrapper } from '../store';
// import { store } from '../store/index';
import Layout from '../components/layout/layout';
import '@/styles/globals.scss';

function App({ Component, pageProps }) {
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlClientProvider>
  );
}

export default wrapper.withRedux(App, { debug: true });
