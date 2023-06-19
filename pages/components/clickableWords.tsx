import { useDisclosure } from "@chakra-ui/react";
import myJson from "../assets/bible_names.json";
import ModalComponent from "./modal";
import { useState } from "react";
import { useClickableWord } from "../../methods/useClickableWord";

export default function ClickableWords(props: any): JSX.Element[] {
  const incoming = JSON.stringify(myJson);

  const parsed = JSON.parse(incoming);

  const bibleNames = Object.values(parsed);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentWord, setCurrentWord] = useState<string>("");

  const [onPerseus, setOnPerseus] = useState<boolean>(false);
  const [onBibleNames, setOnBibleNames] = useState<boolean>(true);

  const { dictionary, wikipedia, searchForTheWord } = useClickableWord;

  const arr = Array.from(props);
  const string: string = arr.join("");
  const string2: string = string.slice(25); //Removes the starting tags from text
  const string3: string = string2.slice(0, -4);
  const words: string[] = string3.split(/ /g); //Splits words
  const words2 = words.map((w, index) => {
    return (
      <a key={index}>
        <button
          key={index}
          className="hover:text-blue-700 hover:underline"
          onClick={() => {
            searchForTheWord(w, bibleNames, index);
          }}
          onContextMenu={(event) => {
            event.preventDefault();
            setCurrentWord(w);
            onOpen();
          }}
        >
          {" "}
          {w}
          <ModalComponent
            isOpen={isOpen}
            onClose={onClose}
            searchOnPerseus={dictionary}
            searchOnBibleNames={wikipedia}
            word={currentWord}
          />{" "}
        </button>{" "}
      </a>
    );
  });
  return words2;
}
