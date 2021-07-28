import { AppProps } from 'next/app';
import { useState } from 'react';
import { Header } from '../components/Header';
import { Provider as NextAuthProvider } from 'next-auth/client';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  }

  return (
    <NextAuthProvider session={pageProps.session} >
      <Header openModal={toggleModal}/>
      <Component {...pageProps} modalOpen={modalOpen} toggleModal={toggleModal} editModalOpen={editModalOpen} toggleEditModal={toggleEditModal}/>
    </NextAuthProvider>
  )
}

export default MyApp
