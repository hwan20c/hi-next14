import { API_URL } from "../app/constants";
import styles from "../styles/movie-credits.module.css";

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      <div className={styles.title_area}>
        <h2 className={styles.title}>Credits</h2>
      </div>
      <div className={styles.img_area}>
        {credits.map((credit) => (
          <div key={credit.id}>
            {credit.profile_path ? (
              <img src={`${credit.profile_path}`} alt={credit.name} />
            ) : (
              <div className={styles.placeholder} />
            )}
            <p>{credit.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
