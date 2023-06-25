import data from "../../../../../../data/greek_text.json";
import dataEnglish from "../../../../../../data/english_text.json";
import { useRouter } from "next/router";
import ChapterTemplate from "../../../../../components/chapterTemplate";
import ChaptersButtons from "../../../../../components/navbarAndFooterComponents/chaptersButtons";

export default function Chapter1() {
  const newtest = JSON.parse(JSON.stringify(data));

  const newtestEnglish = JSON.parse(JSON.stringify(dataEnglish));

  const text = newtest;

  const chaptersArray = Object.keys(text["genesis"]);

  const router = useRouter();

  const { chapter } = router.query;

  console.log("This is the query param", chapter);

  console.log("Here is the chapters array", chaptersArray);

  const hrefTemplate = "/text/oldtest/genesis/chapters/";

  if (chapter === undefined) return;
  if (Array.isArray(chapter)) return;

  return (
    <>
      {chapter ? (
        <ChapterTemplate author={"genesis"} chapter={chapter} />
      ) : null}
      <div className="grid justify-center">
        <div className="grid-cols-1 justify-center">
          {chaptersArray.map((a: string, i: number) => (
            <ChaptersButtons i={i} a={a} hrefTemplate={hrefTemplate} />
          ))}
        </div>
        <hr
          style={{
            background: "black",
            color: "black",
            borderColor: "black",
            height: "1px",
          }}
        />
      </div>
    </>
  );
}
