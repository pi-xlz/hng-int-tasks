import { CloseIcon, SuccessKite } from '@/public/icons';
import styles from './index.module.scss';
import { SaveButton } from '..';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setShowModal }: Props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div
          onClick={() => setShowModal((prev) => !prev)}
          className={styles['close-icon']}
        >
          <CloseIcon />
        </div>
        <div className={styles['modal__success']}>
          <div className={styles['modal__icon']}>
            <SuccessKite />
          </div>
          <p className={styles['modal__success-text']}>
            Your video link has been sent to <span>johnmark@gmail.com</span>
          </p>
        </div>
        <div className={styles['modal__save-request']}>
          <p className={styles.request}>
            Would you need to view this video later? Save to your account now!
          </p>
          <SaveButton />
          <p className={styles['create-account']}>
            Don't have an accout? <a href="#">Create account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
