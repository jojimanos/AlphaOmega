export default function ClickableWords(props: any): JSX.Element[] {
  const arr = Array.from(props);
  const string: string = arr.join("");
  const string2: string = string.slice(25); //Removes the starting tags from text
  const string3: string = string2.slice(0, -4);
  const words: string[] = string3.split(/ /g); //Splits words
  const words2 = words.map((w, index) => {
    return <span key={index}>{w} </span>;
  });
  return words2;
}
