import Link from "next/link";
import { API_URL } from "../app/constants";
import styles from "../styles/movie-similars.module.css";

async function getSimilarVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

async function getLimitedSimilarVideos(id: string, limit: number = 5) {
  const fullCredits = await getSimilarVideos(id);
  return fullCredits.slice(0, limit);
}

export default async function MovieSimilars({
  id,
  showAll = false,
}: {
  id: string;
  showAll?: boolean;
}) {
  const similarVideos = showAll
    ? await getSimilarVideos(id)
    : await getLimitedSimilarVideos(id);
  return (
    <div className={styles.container}>
      <div className={styles.title_area}>
        <h2 className={styles.title}>Similar Movies</h2>
      </div>
      <div className={styles.img_area}>
        {similarVideos.map((video) => (
          <div key={video.id}>
            {video.poster_path ? <img src={`${video.poster_path}`} /> : <div />}
          </div>
        ))}
        {!showAll && (
          <div className={styles.placeholder}>
            <Link
              className={styles.seeMoreButton}
              prefetch
              href={`/movies/${id}/similars`}
            >
              See More &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
