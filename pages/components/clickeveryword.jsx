import React from "react";

export function App() {
    const par = <div>restart</div>

    const paragraph = par.props.children

     console.log(paragraph)
  
    const handleClick = (word) => {
      alert("Alert!")
      console.log(word);
      // handle the rest
  
    };
  
    const renderParagraph = () => Array.from(paragraph)
      .map((word) => <span onClick={() => handleClick(word)}>{word}</span>);
  
    return (
      <div className="App">
        {renderParagraph()}
      </div>
    );
  }

  export default App