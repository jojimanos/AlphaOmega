export default function clickableWords(props) {

    function dictionary(w) {
      let link1 = "http://www.perseus.tufts.edu/hopper/morph?l="
      let link2 = "&la=greek"
      let link = link1 + w + link2 
      open(link)
    }

    const arr = Array.from(props)
    const string = arr.join('')
    const string2 = string.slice(17)  
    const words = string2.split(/ /g );
    return words.map(w => 
      <a onClick={() => dictionary(w)}>  {w}  </a>
    );
  }