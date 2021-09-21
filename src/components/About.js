import React from "react";

export default function About(props) {

  // const [myStyle,setMyStyle]=useState(initialState)
  // const [myStyle,setMyStyle]= useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  let myStyle={
    color:props.mode==='dark'?'white':'rgb(16 45 84)',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
    
    
  }

  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'rgb(16 45 84)'}}>
      <h1>About Us</h1>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Analyze your text</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          <strong>TextUtils</strong> gives you a way to analyze your text quickly and efficiently. Be it word count or character count 
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         <strong>Free to use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          <strong>TextUtils</strong> is a free character counter tool that provides instant character count & word count
          statistics for a given test. TextUtils repots the number of words and characters. This is suitable for writing text with character/word limit.  
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Browser Compatible</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          <strong>This word counter software works in any web browers</strong> such as Chrome, Firefox, Internet Explorer,Safari, Opera. It suits to count characters in 
          facebook, blogs, books, excel document, pdf document, essays etc.
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}
