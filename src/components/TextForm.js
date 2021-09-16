import React, {useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("");
    
    //Uppercase Click
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked " + text)
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    //Lowercase Click
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked " + text)
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    //Clear Text Functionality
    const clearClick=()=>{
        // console.log("Uppercase was clicked " + text)
        let newText='';
        setText(newText);
        props.showAlert("Text is cleared","success");
    }
    
    //Copy Text
    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }
    

    return (
        <>
        <div className="container"style={{color:props.mode==='dark'?'white':'#0d1a44'}}>
        <h1 >{props.heading}</h1>
        <div>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>

        {/* <button className="btn btn-primary mx-2 my-2" onClick={searchClick}>Search a Word</button> */}
        {/* <input type="text" value={text} id="myInput"/> */}

        {/* Copy to clipboard */}
        {/* <button onclick={copyClick} onChange={handleCopyText}>Copy To clipboard</button> */}

      </div>
      <div className="container my-2"style={{color:props.mode==='dark'?'white':'#0d1a44'}}>
          <h2>Your Text Summary</h2>
          <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
          <p><b>{0.008 * text.split("").length}</b> Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter somethng above to preview it here!"}</p>
      </div>
        </>
    )
}
