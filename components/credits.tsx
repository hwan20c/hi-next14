import { API_URL } from "../app/constants";
import styles from "../styles/credits.module.css";

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function Credits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
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
  );
}
