import { useDisclosure } from "@chakra-ui/react";
import myJson from "../pages/assets/bible_names.json";
import Data from "../pages/assets/main_data.json";
import ModalComponent from "./modal";
import { useEffect, useState } from "react";
import { useClickableWord } from "../../methods/useClickableWord";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { highlightStatus, wordSearch } from "../atom/wordSearch";

export default function ClickableWords(props: any): JSX.Element[] {
  const incoming = JSON.stringify(myJson);

  const parsed = JSON.parse(incoming);

  const bibleNames = Object.values(parsed);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentWord, setCurrentWord] = useState<string>("");

  const [onPerseus, setOnPerseus] = useState<boolean>(false);
  const [onBibleNames, setOnBibleNames] = useState<boolean>(true);

  const { searchForTheWord, checkWordResources } = useClickableWord;

  const { locale } = useRouter() || {};

  const arr = Array.from(props);
  const string: string = arr.join("");
  const string2: string = string.slice(25); //Removes the starting tags from text
  const string3: string = string2.slice(0, -4);
  const words: string[] = string3.split(/ /g); //Splits words


  const searchValue = useRecoilValue(wordSearch) 

  const highlightText = useRecoilValue(highlightStatus)

  const words2 = words.map((w, index) => {

    // useEffect(() => {
    // setHighlightText((prev) => [...prev, words[index] === searchValue ? true : false])
    
    // console.log("Highlight status", highlightText)
    // }, [wordSearch])

    return (
      <span key={index}>
        <button
          name="word"
          key={index}
          className={searchValue === w ? "text-white bg-red-500" : "hover:text-blue-700 hover:underline select-text"}
          onClick={() => {
            searchForTheWord(w, bibleNames);
          }}
          onContextMenu={(event) => {
            event.preventDefault();
            setCurrentWord(w);
            checkWordResources(bibleNames, w, setOnPerseus, setOnBibleNames);
            onOpen();
          }}
        >
          {" "}
          {w}
          {Data.main_data
            .filter((p) => p.locale === locale)
            .map((data, i) => (
              <ModalComponent
                key={i}
                isOpen={isOpen}
                onClose={onClose}
                word={currentWord}
                onPerseus={onPerseus}
                onBibleNames={onBibleNames}
                text={data.wordsearch}
              />
            ))}{" "}
        </button>{" "}
      </span>
    );
  });
  return words2;
}
