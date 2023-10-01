import styles from './index.module.scss';

interface Props {
  name: string;
  desc: string;
  icon: JSX.Element;
}

const Feature = ({ name, desc, icon }: Props) => {
  return (
    <div className={styles.feat}>
      <div className={styles['feat__icon']}>{icon}</div>
      <div className={styles['feat__description']}>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
