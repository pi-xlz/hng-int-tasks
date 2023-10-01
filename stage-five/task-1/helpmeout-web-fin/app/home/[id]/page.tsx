import { EditIcon } from '@/public/icons';
import styles from './page.module.scss';
import {
  CopyUrl,
  EmailInput,
  ShareSocials,
  Transcript,
  Video,
} from '@/components';
import { images } from '@/constants';
import CopyURL from '@/components/CopyUrl';

const video = {
  title: 'How to play Fortnite',
  recordedOn: 'SEPTEMBER 23 2023',
  thumb: images.Toji,
  duration: '00:20',
};

const VideoPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h2 className={styles.breadcrumbs}>
          Home / Recent Videos / <span>How to play fortnite</span>
        </h2>
        <div className={styles['header__video-name']}>
          <h1>How to play fortnite</h1>
          <div>
            <EditIcon />
          </div>
        </div>
      </section>
      {/* VIDEO */}
      <section className={styles.video}>
        <Video
          image={video.thumb}
          duration={video.duration}
          isVidInfo={false}
          className="vid-height"
        />
      </section>

      {/* SHARE */}
      <section className={styles.share}>
        <div className={styles.email}>
          <div>
            <EmailInput />
          </div>
          <div>
            <CopyUrl />
          </div>
        </div>
        <div className={styles.socials}>
          <ShareSocials />
        </div>

        <Transcript width='width' />
      </section>
    </main>
  );
};

export default VideoPage;
