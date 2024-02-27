import React from "react";
import { useState, useRef, useEffect } from "react";
import Galery from "./Galery";
import Buscar from "./Buscar";
import Mision from "./Mision";
import GridRashbi from "./GridRashbi";
import GridRamjal from "./GridRamjal";
import GridMeta from "./GridMeta";
import Embo from "./Embo";

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
              <Mision />
          </>
        );
        case 2:
          return (
            <>
              <Bar />
              <GridRashbi />
            </>
          );
        case 3:
          return (
            <>
              <Bar />
              <GridRamjal />
            </>
          );
        case 4:
          return (
            <>
              <Bar />
              <GridMeta />
            </>
          );
        case 5:
          return (
            <>
              <Bar />
               <Embo />
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
              <a onClick={() => { setEntrada(1) }}>Mi Misión</a>
              <a onClick={() => { setEntrada(2) }}>Tabla Rashbi</a>
              <a onClick={() => { setEntrada(3) }}>Tabla Ramjal</a>
              <a onClick={() => { setEntrada(4) }}>Tabla Metatron</a>
              <a onClick={() => { setEntrada(5) }}>Shana Embolismal</a>
            </div>
          </div>
          <div className="navr">
            <button onClick={onToggle}>
              {toggle ? "🗄" : "🗃"}
            </button>
            <div className="bh">
  ב"ה
            </div>
          </div>
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
