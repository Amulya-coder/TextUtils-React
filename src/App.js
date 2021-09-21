// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  //Whether dark mode is enabled or not
  const [mode,setMode]=useState('light');

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    
    //Alert Object
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // const [alert,setAlert]=useState(null);

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(16 45 84)';
      showAlert("Dark mode has been enabled", "success");
      // document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      // document.title='TextUtils - Light Mode';
    }
  }

  return (
    <>
  <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  {/* <Alert alert={alert}/> */}
  <div className="container my-3">
    
  <Switch>
        {/* /users --> component1
        /users/home --> component2 */}
            <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/"> 
        <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces " mode={mode}/> 
           </Route> 
  </Switch>  
  </div>
  </Router> 
   
   {/* <Navbar title="TextUtils" about="About textUtils"/> */}
    </>
  );
}

export default App;
