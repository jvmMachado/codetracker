import Image from 'next/image';
import { SignInButton } from '../SignInButton';
import { useRouter } from 'next/router';

import logoImg from '../../../public/images/logo.svg';

import styles from './styles.module.scss';

export function Header() {
  const router = useRouter();

  console.log(router.pathname)
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        CodeTracker
        <nav>
          <a className={router.pathname==='/' ? styles.active : ''} >Home</a>
          <a className={router.pathname==='/tasks' ? styles.active : ''}>Atividades</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}