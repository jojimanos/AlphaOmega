import styles from "../../../styles/Home.module.css";
import Link from "next/link";

export default function LanguageSwitch(props) {
  return (
    <div className="grid grid-rows-2">
      {props.locales?.map((l, i) => {
        return (
          <button key={i} className={l === props.locale ? styles.selected : ""}>
            <Link className="" href={props.asPath} locale={l}>
              {l}
            </Link>
          </button>
        );
      })}
    </div>
  );
}
