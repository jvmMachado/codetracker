import { AppProps } from 'next/app';
import { useState } from 'react';
import { Header } from '../components/Header';
import { AuthContextProvider } from '../contexts/AuthContext';
import useAuth from '../hooks/useAuth';
import { Provider as NextAuthProvider } from 'next-auth/client';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const ProviderLoader = ({ children }: any) => (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );

  return (
    <AuthContextProvider>
      <NextAuthProvider session={pageProps.session}>
        <ProviderLoader />
      </NextAuthProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
