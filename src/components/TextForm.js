import React from 'react'

export default function TextForm(props) {
  return (
  <>
  <div>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" rows="8"></textarea>
  <button className="btn btn primary">Convert to Uppercase</button>
</div>
</div>
    </>
  )
}
