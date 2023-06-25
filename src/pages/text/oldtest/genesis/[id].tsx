import GenesisTemplate from "./genesisTemplate";
import Data from "../../../assets/text/oldtest/genesis/genesis_data.json";
import { useRouter } from "next/router";

function Genesis(): JSX.Element {
  const { locale, locales, asPath } = useRouter() || {};

  return (
    <div className="font-serif">
      {Data.genesis_data
        .filter((p) => p.locale === locale)
        .map((genesissets, i) => {
          return <GenesisTemplate key={i} genesissets={genesissets} />;
        })}
    </div>
  );
}
export default Genesis;
