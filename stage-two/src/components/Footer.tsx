import { FBIcon, InstaIcon, YTIcon, TwitterIcon } from '../assets/icons';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 items-center py-4">
      <div className="flex gap-6">
        <div>
          <FBIcon />
        </div>
        <div>
          <InstaIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
        <div>
          <YTIcon />
        </div>
      </div>
      <div>
        <ul className="flex gap-6 text-clr-text-100 font-semibold text-sm">
          <li>Conditions of Use</li>
          <li>Privacy & Policy</li>
          <li>Press Room</li>
        </ul>
      </div>
      <span className="text-clr-text-300">
        &copy; 2021 MovieBox by Adriana Eka Prayudha
      </span>
    </footer>
  );
};

export default Footer;
