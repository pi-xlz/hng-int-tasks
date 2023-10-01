import { Logo } from '..';
import styles from './index.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <>
        <Logo variation="var_one" />
      </>
      <nav className={styles['navbar__links']}>
        <a href="#">Features</a>
        <a href="#">How It Works</a>
      </nav>
      <Link
        className={styles['navbar__cta']}
        href="/auth"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Navbar;
