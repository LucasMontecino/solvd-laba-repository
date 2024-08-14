import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>Welcome To The Home Page</h1>

        <div className={styles.mainNav}>
          <Link href="/ssr" className={styles.mainLink}>
            SSR
          </Link>
          <Link href="/ssg" className={styles.mainLink}>
            SSG
          </Link>
        </div>
      </main>
    </>
  );
}
