import { SetStateAction } from "react";

function perseusSearch(word: string) {
  let link1 = "http://www.perseus.tufts.edu/hopper/morph?l=";
  let link2 = "&la=greek";
  let link = link1 + word.replace(/[.,]/g, "") + link2;
  open(link);
}

function bibleNamesSearch(word: string) {
  let link1 = "https://biblicaltext.com/dictionary/";
  let link = link1 + word.replace(/[.,]/g, "");
  open(link);
}

function LSJSearch(word: string) {
  let link1 = "https://lsj.gr/index.php?search=";
  let link2 =
    "&title=Special:Search&go=Go&searchToken=daplf51mlxvw44kvvt6d9h5an";
  let link = link1 + word.replace(/[.,]/g, "");
  +link2;
  open(link);
}

const searchForTheWord = (word: string, bibleNames: unknown[]) => {
  if (bibleNames.includes(word.replace(/[,.]/g, ""))) {
    bibleNamesSearch(word);
  } else {
    perseusSearch(word);
  }
};

const checkWordResources = (
  bibleNames: unknown[],
  word: string,
  setPerseus: React.Dispatch<SetStateAction<boolean>>,
  setBibleNames: React.Dispatch<SetStateAction<boolean>>
) => {
  if (bibleNames.includes(word.replace(/[,.]/g, ""))) {
    setPerseus(false);
    setBibleNames(true);
  } else {
    setPerseus(true);
    setBibleNames(false);
  }
};

export const useClickableWord = {
  perseusSearch,
  bibleNamesSearch,
  LSJSearch,
  searchForTheWord,
  checkWordResources,
};
