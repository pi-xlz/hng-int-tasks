import { images } from '@/constants';
import styles from './page.module.scss';
import { SearchBar, Video } from '@/components';

const content = [
  {
    title: 'How to play Fortnite',
    recordedOn: 'SEPTEMBER 23 2023',
    thumb: images.Toji,
    duration: '00:40',
  },
  {
    title: 'How to play Fortnite',
    recordedOn: 'SEPTEMBER 23 2023',
    thumb: images.Toji,
    duration: '00:34',
  },
  {
    title: 'How to play Fortnite',
    recordedOn: 'SEPTEMBER 23 2023',
    thumb: images.Toji,
    duration: '00:60',
  },
  {
    title: 'How to play Fortnite',
    recordedOn: 'SEPTEMBER 23 2023',
    thumb: images.Toji,
    duration: '00:20',
  },
];

const Homepage = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.heading}>
          <h1>Hello, John Mark</h1>
          <p>Here are your recorded videos</p>
        </div>
        <SearchBar />
      </header>
      <main className={styles.main}>
        <h2>Recent files</h2>
        <section className={styles.videos}>
          {content.map((item, idx) => (
            <Video
              key={idx}
              title={item.title}
              image={item.thumb}
              dateRecorded={item.recordedOn}
              duration={item.duration}
              isVidInfo={true}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Homepage;
