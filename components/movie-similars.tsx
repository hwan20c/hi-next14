import { API_URL } from "../app/constants";
import styles from "../styles/movie-similars.module.css";

async function getSimilarVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function MovieSimilars({ id }: { id: string }) {
  const videos = await getSimilarVideos(id);
  const limitedSimilarVideos = videos.slice(0, 5);
  return (
    <div className={styles.container}>
      <div className={styles.title_area}>
        <h2 className={styles.title}>Similar Movies</h2>
      </div>
      <div className={styles.img_area}>
        {limitedSimilarVideos.map((video) => (
          <div key={video.id}>
            {video.poster_path ? <img src={`${video.poster_path}`} /> : <div />}
          </div>
        ))}
      </div>
    </div>
  );
}
