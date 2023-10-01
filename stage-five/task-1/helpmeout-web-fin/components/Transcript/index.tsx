import { ArrowDownIcon } from '@/public/icons';
import styles from './index.module.scss';

const transcript = [
  {
    time: '0:01',
    text: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the',
  },
  {
    time: '0:11',
    text: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the',
  },
  {
    time: '0:20',
    text: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the',
  },
  {
    time: '0:25',
    text: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the',
  },
  {
    time: '0:30',
    text: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the',
  },
  {
    time: '0:31',
    text: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the',
  },
  {
    time: '0:31',
    text: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the',
  },
  {
    time: '0:31',
    text: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the',
  },
  {
    time: '0:31',
    text: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the',
  },
];

interface Props {
  width?: string;
}

const Transcript = ({ width }: Props) => {
  return (
    <div className={`${styles.transcript} ${width}`}>
      <h2>Transcript</h2>
      <div className={styles['transcript-lang']}>
        <span>English</span>
        <span>
          <ArrowDownIcon />
        </span>
      </div>

      <div className={styles['transcript-data']}>
        {transcript.map((item, idx) => (
          <div
            className={styles['transcript-data__transcript']}
            key={idx}
          >
            <span>{item.time}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transcript;
