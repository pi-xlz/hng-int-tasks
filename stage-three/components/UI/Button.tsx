import { CheckIcon, LoginIcon } from '@/public/assets/icons';
import { BtnState, ButtonType } from '@/utils/types';
import { useMediaQuery } from 'usehooks-ts';

interface Props {
  type: ButtonType;
  btnState?: BtnState;
}

const Button = ({ type, btnState }: Props) => {
  const matches = useMediaQuery('(max-width: 768px)');
  return (
    <button
      className={`flex font-bold place-items-center p-3 bg-clr-background-200 rounded-[5px] active:scale-90 ${
        btnState === 'ATTENTION' ? 'shake-horizontal' : ''
      }`}
    >
      {matches ? (
        type === 'LOGGEDIN' ? (
          <span>
            <CheckIcon />
          </span>
        ) : (
          <span>
            <LoginIcon />
          </span>
        )
      ) : type === 'LOGGEDIN' ? (
        <>
          <span>LOGGED IN</span>
          <span>
            <CheckIcon />
          </span>
        </>
      ) : (
        'LOGIN'
      )}
    </button>
  );
};

export default Button;
