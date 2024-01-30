import React from "react";
import { useState, useRef, useEffect } from "react";
import Galery from "./Galery";
import Buscar from "./Buscar";
import Embo from "./Embo";
import Mision from "./Mision";
import TablaRashbi from "./TablaRashbi";
import TablaRamjal from "./TablaRamjal";

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
{/*              */}
              <Bar />
              <Galery toggle={toggle} />
            </>
          );
        case 1:
          return (
            <>
              <Bar />
               <Embo />
          </>
        );
        case 2:
          return (
            <>
              <Bar />
              <Mision />
            </>
          );
        case 3:
          return (
            <>
              <Bar />
              <TablaRashbi />
            </>
          );
        case 3:
          return (
            <>
              <Bar />
              <TablaRamjal />
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
              <a onClick={() => { setEntrada(1) }}>Shana Embolismal</a>
              <a onClick={() => { setEntrada(2) }}>Mi Misión</a>
              <a onClick={() => { setEntrada(3) }}>Tabla Rashbi</a>
              <a onClick={() => { setEntrada(4) }}>Tabla Ramjal</a>
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
