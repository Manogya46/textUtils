import React,{useState} from 'react'

function About() {

    const [myStyle,setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    });

    // const [btnText , setBtnText] = useState("Enable Dark Mode")

    // function DarkMode(){
    //     if(myStyle.color == 'white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         });
    //         setBtnText("Disable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         });
    //         setBtnText("Enable Dark Mode")
    //     }
    // }


  return (
    <div id="myBox">
        <div className="accordion" id="accordionExample" style={myStyle} >
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne" style={myStyle}>
                    <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>TextUtils gives you a way to analyze your text quickly and efficiently.</p>
                </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Free To Use</strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>TextUtils is a free tool. That provides instant word and character count and you can also change the case of your word/character.</p>
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong>Browser Compatible</strong> 
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>Our website works on all browser like Safari , Chrome , Mozilla Firefox , Internet Explorer , Opera etc.</p>
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
            <button type="button" onClick={DarkMode} className="btn btn-dark my-3">{btnText}</button>
        </div> */}
    </div>
  )
}

export default About;
