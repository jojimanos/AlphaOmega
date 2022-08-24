import React, { Component } from "react";
import Chapmath_tem from ".//components/chap_tem";
import Data from "./assets/chap_data.json";
import { useRouter } from "next/router";

function ChapMath() {
  const { locale, locales, asPath } = useRouter();

  return (
    <div className="font-serif">
      {Data.chap_data
        .filter((p) => p.locale === locale)
        .map((chapsets, i) => {
          return <Chapmath_tem key={i} chapsets={chapsets} />;
        })}
    </div>
  );
}
export default ChapMath;
