// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{useState} from 'react';



function App() {

  //Whether dark mode is enabled or not
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#0d1a44'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  {/* <Alert alert={alert}/> */}
  <div className="container my-3">
  <TextForm heading="Enter the text here" mode={mode}/> 
  </div>
  {/* <Navbar/> */}
  {/* <About/> */}
  {/* <Navbar title="TextUtils" about="About textUtils"/> */}
    </>
  );
}

export default App;
