'use client';

import { useState } from 'react';
import { EditIcon } from '@/public/icons';
import styles from './page.module.scss';
import {
  CopyUrl,
  EmailInput,
  Modal,
  Navbar,
  SaveButton,
  ShareSocials,
  Transcript,
} from '@/components';
import { Footer } from '@/containers';

const FilePage = () => {
  const [videoName, setVideoName] = useState('Untitled_Video_20232509');
  const [videourl, setVideourl] = useState(
    `https://www.helpmeout/${videoName}`
  );
  const [isSaving, setIsSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const nameSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVideoName(videoName);
  };

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} />}
      <Navbar />
      <main className={styles.filepage}>
        <section className={styles['video-details']}>
          {/* VID DEETS */}
          <div className={styles['video-details__metadata']}>
            <h1>Your Video is ready!</h1>
            {/* NAME */}
            <div className={styles['video-details__name']}>
              <form onSubmit={(e) => nameSubmitHandler(e)}>
                <label htmlFor="vid-name">Name</label>
                <fieldset>
                  <input
                    type="text"
                    value={videoName}
                    id="vid-name"
                    onChange={(e) => setVideoName(e.target.value)}
                  />
                  <button>
                    <EditIcon />
                  </button>
                </fieldset>
              </form>
            </div>
            {/* EMAIL INPUT */}
            <EmailInput />
            {/* COPY URL */}
            <div className={styles['video-details__url']}>
              <h2>Video Url</h2>
              <CopyUrl vidUrl={videourl} />
            </div>

            {/* SOCIALS*/}
            <ShareSocials />
          </div>
          {/* VIDEO */}
          <div className={styles['video-player']}>
            {/* VIDEO PLAYER */}
            <div className={styles['video-el']}>
              <video
                controls
                src="/videos/video (2160p).mp4"
              ></video>
            </div>
            {/* TRANSCRIPT */}
            <Transcript />
          </div>
        </section>
        {/* SAVE VIDEO */}
        <section className={styles['save-video']}>
          <h2>
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </h2>
          <SaveButton isSaving={isSaving} />
          <p className={styles['save-video__create-acct']}>
            Don't have an account? <a href="#">Create account</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FilePage;
