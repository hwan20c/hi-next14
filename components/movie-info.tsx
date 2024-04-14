import { Suspense } from "react";
import { API_URL } from "../app/constants";
import potato from "../styles/movie-info.module.css";
import Providers from "./movie-providers";
import MovieSimilars from "./movie-similars";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={potato.container}>
      <img
        src={movie.poster_path}
        className={potato.poster}
        alt={movie.title}
      />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Hompage &rarr;
        </a>
        <Suspense fallback={<h1>Loading providers</h1>}>
          <Providers id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading similar videos</h1>}>
          <MovieSimilars id={id} />
        </Suspense>
      </div>
    </div>
  );
}
