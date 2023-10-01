import { CopyIcon } from '@/public/icons';
import styles from './index.module.scss';

interface Prop {
  vidUrl?: string;
}

const CopyURL = ({ vidUrl }: Prop) => {
  return (
    <div className={styles.copyurl}>
      <span>{vidUrl}</span>
      <button>
        <CopyIcon /> Copy
      </button>
    </div>
  );
};

export default CopyURL;
