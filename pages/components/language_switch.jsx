import styles from "../../styles/Home.module.css";

export default function LanguageSwitch(){
<div className="font-serif">
  <div className={styles.container}>
    {locales?.map((l, i) => {
      return (
        <span key={i} className={l === locale ? styles.selected : ""}>
          <Link href={asPath} locale={l}>
            {l}
          </Link>
        </span>
      );
    })}
  </div>
</div>;
}