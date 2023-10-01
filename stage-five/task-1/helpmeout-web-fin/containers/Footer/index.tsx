import { Logo } from '@/components';
import styles from './index.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__container']}>
        {/* LOGO */}
        <div>
          <Logo variation="var_two" />
        </div>

        {/* wrapper */}
        <div className={styles['footer__sections']}>
          {/* menu */}
          <div className={styles['footer__section']}>
            <h4>Menu</h4>
            <nav>
              <Link href="/">Home</Link>
              <a href="#">Converter</a>
              <a href="#">How It Works</a>
            </nav>
          </div>
          <div className={styles['footer__section']}>
            <h4>About us</h4>
            <nav>
              <a href="#">About</a>
              <a href="#">Contact Us</a>
              <a href="#">Privacy Policy</a>
            </nav>
          </div>
          <div className={styles['footer__section']}>
            <h4>Screen Record</h4>
            <nav>
              <a href="#">Browser Window</a>
              <a href="#">Desktop</a>
              <a href="#">Application</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
