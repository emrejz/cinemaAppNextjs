import { Header } from "../styledComponents/Header";
import Link from "next/link";
import styles from "./index.module.css";
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Link href="/movies/static">
        <div className={styles.box}>
          <Header left md>
            Static Route
          </Header>
          <p className={styles.desc}>
            Next.js will pre-render this page at build time.
          </p>
        </div>
      </Link>
      <Link href="/movies/dynamic">
        <div className={styles.box}>
          <Header left md>
            Dynamic Route
          </Header>
          <p className={styles.desc}>
            Next.js will pre-render this page on each request using the data
            returned.
          </p>
        </div>
      </Link>
      <Link href="/movies/isr">
        <div className={styles.box}>
          <Header left md>
            Isr Route
          </Header>
          <p className={styles.desc}>
            Incremental Static Regeneration allows you to update existing pages
            by re-rendering them in the background as traffic comes in.
          </p>
        </div>
      </Link>
    </div>
  );
};
export default Home;
