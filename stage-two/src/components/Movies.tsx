import { Card, Loading } from '../UI';
import { ArrowIcon } from '../assets/icons';
import { useState, useEffect } from 'react';
import type { ResType } from '../utils/types';
import ErrorMsg from './ErrorMsg';

const APIKEY = 'fa35163a30ed10e90a559d3c0454ec79';
const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`;
// const headers = {
//   Authorization:
//     'Bearer eyJhdWQiOiJmYTM1MTYzYTMwZWQxMGU5MGE1NTlkM2MwNDU0ZWM3OSIsInN1YiI6IjY0ZmVmY2FhNmEyMjI3MDBlMGYxOGNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BFbtXYxam-xMMgZpO5RKOSu93VRpWEO4E9J3mALsaH4',
//   'Content-Type': 'application/json',
// };

const Movies = () => {
  const [movies, setMovies] = useState<ResType>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  // const [movieArray, setMovieArray] = useState<ResMovieType[]>([]);
  // const controller = new AbortController();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ResType = await response.json();
        setMovies(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();

    // return () => {
    //   controller.abort();
    // };
  }, []);

  const results = movies?.results.slice(0, 10);
  // console.log(results);

  return (
    <section className="p-16">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-clr-text-100 text-[2rem] font-semibold">
          Featured Movie
        </h2>
        <span className="flex items-center hover:cursor-pointer">
          <span className="text-clr-primary-100">See more</span>
          <span className="block ">
            <ArrowIcon />
          </span>
        </span>
      </div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorMsg />
      ) : (
        <div className="movies-grid">
          {results?.map((movie) => (
            <Card
              key={movie.id}
              imgUrl={movie.poster_path}
              movieTitle={movie.title}
              release_date={movie.release_date}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Movies;
