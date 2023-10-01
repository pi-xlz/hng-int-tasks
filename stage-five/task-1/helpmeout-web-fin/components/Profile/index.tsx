import { ArrowDownIcon, ProfileIcon } from '@/public/icons';
import styles from './index.module.scss';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileIcon}>
        <ProfileIcon />
      </div>
      <p>John Mark</p>
      <div className={styles.profileArrow}>
        <ArrowDownIcon />
      </div>
    </div>
  );
};

export default Profile;
