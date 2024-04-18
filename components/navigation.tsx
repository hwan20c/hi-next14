"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // 이전 페이지로 이동
  };

  const path = usePathname();
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
          </li>
          <li>
            <Link href="/about-us">About Us</Link>{" "}
            {path === "/about-us" ? "🔥" : ""}
          </li>
        </ul>
      </nav>

      <button className={styles.backButton} onClick={handleBackClick}>
        ⬅️ Back
      </button>
    </div>
  );
}
