import styles from './Header.module.css';

import LogoImg from '../assets/logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={LogoImg}
        alt="foguete azul subindo com texto to em azul e do em lilás"
      />
    </header>
  );
};
