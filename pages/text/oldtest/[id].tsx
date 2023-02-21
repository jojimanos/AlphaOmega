import BooksListTemplate from "./booksListTemplate";
import Data from "../../assets/text/oldtest/books_data.json";
import { useRouter } from "next/router";

function Books(): JSX.Element {
  const { locale, locales, asPath } = useRouter() || {};

  return (
    <div>
      {Data.books_data
        .filter((p) => p.locale === locale)
        .map((bookssets, i) => {
          return <BooksListTemplate key={i} bookssets={bookssets} />;
        })}
    </div>
  );
}

export default Books;
