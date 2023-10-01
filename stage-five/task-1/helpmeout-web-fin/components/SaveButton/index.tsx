// 'use client'

import { images } from '@/constants';
import Image from 'next/image';
import styles from './index.module.scss';

interface Prop {
  isSaving?: boolean;
}

const SaveButton = ({ isSaving }: Prop) => {
  return (
    <button className={styles.savebutton}>
      {isSaving ? (
        <>
          <div className={styles.spinner}>
            <Image
              src={images.Spinner}
              alt="Saving"
              width={30}
              height={30}
            />
          </div>
        </>
      ) : (
        <span>Save Video</span>
      )}
    </button>
  );
};

export default SaveButton;
