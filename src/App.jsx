// import './App.css'
import { useState, useEffect} from 'react';
import Galery from './components/Galery';
import NavBar from './components/NavBar';
//import {getWH} from "./components/utils";

// import Profile from './components/Profile';

function App() {

  const [toggle, setToggle] = useState(false);
  const [width,setWidth] = useState(window.innerWidth);
  // const [magen, setMagen] = useState(false);
  useEffect (()=>{

    window.addEventListener("resize", handleW);
    return () => {
      window.removeEventListener("resize", handleW);
    };
//    console.log (width);
//    if(width < 756){
//      setToggle(true);

  },[width]);

    const handleW = () => {
      setWidth(window.innerWidth + 0);
      if(width <= 748){
        setToggle(true);
      }
      if(width > 748){
        setToggle(false);
      }
    };

  function onToggle(e) {
    e.stopPropagation();
    setToggle(!toggle);
  }

  // function onMagen(e) {
  //   e.stopPropagation();
  //   setMagen(!magen);
  // }
  
  return (
    <>
      <NavBar onToggle={onToggle} toggle={toggle} />
      {/* <Galery toggle={toggle}/> */}
    </>
  )
}

export default App
