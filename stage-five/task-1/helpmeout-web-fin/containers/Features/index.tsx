import Image from 'next/image';
import { images } from '@/constants';
import styles from './index.module.scss';
import { EasyShareFeat, RecordFeat, RevisitRecordFeat } from '@/public/icons';
import { Feat } from '@/components';

const features = [
  {
    name: 'Simple Screen Recording',
    desc: 'Efforless screen recording for everyone. Record with ease, no tech expertise required.',
    icon: <RecordFeat />,
  },
  {
    name: 'Easy-to-Share URL',
    desc: 'Share your recordings instantly with a single link. No attachments, no downloads.',
    icon: <EasyShareFeat />,
  },
  {
    name: 'Revisit Recordings',
    desc: 'Access and review your past content effortlessly. Your recordings, always at your fingertips.',
    icon: <RevisitRecordFeat />,
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className={styles.features}
    >
      <div className={styles['features__header']}>
        <h2 className={styles['features__heading']}>Features</h2>
        <p className={styles['features__desc']}>
          Key Highlights of Our Extension
        </p>
      </div>
      {/* Features */}
      <div className={styles['features__list-containter']}>
        <div className={styles['features__list']}>
          {features.map((feat) => (
            <Feat
              name={feat.name}
              desc={feat.desc}
              icon={feat.icon}
              key={feat.name}
            />
          ))}
        </div>
        {/* Image */}
        <div className={styles['features__image']}>
          <Image
            src={images.VidRepo}
            alt="Video Repository"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
