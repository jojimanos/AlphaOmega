export default function clickableWords(props: any): JSX.Element[] {
  function dictionary(w: string) {
    let link1 = "http://www.perseus.tufts.edu/hopper/morph?l=";
    let link2 = "&la=greek";
    let link = link1 + w + link2;
    open(link);
  }

  const arr = Array.from(props);
  const string: string = arr.join("");
  const string2: string = string.slice(17);
  const words: string[] = string2.split(/ /g);
  return words.map((w) => <a onClick={() => dictionary(w)}> {w} </a>)
}