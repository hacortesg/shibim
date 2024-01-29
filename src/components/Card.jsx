import React from 'react'
import Magen from './Magen';

function Card({ src, alt, orden, work, detail, tehi, toggle, magen, ooMagen }) {
// console.log(detail);
  function showMagen() {
    // e.stopProgagation();
    // ooMagen()
    console.log(magen)
    // {/* <Magen pos={orden}/> */}
    return (
      <>
        <p>Shalom</p>
      </>
    );
  }

  function showNames(orden) {
    return (
      <>
        <Magen id={orden} autor={autor} />
      </>
    )
  }

  return (
    <>{
      toggle ? (
        <div className="card">
          <img src={src} alt={alt}/>
          <p>{orden}. {work}</p>
          <p className="tooltip">👁 Leer más..
            <span className="tttext">{detail}</span>
          </p>
          <p>{tehi}</p>
          <button className="button" onClick={() => { ooMagen(orden, "Rashbi") }}>
            🔯 Rashbi
          </button>
          <button className="button" onClick={() => { ooMagen(orden, "Ramjal") }}>
            🔯 Ramjal
          </button>
          <button className="button" onClick={() => { ooMagen(orden, "Meta") }}>
            🔯 Meta
          </button>
        </div>
      ) : (
        <div className="list">
          <img src={src} alt={alt} />
          <div>{`${orden}. ${work}`}</div>
          <span className="tooltip" >  {" Leer más.. "}
            <span className="tttext">{detail}</span>
          </span>
          <span>  {"  " + tehi}</span>
          <button className="button" onClick={() => { ooMagen(orden, "Rashbi") }}>
            🔯 Rashbi
          </button>
          <button className="button" onClick={() => { ooMagen(orden, "Ramjal") }}>
            🔯 Ramjal
          </button>
          <button className="button" onClick={() => { ooMagen(orden, "Meta") }}>
            🔯 Meta
          </button>
        </div>
      )
    }
    </>
    // <div className={toggle ? "card" : "list"}>
    //   <img src={src} alt={alt} />
    //   <p>{orden + 1}. {work}</p>
    //   {detail && <p>Leer más.. 🔎🕍🐛🦋👁💭</p>}
    //   <p>{tehi}</p>
    //   <button className="button">
    //     {toggle ? "🔯" : "Ver en Magen"}
    //   </button>
    // </div>
  );
}

export default Card
