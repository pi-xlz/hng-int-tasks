import { Logo, Navbar } from '@/components';
import styles from './page.module.scss';
import { FBIcon, GoogleIcon } from '@/public/icons';

const AuthPage = () => {
  return (
    <>
      <main className={styles.authpage}>
        <div className={styles.brand}>
          <Logo variation="var_one" />
        </div>
        <section className={styles['auth-section']}>
          <div className={styles['auth-section__text']}>
            <h1>Log in or Sign up</h1>
            <p>
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>
          <div className={styles['auth-section__quick']}>
            <div className={styles['quick-auth']}>
              <GoogleIcon />
              <p>Continue with Google</p>
            </div>
            <div className={styles['quick-auth']}>
              <FBIcon />
              <p>Continue with Facebook</p>
            </div>
            <span className={styles.divider}>
              <hr />
              or <hr />
            </span>
          </div>
          <form className={styles['auth-section__form']}>
            <div className={styles['auth-section__form-input']}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className={styles['auth-section__form-input']}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your email"
              />
            </div>
            <button>Sign Up</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default AuthPage;
