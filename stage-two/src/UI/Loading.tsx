import { LoaderImage } from '../assets/images';
// import LoaderImg from '../assets/images/fidget-spinner.svg';

const Loading = () => {
  return (
    <div className="h-full w-full flex justify-center">
      <img
        src={LoaderImage}
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;
