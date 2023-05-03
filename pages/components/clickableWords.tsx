import { useDisclosure } from "@chakra-ui/react";
import myJson from "../assets/bible_names.json";
import ModalComponent from "./modal";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function ClickableWords(props: any): JSX.Element[] {
  const incoming = JSON.stringify(myJson);

  const parsed = JSON.parse(incoming);

  const bibleNames = Object.values(parsed);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function dictionary(w: string, index, words) {
    let link1 = "http://www.perseus.tufts.edu/hopper/morph?l=";
    let link2 = "&la=greek";
    let link = link1 + w + link2;
    open(link);
    console.log("WORD HERE", words[index], index);
  }

  function wikipedia(w: string) {
    let link1 = "https://biblicaltext.com/dictionary/";
    let link = link1 + w;
    open(link);
  }

  const [onPerseus, setOnPerseus] = useState<boolean>(false);
  const [onBibleNames, setOnBibleNames] = useState<boolean>(true);

  const arr = Array.from(props);
  const string: string = arr.join("");
  const string2: string = string.slice(25); //Removes the starting tags from text
  const string3: string = string2.slice(0, -4);
  const words: string[] = string3.split(/ /g); //Splits words
  const words2 = words.map((w, index) => (
    <a>
      <button
        key={index}
        className="hover:text-blue-700 hover:underline"
        onClick={() => {
          if (bibleNames.includes(w.replace(/[,.]/g, ""))) {
            wikipedia(w.replace(/[.,]/g, ""));
            //setOnPerseus(false);
            //setOnBibleNames(true);
          } else {
            dictionary(w.replace(/[.,]/g, ""), index, words);
            //setOnPerseus(true);
            //setOnBibleNames(false);
          }
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          onOpen();
          setCurrentIndex(index);
          console.log("MODAL IS OPEN ON", words[index]);
        }}
      >
        {" "}
        <ModalComponent
          isOpen={isOpen}
          onClose={onClose}
          perseusLink={dictionary}
          //bibleNamesLink={wikipedia(w.replace(/[.,]/g, ""))}
          index={currentIndex}
          word={words}
          // onPerseus={onPerseus}
          // onBibleNames={onBibleNames}
        />
        {w}{" "}
      </button>{" "}
    </a>
  ));
  return words2;
}
