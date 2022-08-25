import React, { useState } from 'react';
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode,setMode] = useState('light');
  
  function toggleMode(){
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "rgb(45,52,60)";
      document.body.style.color="white";
      document.getElementById("myBox").style.backgroundColor="rgb(45,52,60)";
      document.getElementById("myBox").style.color="white";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color="black";
      document.getElementById("myBox").style.backgroundColor="white";
      document.getElementById("myBox").style.color="black";
    }
  }

  return (
    <Router>
      <div>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/" element={<TextForm heading="Enter text: "/>}/>
            </Routes>
        </div>
      </div>
  </Router>
  );
}

export default App;
