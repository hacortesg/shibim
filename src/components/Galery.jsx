import React from "react"
import { useState, useEffect, useRef } from "react"
import { seventyTwo as list } from "../data/seventytwo";
import { getImgMagen } from "./utils";
import Card from "./Card";
import Magen from "./Magen";
import Buscar from "./Buscar";
// import {useContext} from "react";

function Galery({ toggle}) { //BUSCA toggle para vista listado o Tarjetas
  // llama el contexto que va a usar en este componente
//   const {setNombre} = useContext(NombreContext);

  const [magen, setMagen] = useState(false);  //oculta o muestra Magen
  const [pos, setPos] = useState(null);
	const [autor, setAutor] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  // const [found, setFound] = useState(list);
  // console.log(`este es ${search}`);
  function ooMagen(orden, origen) {
    // e.stopPropagation();
    console.log(`Este es el autor ${autor}`);
    setPos(orden);
		setAutor(origen);
    setMagen(!magen);

  }

	function handleSearch(target){
		setSearch(target);
	}

  function Names() {
    setSearch(search.toString().toLowerCase());
    console.log(search);

    let found = list;
// if(!!search)
    if (search !== "") {
      found = list.filter((item) => {return item.funcion.toString().toLowerCase().includes(search) || item.ver.toString().toLowerCase().includes(search)});
      console.log(`Longitud: ${found.length}`);
      if (found.length === 0 ) {
        found = list.filter((item) => {return item.id === 31});
        // Si no encuentra coincidencias devuelve nombre q sirve para todo. found = list[30];
      }
    }


    const cardNames = found.map(it => {
      return (
        <Card key={it.id}
          src={getImgMagen(it.id)}
          alt={it.nombre}
          orden={it.id}
          work={it.funcion}
          detail={it.ver}
          tehi={it.tehilim}
          toggle={toggle}
          magen={magen}
          ooMagen={ooMagen}
        />
      );
    }
    )
    return (cardNames);
  }

  return (
    <>
      {magen ? <Magen pos={pos} ooMagen={ooMagen} origen={autor} /> : ""}
      <Buscar ref={inputRef} handleSearch={handleSearch}  />
      <Names />
    </>
  );
}
export default Galery
