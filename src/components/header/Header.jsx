import { Link } from 'react-router-dom';

import { BiChevronLeft } from 'react-icons/bi';
import { RiSettings4Fill } from 'react-icons/ri';
import { IoMdMic } from 'react-icons/io';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <BiChevronLeft className={styles.navigation} />
      </Link>
      <div className={styles.controls}>
        <IoMdMic className={styles.mic} />
        <RiSettings4Fill className={styles.setting} />
      </div>
    </header>
  );
}

export default Header;
