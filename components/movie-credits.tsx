import Link from "next/link";
import { API_URL } from "../app/constants";
import styles from "../styles/movie-credits.module.css";

async function getFullCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

async function getLimitedCredits(id: string, limit: number = 10) {
  const fullCredits = await getFullCredits(id);
  return fullCredits.slice(0, limit);
}

export default async function MovieCredits({
  id,
  showAll = false,
}: {
  id: string;
  showAll?: boolean;
}) {
  const credits = showAll
    ? await getFullCredits(id)
    : await getLimitedCredits(id);

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
        {!showAll && (
          <div className={styles.placeholder}>
            <Link
              className={styles.seeMoreButton}
              prefetch
              href={`/movies/${id}/credits`}
            >
              See More &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
