import styles from "../../../styles/Home.module.css";
import Image from "next/image";

export default function Footer(props: any) {
  return (
    <footer className={styles.footer}>
      <a>
        {props.powered}
        <span className={styles.logo}>
          <Image src="/icxc.png" alt="ICXC Logo" width={25} height={25} />
        </span>
      </a>
    </footer>
  );
}
