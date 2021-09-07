// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


function App() {
  return (
    <>
  <Navbar title="TextUtils"/>
  {/* <Navbar title="TextUtils" about="About textUtils"/> */}
  {/* <Navbar/> */}
  <div className="container my-3">
  <TextForm heading="Enter the text here"/>
  {/* <About/> */}
  </div>
    </>
  );
}

export default App;
