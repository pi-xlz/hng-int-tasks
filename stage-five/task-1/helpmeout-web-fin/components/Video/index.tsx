import styles from './index.module.scss';
import {} from './';
import Image, { StaticImageData } from 'next/image';
import { LinkIcon, MoreIcon } from '@/public/icons';

interface Props {
  image: StaticImageData;
  title?: string;
  dateRecorded?: string;
  duration: string;
  isVidInfo?: boolean;
  className?: string;
}

const Video = ({
  image,
  title,
  dateRecorded,
  duration,
  isVidInfo,
  className,
}: Props) => {
  return (
    <div className={`${styles.video} ${className}`}>
      <div className={styles.thumbImage}>
        <Image
          src={image}
          alt="Video"
          width={525}
          height={208}
          className={styles.img}
        />
        <span>{duration}</span>
      </div>

      {isVidInfo && (
        <div className={styles.vidInfo}>
          <div className={styles.description}>
            <h3>{title}</h3>
            <p>{dateRecorded}</p>
          </div>
          <div className={styles.actions}>
            <LinkIcon /> <MoreIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
