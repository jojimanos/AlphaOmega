import styles from "../../../styles/Home.module.css";
import Link from "next/link";

export default function LanguageSwitch(props) {
  return(
<div className="font-serif">
  <div className={styles.container}>
    <div className="grid grid-cols-4">
    {props.locales?.map((l, i) => {
      return (
        <button key={i} className={l === props.locale ? styles.selected : ""}>
          <Link href={props.asPath} locale={l}>
           {l}
          </Link>
        </button>
      );
    })}
    </div>
  </div>
</div>
)
}