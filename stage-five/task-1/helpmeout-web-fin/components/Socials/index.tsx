import { FBIcon, TelegramIcon, WAIcon } from '@/public/icons';
import styles from './index.module.scss';

const ShareSocials = () => {
  return (
    <div className={styles.share}>
      <h2>Share your video</h2>
      <div className={styles['share__links']}>
        <div className={styles['share-link']}>
          <div>
            <FBIcon />
          </div>
          <span>Facebook</span>
        </div>
        <div className={styles['share-link']}>
          <div>
            <WAIcon />
          </div>
          <span>Whatsapp</span>
        </div>
        <div className={styles['share-link']}>
          <div>
            <TelegramIcon />
          </div>
          <span>Telegram</span>
        </div>
      </div>
    </div>
  );
};

export default ShareSocials;
