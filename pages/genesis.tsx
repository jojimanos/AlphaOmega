import Chapmath_tem from "./components/pageTemplates/chapterListTemplate";
import Data from "./assets/chap_data.json";
import { useRouter } from "next/router";

function ChapMath(): JSX.Element {
  const { locale, locales, asPath } = useRouter() || {};

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
