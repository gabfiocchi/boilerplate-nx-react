import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from '@store/store/store.config';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to website!</title>
      </Head>
      <main className="app">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </main>
    </>
  );
}

export default CustomApp;
