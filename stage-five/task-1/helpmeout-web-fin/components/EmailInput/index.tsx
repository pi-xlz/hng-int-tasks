'use client';

import { useState } from 'react';
import styles from './index.module.scss';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className={styles.emailinput}
      onSubmit={(e) => formSubmitHandler(e)}
    >
      <input
        type="email"
        placeholder="enter email of receiver"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button>Send</button>
    </form>
  );
};

export default EmailInput;
