import { Suspense } from "react";
import MovieInfo from "../../../../../components/movie-info";
import MovieCredits from "../../../../../components/movie-credits";

interface IParams {
  params: { id: string };
}

export default async function MovieCreditsPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading credits info</h1>}>
        <MovieCredits id={id} showAll={true} />
      </Suspense>
    </div>
  );
}
