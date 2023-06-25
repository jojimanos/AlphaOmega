import { useRouter } from "next/router";
import React from "react";
import Data from "./assets/main_data.json";
import styles from "../../styles/Home.module.css";

const PageNotFound: React.FC = () => {
  const { locale } = useRouter() || {};

  return (
    <>
      {Data.main_data
        .filter((p) => p.locale === locale)
        .map((text, index) => (
          <div key={index} className={styles.pageNotFound}>
            <h1>{text.pageNotFoundHeader}</h1>
            <p>{text.pageNotFoundText}</p>
          </div>
        ))}
    </>
  );
};

export default PageNotFound;
