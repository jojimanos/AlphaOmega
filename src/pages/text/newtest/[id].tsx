import React, { Component } from "react";
import GospelListTemplate from "./gospelListTemplate";
import Data from "../../assets/text/newtest/books_data.json";
import { useRouter } from "next/router";

function Books(): JSX.Element {
  const { locale, locales, asPath } = useRouter() || {};

  return (
    <div>
      {Data.books_data
        .filter((p) => p.locale === locale)
        .map((bookssets, i) => {
          return <GospelListTemplate key={i} bookssets={bookssets} />;
        })}
    </div>
  );
}

export default Books;
