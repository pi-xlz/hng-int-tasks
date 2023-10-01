import { HeartIcon } from '../assets/icons';
// import { HeaderPoster } from '../assets/images';
import ImdbIcon from '../assets/icons/imdb.svg';
import RotTomatoIcon from '../assets/icons/rot-tomatoes.svg';

interface Props {
  imgUrl: string;
  movieTitle: string;
  release_date: string;
}

const Card = ({ imgUrl, movieTitle, release_date }: Props) => {
  const relDate = release_date;
  const releaseDate = new Date(relDate);
  // console.log(releaseDate);
  const utcDate = releaseDate.toUTCString();
  // const utcDate = new Date(
  //   releaseDate.getUTCFullYear(),
  //   releaseDate.getUTCMonth(),
  //   releaseDate.getUTCDate()
  // );
  // console.log(utcDate);

  return (
    <div data-testid="movie-card">
      {/* Movie Poster */}
      <div className="relative">
        <span className="absolute bg-clr-text-300 p-1 rounded-full right-2 top-2 hover:scale-110 hover:cursor-pointer hover:bg-clr-accent-100 transition">
          <HeartIcon />
        </span>
        <img
          src={`http://image.tmdb.org/t/p/w500/${imgUrl}`}
          alt="Movie Poster"
          data-testid="movie-poster"
        />
      </div>
      <p
        className="text-[.625rem] font-medium text-clr-text-300 mt-[4px]"
        data-testid="movie-release-date"
      >
        {utcDate}
      </p>
      {/* Movie title */}
      <h3
        className="font-semibold"
        data-testid="movie-title"
      >
        {movieTitle}
      </h3>
      <div className="text-clr-text-100">
        <div className="flex gap-6 mt-1">
          <div className="flex gap-2">
            <div>
              <img
                src={ImdbIcon}
                alt="IMDB"
              />
            </div>
            <span className=" text-[.75rem]">86.0/100</span>
          </div>
          <div className="flex gap-2">
            <div>
              {/* <RotTomatoes /> These weren't working for some reason */}
              <img
                src={RotTomatoIcon}
                alt="Rotten Tomatoes"
              />
            </div>
            <span className=" text-[.75rem]">97%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
