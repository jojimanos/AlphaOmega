import { useRouter } from "next/router";
import React from "react";
import Data from "./assets/main_data.json";

const PageNotFound: React.FC = () => {
  const { locale } = useRouter() || {};

  return (
    <div>
      {Data.main_data
        .filter((p) => p.locale === locale)
        .map((text, index) => (
          <h1 key={index}>{text.pageNotFoundText}</h1>
        ))}
    </div>
  );
};

export default PageNotFound;
