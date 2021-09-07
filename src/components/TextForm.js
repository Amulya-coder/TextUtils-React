import React, {useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("");
    
    //Uppercase Click
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked " + text)
        let newText=text.toUpperCase();
        setText(newText);
    }

    //Lowercase Click
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked " + text)
        let newText=text.toLowerCase();
        setText(newText);
    }

    //Clear Text Functionality
    const clearClick=()=>{
        // console.log("Uppercase was clicked " + text)
        let newText='';
        setText(newText);
    }

    const handleOnChange=(event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }
    

    return (
        <>
        <div className="container">
        <h1>{props.heading}</h1>
        <div>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearClick}>Clear Text</button>

        {/* <button className="btn btn-primary mx-2 my-2" onClick={searchClick}>Search a Word</button> */}
        {/* <input type="text" value={text} id="myInput"/> */}

        {/* Copy to clipboard */}
        {/* <button onclick={copyClick} onChange={handleCopyText}>Copy To clipboard</button> */}

      </div>
      <div className="container my-2">
          <h2>Your Text Summary</h2>
          <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
          <p><b>{0.008 * text.split("").length}</b> Minutes to read</p>
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
        </>
    )
}
