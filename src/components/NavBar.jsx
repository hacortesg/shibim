  import React from "react";
  import { useState, useRef, useEffect } from "react";
  import Galery from "./Galery";
  import Buscar from "./Buscar";
  import Embo from "./Embo";
  import Mision from "./Mision";
//   import {NombreContext} from"../context/NombreContext";


  function NavBar({ onToggle, toggle }) {

//     const inputRefB = useRef(null);
    const [entrada, setEntrada] = useState(0);

//     const [blanco, setBlanco] = useState("");

    useEffect (()=>{
//       inputRefB.current.focus();
    },[]);

//   elementos que se va a compartir el contexto
//   <NombreContext.Provider value={nombre, setNombre}>
//   </NombreContext.Provider>

//     function handleSearch(target) {
// //       inputRefB.current.focus();
//       setBlanco(target);
//       console.log(blanco);
//     }

    function Menu() {
      switch (entrada) {
        case 0:
          return (
            <>
              <Bar />
              {/* <div>Este es:{busca}</div> */}
              {/*<Buscar ref={inputRefB} handleSearch={handleSearch} />*/}
              <Galery toggle={toggle} />
{/*
              */}
            </>
          );
        case 1:
          return (
            <>
              <Bar />
              <Buscar handleSearch={handleSearch} />
              <Galery toggle={toggle} busca={busca} />
          </>
        );
        case 2:
          return (
            <>
              <Bar />
               <Embo />
            </>
          );
        case 3:
          return (
            <>
              <Bar />
              <Mision />
            </>
          );
      }
    }

    function Bar() {

      return (
        <div className="nav" >
          <div className="dropdown">
            <button className="dropdbutton">Herramientas</button>
            <div className="dropdown-content" >
              <a onClick={() => { setEntrada(0) }}>Home</a>
              <a onClick={() => { setEntrada(1) }}>Buscar</a>
              <a onClick={() => { setEntrada(2) }}>Shana Embolismal</a>
              <a onClick={() => { setEntrada(3) }}>Mi Misión</a>
            </div>
          </div>
          <button onClick={onToggle}>
            {toggle ? "🗄" : "🗃"}
          </button>
        </div>

      );
    }

    return (
      <div>
        <Menu />
      </div>
    );
  }

  export default NavBar
