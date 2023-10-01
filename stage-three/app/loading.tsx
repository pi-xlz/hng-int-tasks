import Image from 'next/image';
import LoadingImg from '@/public/assets/icons/fidget-spinner.svg';

const loading = () => {
  return (
    <div className="h-[100svh] flex justify-center items-center">
      <Image
        src={LoadingImg}
        alt="Loading..."
      />
    </div>
  );
};

export default loading;
