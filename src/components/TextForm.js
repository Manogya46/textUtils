import React, {useState} from 'react'

function TextForm(props) {

    const [text,setText] = useState("");

    function Upper(event){
        setText(text.toUpperCase());
    }

    function Lower(event){
        setText(text.toLowerCase());
    }

    function Clear(){
        setText("");
    }

    function Copy(event){
        var text = event.target.value;
        navigator.clipboard.writeText(text);
    }

    function RemoveWhiteSpaces(event){
        var text = event.target.value;
        setText(text.replace(/\s+/g, ' '));
    }

    function handleChange(event){
        setText(event.target.value);
    }

    function wordCount(content){
        if(content===""){
          return 0;
        }
        let arr = content.split(" ");
        let len = arr.length;
        let count=0;
        
        for(let i=0;i<len;i++){
          if(arr[i]==='' || arr[i]===' '){
             count++;
          }
        }
        return len-count;
      }
  return (

    <div>
        <div className="container mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" onChange={handleChange} value={text} id="myBox" rows="8">{text}</textarea>
            <button type="button"  onClick={Upper} className="btn btn-primary my-2 mx-1">Convert to Uppercase</button>
            <button type="button"  onClick={Lower} className="btn btn-primary my-2 mx-1">Convert to Lowercase</button>
            <button type="button"  onClick={Clear} className="btn btn-primary my-2 mx-1">Clear Text</button>
            <button type="button"  onClick={Copy} value={text} className="btn btn-primary my-2 mx-1">Copy Text</button>
            <button type="button"  onClick={RemoveWhiteSpaces} value={text} className="btn btn-primary my-2 mx-1">Remove White Spaces</button>
        </div>

        <div className="container mb-3">
            <h2>Text Summary</h2>
            <p>Words : {wordCount(text)}</p>
            <p>Characters : {text.length}</p>
        </div>
        {/* <button type="button" className="btn btn-dark my-3">Enable Dark Mode</button> */}
    </div>
  )
}

export default TextForm;
