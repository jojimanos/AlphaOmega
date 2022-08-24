import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";

function Main_tem(props) {
  const { mainsets } = props;

  const {
    main_title,
    description,
    OldTest,
    NewTest,
    Old_description,
    New_description,
  } = mainsets;

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>{main_title}</h1>

        <p className={styles.description}>{description}</p>

        <div className={styles.grid}>
          <Link href={"/"}>
            <a className={styles.card}>
              <h2>{OldTest} &rarr;</h2>
              <p>{Old_description}</p>
            </a>
          </Link>

          <Link href={"/gosp"}>
            <a className={styles.card}>
              <h2>{NewTest} &rarr;</h2>
              <p>{New_description}</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Main_tem;
