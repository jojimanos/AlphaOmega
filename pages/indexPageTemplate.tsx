import styles from "../styles/Home.module.css";
import Link from "next/link";

function IndexPageTemplate(props: { mainsets: any }): JSX.Element {
  const { mainsets } = props || {};

  const {
    main_title,
    description,
    OldTest,
    NewTest,
    Old_description,
    New_description,
  } = mainsets || {};

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>{main_title as string}</h1>

        <p className={styles.description}>{description as string}</p>

        <div className={styles.grid}>
          <Link href={"/text/oldtest/books" || ""}>
            <div className={styles.card}>
              <h2>{OldTest as string} &rarr;</h2>
              <p>{Old_description as string}</p>
            </div>
          </Link>

          <Link href={"/text/newtest/books" || ""}>
            <div className={styles.card}>
              <h2>{NewTest as string} &rarr;</h2>
              <p>{New_description as string}</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default IndexPageTemplate;
