import { PlayIcon } from '../assets/icons';
import { HeaderPoster } from '../assets/images';
import ImdbIcon from '../assets/icons/imdb.svg';
import RotTomatoIcon from '../assets/icons/rot-tomatoes.svg';

const Header = () => {
  return (
    <header className="grid grid-cols-2">
      {/* Movie Backdrop */}
      <div className="col-span-full row-span-full">
        <img
          src={HeaderPoster}
          alt="Movie Poster"
        />
      </div>
      {/* Movie Description */}
      <div className="col-start-1 col-end-2 row-span-full self-center px-16">
        <h1 className="text-clr-white text-[3rem] font-bold leading-[1.1]">
          John Wick 3: Parabellum
        </h1>
        <div className="flex gap-6 mt-1">
          <div className="flex gap-2">
            <div>
              <img
                src={ImdbIcon}
                alt="IMDB"
              />
            </div>
            <span className="text-clr-white text-[.75rem]">86.0/100</span>
          </div>
          <div className="flex gap-2">
            <div>
              {/* <RotTomatoes /> These weren't working for some reason */}
              <img
                src={RotTomatoIcon}
                alt="Rotten Tomatoes"
              />
            </div>
            <span className="text-clr-white text-[.75rem]">97%</span>
          </div>
        </div>
        <p className="text-clr-white text-[.75rem] mt-1 pr-[3.5rem]">
          John Wick is on the run after killing a member of the international
          assassins' guild and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        {/* CTA button */}
        <a
          href="#"
          className="text-clr-white text-xs font-medium flex items-center gap-2 bg-clr-primary-100 rounded-md py-2 px-3 mt-2 w-fit hover:bg-clr-accent-300 hover:scale-105 transition"
        >
          <div>
            <PlayIcon />
          </div>
          WATCH TRAILER
        </a>
      </div>
    </header>
  );
};

export default Header;
