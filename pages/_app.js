import { NextIntlClientProvider } from 'next-intl';
import { Provider } from 'react-redux';
import store from '../store/index';
import Layout from '../components/layout/layout';
import '@/styles/globals.scss';

function App({ Component, pageProps }) {
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </NextIntlClientProvider>
  );
}

export default App;
