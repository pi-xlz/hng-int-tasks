import { Features, Footer, Header, HowItWorks } from '@/containers';
import styles from './page.module.scss';
import { Navbar } from '@/components';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <Navbar />
      <Header />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
