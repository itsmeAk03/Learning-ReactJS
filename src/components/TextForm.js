import React,{useState} from 'react'

export default function TextForm(props) {

  const handleOnClick=()=>{
    console.log("UpperCase Was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleOnDown=()=>{
    console.log("LoweCase Was clicked");
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleClearText=()=>{
    setText('');
  }

  const[text,setText]=useState("Enter text here");
  // setText("New text");

  return (
  <>
  
<div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#A9A9A9':'white',
    color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  <button className="btn btn primary mx-2 my-2" onClick={handleOnClick} >Convert to Uppercase</button>
  <button className="btn btn primary my-2" onClick={handleOnDown} >Convert to Lowercase</button>
  <button className="btn btn primary my-2 mx-2" onClick={handleCopy} >Copy Text</button>
  <button className="btn btn primary my-2 mx-2" onClick={handleExtraSpace} >Remove Extra space</button>
  <button className="btn btn primary my-2 mx-2" onClick={handleClearText} >Clear Text</button>
</div>

<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter Something in textbox above to preview it here"}</p>
</div>
    </>
  )
}
