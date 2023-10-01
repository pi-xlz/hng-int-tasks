import { LogoVar1, LogoVar2 } from '@/public/icons';
import { LogoVarType } from '@/utils/types';
import styles from './index.module.scss';

export const LogoVariantOne = () => {
  return (
    <div className={styles.logo}>
      <div>
        <LogoVar1 />
      </div>
      <p className={styles['logo__name']}>HelpMeOut</p>
    </div>
  );
};

export const LogoVariantTwo = () => {
  return (
    <div className={styles.logo}>
      <div>
        <LogoVar2 />
      </div>
      <p className={styles['logo__name-scnd']}>HelpMeOut</p>
    </div>
  );
};

const variants = {
  var_one: LogoVariantOne,
  var_two: LogoVariantTwo,
};

interface Props {
  variation: LogoVarType;
}

const Logo = ({ variation }: Props) => {
  const CurrentView = variants[variation];
  return <CurrentView />;
};

export default Logo;
