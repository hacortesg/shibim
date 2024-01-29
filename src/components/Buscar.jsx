import React from "react";
import { useRef, useState, useEffect, forwardRef } from "react";

// const Buscar = forwardRef(({handleSearch}, ref)=>{
export default forwardRef(({handleSearch}, ref)=>{

// });
// function Buscar({ref, handleSearch }) {

  const [target, setTarget] = useState("");
//   const ref = useRef(null);
  useEffect(()=>{
//     ref.current.focus();
  },[]);

  function handleChange(es) {
    es.preventDefault();
//     ref.current.focus();
    setTarget(es.target.value);
    handleSearch(target);
    // busca();
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text"
          ref={ref}
          placeholder="Busqueda" autoFocus
          className="busca"
          onChange={handleChange}
          value={target} />
        <div>{target}</div>
      </form>
    </div>
  )
// }
});
// export default Buscar
// export default forwardRef(Buscar);
