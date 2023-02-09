import Books_tem from "./components/pageTemplates/booksListTemplate";
import Data from "./assets/books_data.json";
import { useRouter } from "next/router";

function Books(): JSX.Element {
  const { locale, locales, asPath } = useRouter() || {};

  return (
    <div>
      {Data.books_data
        .filter((p) => p.locale === locale)
        .map((bookssets, i) => {
          return <Books_tem key={i} bookssets={bookssets} />;
        })}
    </div>
  );
}

export default Books;
