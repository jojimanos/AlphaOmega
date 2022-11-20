import myJson from "../assets/bible_names.json"

export default function ClickableWords(props: any): JSX.Element[] {

  const incoming = JSON.stringify(myJson)

  const parsed = JSON.parse(incoming)

  const bibleNames = Object.values(parsed)

  function dictionary(w: string) {
    let link1 = "http://www.perseus.tufts.edu/hopper/morph?l=";
    let link2 = "&la=greek";
    let link = link1 + w + link2;
    open(link);
    console.log(bibleNames)
  }

  function wikipedia(w: string) {
    let link1 = "https://biblicaltext.com/dictionary/"
    let link = link1 + w
    open(link);
  }

  const arr = Array.from(props);
  const string: string = arr.join("");
  const string2: string = string.slice(15); //Removes the starting tags from text
  const string3: string = string2.slice(0,-15); 
  const words: string[] = string3.split(/ /g); //Splits words
  const words2= words.map((w, index) => <a key={index}><button className="hover:text-blue-700 hover:underline" onClick={() => { if (bibleNames.includes(w.replace(/[,.]/g, ''))) { wikipedia(w.replace(/[.,]/g, '')) } else { dictionary(w.replace(/[.,]/g, '')) } }}> {w} </button> </a>)
  return words2
}