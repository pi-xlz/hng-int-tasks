import { ArrowRight } from '@/public/icons';
import styles from './index.module.scss';
import Image from 'next/image';
import { images } from '@/constants';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__text']}>
        <div className={styles['header__text-wrapper']}>
          <h1 className={styles['header__heading']}>
            Show Them <br /> Don't Just Tell
          </h1>
          <p className={styles['header__desc']}>
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
        </div>
        <div className={styles.cta}>
          Install HelpMeOut
          <div>
            <ArrowRight />
          </div>
        </div>
      </div>
      {/* HERO IMAGE */}
      <div className={styles['hero-image-grid']}>
        <div>
          <Image
            src={images.Woman1}
            alt="Woman"
            className={styles['hero-image']}
          />
        </div>
        <div>
          <Image
            src={images.Woman2}
            alt="Woman"
            className={styles['hero-image']}
          />
        </div>
        <div>
          <Image
            src={images.FatherSon}
            alt="Woman"
            className={styles['hero-image']}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
