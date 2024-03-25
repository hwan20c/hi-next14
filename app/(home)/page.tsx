"use client";

import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Home",
// };

export default function Tomato() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const reponse = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await reponse.json();
    setMovies(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}
