import { Suspense } from "react";
import MovieInfo from "../../../../../components/movie-info";

interface IParams {
  params: { id: string };
}

export default async function MovieSimilarsPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} showAll={true} />
      </Suspense>
    </div>
  );
}
