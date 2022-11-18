import React, { Component } from "react";
import Gosp_tem from "./components/pageTemplates/gospelListTemplate";
import Data from "./assets/gosp_data.json";
import { useRouter } from "next/router";

function Gosp(): JSX.Element {
  const { locale, locales, asPath } = useRouter() || {};

  return (
    <div>
      {Data.gosp_data
        .filter((p) => p.locale === locale)
        ?.map((gospsets, i) => {
          return <Gosp_tem key={i} gospsets={gospsets} />;
        })}
    </div>
  );
}

export default Gosp;
