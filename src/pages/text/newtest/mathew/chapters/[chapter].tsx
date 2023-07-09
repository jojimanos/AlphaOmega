import React, { useState } from "react";
import data from "../../../../../../data/greek_text.json";
import dataEnglish from "../../../../../../data/english_text.json";
import ChapterTemplate from "../../../../../components/chapterTemplate";
import styles from "../../../../../../styles/chapters.module.css";
import ChaptersButtons from "../../../../../components/navbarAndFooterComponents/chaptersButtons";
import { useRouter } from "next/router";

export default function Chapter1() {
  const newtest = JSON.parse(JSON.stringify(data));

  const newtestEnglish = JSON.parse(JSON.stringify(dataEnglish));

  const text = newtest;

  const chaptersArray = Object.keys(text["mathew"]);

  const router = useRouter();

  const { chapter } = router.query;

  const hrefTemplate = "/text/newtest/mathew/chapters/";

  console.log("This is the query param", chapter);

  console.log("Here is the chapters array", chaptersArray);

  if (chapter === undefined) return;
  if (Array.isArray(chapter)) return;

  return (
    <>
      {chapter ? <ChapterTemplate author={"mathew"} chapter={chapter} /> : null}
      <div className="grid justify-center">
        <div className={styles.chapterNavButton}>
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
