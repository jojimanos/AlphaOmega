function dictionary(word: string) {
  let link1 = "http://www.perseus.tufts.edu/hopper/morph?l=";
  let link2 = "&la=greek";
  let link = link1 + word.replace(/[.,]/g, "") + link2;
  open(link);
}

function wikipedia(word: string) {
  let link1 = "https://biblicaltext.com/dictionary/";
  let link = link1 + word.replace(/[.,]/g, "");
  open(link);
}

const searchForTheWord = (
  word: string,
  bibleNames: unknown[],
  index: number
) => {
  if (bibleNames.includes(word.replace(/[,.]/g, ""))) {
    wikipedia(word);
  } else {
    dictionary(word);
  }
};

export const useClickableWord = {
  dictionary,
  wikipedia,
  searchForTheWord,
};
