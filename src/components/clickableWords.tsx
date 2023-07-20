import { useDisclosure } from "@chakra-ui/react";
import myJson from "../pages/assets/bible_names.json";
import Data from "../pages/assets/main_data.json";
import ModalComponent from "./modal";
import { useEffect, useState } from "react";
import { useClickableWord } from "../../methods/useClickableWord";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { highlightStatus, wordSearch } from "../atom/wordSearch";
import { setMaxListeners } from "stream";

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

  const latinCharactersMatchSchema = (w: string) => {

    let lowerCase = w.replaceAll(/[,."]/g, "").toLowerCase()
    
    let latinCharacters: string
    
    lowerCase.includes("α") ? latinCharacters = lowerCase.replaceAll("α", "a") : latinCharacters = lowerCase
    lowerCase.includes("ἀ") ? latinCharacters = latinCharacters.replaceAll("ἀ", "a") : latinCharacters
    lowerCase.includes("ἁ") ? latinCharacters = latinCharacters.replaceAll("ἁ", "a") : latinCharacters
    lowerCase.includes("ά") ? latinCharacters = latinCharacters.replaceAll("ά", "a") : latinCharacters
    lowerCase.includes("ὰ") ? latinCharacters = latinCharacters.replaceAll("ὰ", "a") : latinCharacters
    lowerCase.includes("ᾶ") ? latinCharacters = latinCharacters.replaceAll("ᾶ", "a") : latinCharacters
    lowerCase.includes("ᾳ") ? latinCharacters = latinCharacters.replaceAll("ᾳ", "a") : latinCharacters
    lowerCase.includes("ἄ") ? latinCharacters = latinCharacters.replaceAll("ἄ", "a") : latinCharacters
    lowerCase.includes("ἂ") ? latinCharacters = latinCharacters.replaceAll("ἂ", "a") : latinCharacters
    lowerCase.includes("ἆ") ? latinCharacters = latinCharacters.replaceAll("ἆ", "a") : latinCharacters
    lowerCase.includes("ἅ") ? latinCharacters = latinCharacters.replaceAll("ἅ", "a") : latinCharacters
    lowerCase.includes("ἃ") ? latinCharacters = latinCharacters.replaceAll("ἃ", "a") : latinCharacters
    lowerCase.includes("ἇ") ? latinCharacters = latinCharacters.replaceAll("ἇ", "a") : latinCharacters
    lowerCase.includes("ᾀ") ? latinCharacters = latinCharacters.replaceAll("ᾀ", "a") : latinCharacters
    lowerCase.includes("ᾁ") ? latinCharacters = latinCharacters.replaceAll("ᾁ", "a") : latinCharacters
    lowerCase.includes("ᾴ") ? latinCharacters = latinCharacters.replaceAll("ᾴ", "a") : latinCharacters
    lowerCase.includes("ᾲ") ? latinCharacters = latinCharacters.replaceAll("ᾲ", "a") : latinCharacters
    lowerCase.includes("ᾷ") ? latinCharacters = latinCharacters.replaceAll("ᾷ", "a") : latinCharacters
    lowerCase.includes("ᾄ") ? latinCharacters = latinCharacters.replaceAll("ᾄ", "a") : latinCharacters
    lowerCase.includes("ᾂ") ? latinCharacters = latinCharacters.replaceAll("ᾂ", "a") : latinCharacters
    lowerCase.includes("ᾆ") ? latinCharacters = latinCharacters.replaceAll("ᾆ", "a") : latinCharacters
    lowerCase.includes("ᾅ") ? latinCharacters = latinCharacters.replaceAll("ᾅ", "a") : latinCharacters
    lowerCase.includes("ᾃ") ? latinCharacters = latinCharacters.replaceAll("ᾃ", "a") : latinCharacters
    lowerCase.includes("ᾇ") ? latinCharacters = latinCharacters.replaceAll("ᾇ", "a") : latinCharacters
    lowerCase.includes("β") ? latinCharacters = latinCharacters.replaceAll("β", "b") : latinCharacters
    lowerCase.includes("γ") ? latinCharacters = latinCharacters.replaceAll("γ", "g") : latinCharacters
    lowerCase.includes("δ") ? latinCharacters = latinCharacters.replaceAll("δ", "d") : latinCharacters
    lowerCase.includes("ε") ? latinCharacters = latinCharacters.replaceAll("ε", "e") : latinCharacters
    lowerCase.includes("ἐ") ? latinCharacters = latinCharacters.replaceAll("ἐ", "e") : latinCharacters
    lowerCase.includes("ἑ") ? latinCharacters = latinCharacters.replaceAll("ἑ", "e") : latinCharacters
    lowerCase.includes("έ") ? latinCharacters = latinCharacters.replaceAll("έ", "e") : latinCharacters
    lowerCase.includes("ὲ") ? latinCharacters = latinCharacters.replaceAll("ὲ", "e") : latinCharacters
    lowerCase.includes("ἔ") ? latinCharacters = latinCharacters.replaceAll("ἔ", "e") : latinCharacters
    lowerCase.includes("ἒ") ? latinCharacters = latinCharacters.replaceAll("ἒ", "e") : latinCharacters
    lowerCase.includes("ἕ") ? latinCharacters = latinCharacters.replaceAll("ἕ", "e") : latinCharacters
    lowerCase.includes("ἓ") ? latinCharacters = latinCharacters.replaceAll("ἓ", "e") : latinCharacters
    lowerCase.includes("ζ") ? latinCharacters = latinCharacters.replaceAll("ζ", "z") : latinCharacters
    lowerCase.includes("η") ? latinCharacters = latinCharacters.replaceAll("η", "i") : latinCharacters
    lowerCase.includes("ἠ") ? latinCharacters = latinCharacters.replaceAll("ἠ", "i") : latinCharacters
    lowerCase.includes("ἡ") ? latinCharacters = latinCharacters.replaceAll("ἡ", "i") : latinCharacters
    lowerCase.includes("ή") ? latinCharacters = latinCharacters.replaceAll("ή", "i") : latinCharacters
    lowerCase.includes("ὴ") ? latinCharacters = latinCharacters.replaceAll("ὴ", "i") : latinCharacters
    lowerCase.includes("ῆ") ? latinCharacters = latinCharacters.replaceAll("ῆ", "i") : latinCharacters
    lowerCase.includes("ἤ") ? latinCharacters = latinCharacters.replaceAll("ἤ", "i") : latinCharacters
    lowerCase.includes("ἢ") ? latinCharacters = latinCharacters.replaceAll("ἢ", "i") : latinCharacters
    lowerCase.includes("ἦ") ? latinCharacters = latinCharacters.replaceAll("ἦ", "i") : latinCharacters
    lowerCase.includes("ἥ") ? latinCharacters = latinCharacters.replaceAll("ἥ", "i") : latinCharacters
    lowerCase.includes("ἣ") ? latinCharacters = latinCharacters.replaceAll("ἣ", "i") : latinCharacters
    lowerCase.includes("ἧ") ? latinCharacters = latinCharacters.replaceAll("ἧ", "i") : latinCharacters
    lowerCase.includes("ῃ") ? latinCharacters = latinCharacters.replaceAll("ῃ", "i") : latinCharacters
    lowerCase.includes("ᾐ") ? latinCharacters = latinCharacters.replaceAll("ᾐ", "i") : latinCharacters
    lowerCase.includes("ᾑ") ? latinCharacters = latinCharacters.replaceAll("ᾑ", "i") : latinCharacters
    lowerCase.includes("ῄ") ? latinCharacters = latinCharacters.replaceAll("ῄ", "i") : latinCharacters
    lowerCase.includes("ῂ") ? latinCharacters = latinCharacters.replaceAll("ῂ", "i") : latinCharacters
    lowerCase.includes("ῇ") ? latinCharacters = latinCharacters.replaceAll("ῇ", "i") : latinCharacters
    lowerCase.includes("ᾔ") ? latinCharacters = latinCharacters.replaceAll("ᾖ", "i") : latinCharacters
    lowerCase.includes("ᾒ") ? latinCharacters = latinCharacters.replaceAll("ᾒ", "i") : latinCharacters
    lowerCase.includes("ᾖ") ? latinCharacters = latinCharacters.replaceAll("ᾖ", "i") : latinCharacters
    lowerCase.includes("ᾕ") ? latinCharacters = latinCharacters.replaceAll("ᾕ", "i") : latinCharacters
    lowerCase.includes("ᾓ") ? latinCharacters = latinCharacters.replaceAll("ᾓ", "i") : latinCharacters
    lowerCase.includes("ᾗ") ? latinCharacters = latinCharacters.replaceAll("ᾗ", "i") : latinCharacters
    lowerCase.includes("θ") ? latinCharacters = latinCharacters.replaceAll("θ", "th") : latinCharacters
    lowerCase.includes("ι") ? latinCharacters = latinCharacters.replaceAll("ι", "i") : latinCharacters
    lowerCase.includes("ἰ") ? latinCharacters = latinCharacters.replaceAll("ἰ", "i") : latinCharacters
    lowerCase.includes("ἱ") ? latinCharacters = latinCharacters.replaceAll("ἱ", "i") : latinCharacters
    lowerCase.includes("ί") ? latinCharacters = latinCharacters.replaceAll("ί", "i") : latinCharacters
    lowerCase.includes("ὶ") ? latinCharacters = latinCharacters.replaceAll("ὶ", "i") : latinCharacters
    lowerCase.includes("ῖ") ? latinCharacters = latinCharacters.replaceAll("ῖ", "i") : latinCharacters
    lowerCase.includes("ἴ") ? latinCharacters = latinCharacters.replaceAll("ἴ", "i") : latinCharacters
    lowerCase.includes("ἲ") ? latinCharacters = latinCharacters.replaceAll("ἲ", "i") : latinCharacters
    lowerCase.includes("ἶ") ? latinCharacters = latinCharacters.replaceAll("ἶ", "i") : latinCharacters
    lowerCase.includes("ἵ") ? latinCharacters = latinCharacters.replaceAll("ἵ", "i") : latinCharacters
    lowerCase.includes("ἳ") ? latinCharacters = latinCharacters.replaceAll("ἳ", "i") : latinCharacters
    lowerCase.includes("ἷ") ? latinCharacters = latinCharacters.replaceAll("ἷ", "i") : latinCharacters
    lowerCase.includes("ϊ") ? latinCharacters = latinCharacters.replaceAll("ϊ", "i") : latinCharacters
    lowerCase.includes("κ") ? latinCharacters = latinCharacters.replaceAll("κ", "k") : latinCharacters
    lowerCase.includes("λ") ? latinCharacters = latinCharacters.replaceAll("λ", "l") : latinCharacters
    lowerCase.includes("μ") ? latinCharacters = latinCharacters.replaceAll("μ", "m") : latinCharacters
    lowerCase.includes("ν") ? latinCharacters = latinCharacters.replaceAll("ν", "n") : latinCharacters
    lowerCase.includes("ξ") ? latinCharacters = latinCharacters.replaceAll("ξ", "ks") : latinCharacters
    lowerCase.includes("ο") ? latinCharacters = latinCharacters.replaceAll("ο", "o") : latinCharacters
    lowerCase.includes("ὀ") ? latinCharacters = latinCharacters.replaceAll("ὀ", "o") : latinCharacters
    lowerCase.includes("ὁ") ? latinCharacters = latinCharacters.replaceAll("ὁ", "o") : latinCharacters
    lowerCase.includes("ὄ") ? latinCharacters = latinCharacters.replaceAll("ὄ", "o") : latinCharacters
    lowerCase.includes("ὂ") ? latinCharacters = latinCharacters.replaceAll("ὂ", "o") : latinCharacters
    lowerCase.includes("ὅ") ? latinCharacters = latinCharacters.replaceAll("ὅ", "o") : latinCharacters
    lowerCase.includes("ὃ") ? latinCharacters = latinCharacters.replaceAll("ὃ", "o") : latinCharacters
    lowerCase.includes("ό") ? latinCharacters = latinCharacters.replaceAll("ό", "o") : latinCharacters
    lowerCase.includes("ὸ") ? latinCharacters = latinCharacters.replaceAll("ὸ", "o") : latinCharacters
    lowerCase.includes("π") ? latinCharacters = latinCharacters.replaceAll("π", "p") : latinCharacters
    lowerCase.includes("ρ") ? latinCharacters = latinCharacters.replaceAll("ρ", "r") : latinCharacters
    lowerCase.includes("σ") ? latinCharacters = latinCharacters.replaceAll("σ", "s") : latinCharacters
    lowerCase.includes("ς") ? latinCharacters = latinCharacters.replaceAll("ς", "s") : latinCharacters
    lowerCase.includes("τ") ? latinCharacters = latinCharacters.replaceAll("τ", "t") : latinCharacters
    lowerCase.includes("υ") ? latinCharacters = latinCharacters.replaceAll("υ", "u") : latinCharacters
    lowerCase.includes("ὑ") ? latinCharacters = latinCharacters.replaceAll("ὑ", "u") : latinCharacters
    lowerCase.includes("ύ") ? latinCharacters = latinCharacters.replaceAll("ύ", "u") : latinCharacters
    lowerCase.includes("ὺ") ? latinCharacters = latinCharacters.replaceAll("ὺ", "u") : latinCharacters
    lowerCase.includes("ῦ") ? latinCharacters = latinCharacters.replaceAll("ῦ", "u") : latinCharacters
    lowerCase.includes("ὔ") ? latinCharacters = latinCharacters.replaceAll("ὔ", "u") : latinCharacters
    lowerCase.includes("ὒ") ? latinCharacters = latinCharacters.replaceAll("ὒ", "u") : latinCharacters
    lowerCase.includes("ὖ") ? latinCharacters = latinCharacters.replaceAll("ὖ", "u") : latinCharacters
    lowerCase.includes("ϋ") ? latinCharacters = latinCharacters.replaceAll("ϋ", "u") : latinCharacters
    lowerCase.includes("φ") ? latinCharacters = latinCharacters.replaceAll("φ", "f") : latinCharacters
    lowerCase.includes("χ") ? latinCharacters = latinCharacters.replaceAll("χ", "x") : latinCharacters
    lowerCase.includes("ψ") ? latinCharacters = latinCharacters.replaceAll("ψ", "ps") : latinCharacters
    lowerCase.includes("ω") ? latinCharacters = latinCharacters.replaceAll("ω", "o") : latinCharacters
    lowerCase.includes("ώ") ? latinCharacters = latinCharacters.replaceAll("ώ", "o") : latinCharacters
    lowerCase.includes("ὼ") ? latinCharacters = latinCharacters.replaceAll("ὼ", "o") : latinCharacters
    lowerCase.includes("ῳ") ? latinCharacters = latinCharacters.replaceAll("ῳ", "o") : latinCharacters
    lowerCase.includes("ὠ") ? latinCharacters = latinCharacters.replaceAll("ὠ", "o") : latinCharacters
    lowerCase.includes("ὡ") ? latinCharacters = latinCharacters.replaceAll("ὡ", "o") : latinCharacters
    lowerCase.includes("ὤ") ? latinCharacters = latinCharacters.replaceAll("ὤ", "o") : latinCharacters
    lowerCase.includes("ὢ") ? latinCharacters = latinCharacters.replaceAll("ὢ", "o") : latinCharacters
    lowerCase.includes("ὦ") ? latinCharacters = latinCharacters.replaceAll("ὦ", "o") : latinCharacters
    lowerCase.includes("ὥ") ? latinCharacters = latinCharacters.replaceAll("ὥ", "o") : latinCharacters
    lowerCase.includes("ὣ") ? latinCharacters = latinCharacters.replaceAll("ὣ", "o") : latinCharacters
    lowerCase.includes("ὧ") ? latinCharacters = latinCharacters.replaceAll("ὧ", "o") : latinCharacters
    lowerCase.includes("ῴ") ? latinCharacters = latinCharacters.replaceAll("ῴ", "o") : latinCharacters
    lowerCase.includes("ῲ") ? latinCharacters = latinCharacters.replaceAll("ῲ", "o") : latinCharacters
    lowerCase.includes("ῷ") ? latinCharacters = latinCharacters.replaceAll("ῷ", "o") : latinCharacters
    lowerCase.includes("ᾤ") ? latinCharacters = latinCharacters.replaceAll("ᾤ", "o") : latinCharacters
    lowerCase.includes("ᾢ") ? latinCharacters = latinCharacters.replaceAll("ᾢ", "o") : latinCharacters
    lowerCase.includes("ᾦ") ? latinCharacters = latinCharacters.replaceAll("ᾦ", "o") : latinCharacters
    lowerCase.includes("ᾥ") ? latinCharacters = latinCharacters.replaceAll("ᾥ", "o") : latinCharacters
    lowerCase.includes("ᾣ") ? latinCharacters = latinCharacters.replaceAll("ᾣ", "o") : latinCharacters
    lowerCase.includes("ᾧ") ? latinCharacters = latinCharacters.replaceAll("ᾧ", "o") : latinCharacters
    lowerCase.includes("ῳ") ? latinCharacters = latinCharacters.replaceAll("ῳ", "o") : latinCharacters
    lowerCase.includes("ᾠ") ? latinCharacters = latinCharacters.replaceAll("ᾠ", "o") : latinCharacters
    lowerCase.includes("ᾡ") ? latinCharacters = latinCharacters.replaceAll("ᾡ", "o") : latinCharacters
    
    return latinCharacters
  }

  console.log(latinCharactersMatchSchema("ΆᾶΑᾶᾷᾇἏ"))

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
          className={searchValue === latinCharactersMatchSchema(w) || searchValue === w ? "text-white bg-red-500" : "hover:text-blue-700 hover:underline select-text"}
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
