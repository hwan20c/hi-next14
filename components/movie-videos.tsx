import { API_URL } from "../app/constants";
import styles from "../styles/movie-video.module.css";

async function getVideos(id: string) {
  // throw new Error("somting broke...");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  const limitedVideos = videos.slice(0, 8);
  return (
    <div className={styles.container}>
      {limitedVideos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
