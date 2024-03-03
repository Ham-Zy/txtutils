import React, {useState} from 'react';
import PropTypes from 'prop-types'

export default function TextForm(props) {
const handleUpClick = ()=>{
    console.log("Upercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
}
const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
}

const [text, setText] = useState('Enter text here'); 
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          id="myBox"
          value={ text }
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
TextForm.defaultProps = {
  heading: "Set Heading Here",
};