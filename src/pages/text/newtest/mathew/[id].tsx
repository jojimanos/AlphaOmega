import MathewTemplate from "./chapterListTemplate";
import Data from "../../../assets/text/newtest/mathew/mathew_data.json";
import { useRouter } from "next/router";

function Mathew(): JSX.Element {
  const { locale, locales, asPath } = useRouter() || {};

  return (
    <div className="font-serif">
      {Data.mathew_data
        .filter((p) => p.locale === locale)
        .map((mathewsets, i) => {
          return <MathewTemplate key={i} mathewsets={mathewsets} />;
        })}
    </div>
  );
}
export default Mathew;
