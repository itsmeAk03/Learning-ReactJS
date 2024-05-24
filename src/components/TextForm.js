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

  const[text,setText]=useState("Enter text here");
  // setText("New text");

  return (
  <>
  
<div className="container">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  <button className="btn btn primary mx-2 my-2" onClick={handleOnClick} >Convert to Uppercase</button>
  <button className="btn btn primary my-2" onClick={handleOnDown} >Convert to Lowercase</button>
</div>

<div className="container my-3">
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
    </>
  )
}
