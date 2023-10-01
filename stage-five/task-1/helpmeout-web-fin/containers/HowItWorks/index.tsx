import { HowItWorksIllstr } from '@/public/icons';
import styles from './index.module.scss';

const steps = [
  {
    step: '1',
    title: 'Record Screen',
    details:
      'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
  },
  {
    step: '2',
    title: 'Share Your Recording',
    details:
      'We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.',
  },
  {
    step: '3',
    title: 'Learn Effortlessly',
    details:
      'Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.',
  },
];

const HowItWorks = () => {
  return (
    <section
      id="howitworks"
      className={styles.howitworks}
    >
      {/* <div className={styles['howitworks__header']}> */}
      <h2 className={styles['howitworks__heading']}>How it works</h2>
      {/* </div> */}
      {/* Features */}
      <div className={styles['howitworks-steps']}>
        {steps.map((step) => (
          <div
            key={step.title}
            className={styles['howitworks__step']}
          >
            <span>{step.step}</span>
            <h3>{step.title}</h3>
            <p>{step.details}</p>
            <div>
              <HowItWorksIllstr />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
