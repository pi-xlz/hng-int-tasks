import { Logo, Profile } from '@/components';
import styles from './page.module.scss';

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className={styles.nav}>
        <Logo variation="var_one" />
        <Profile />
      </nav>
      {children}
    </>
  );
};

export default HomepageLayout;
