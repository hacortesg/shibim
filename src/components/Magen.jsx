import React from "react";
import {useRef, useState} from "react";
import { getImgMagen, getOtiot, getLightOtiot } from './utils';

function Magen({ pos, ooMagen, origen }) {

	const [mouseE, setMouseE] = useState("imgutils/magenBlueStatic.png");
	const [otiot, setOtiot] = useState(getOtiot(pos, origen));//ImgMagen(pos));
	const [otiotL, setOtiotL] = useState(getLightOtiot(pos, origen));
  const [light, setLight] = useState(false);
// 	const [author, setAuthor] = useState("");
// 	const hovRef = useRef(null);

	function handleMEnter(){
		setLight(true);
// traer letras del otiot con pos
		setOtiotL(getLightOtiot(pos, origen));
// 		setOtiot("");
		console.log(`Origen de la magen ${origen}`);
		console.log("hoveeer " + otiotL.i + " " + otiotL.m + " " + otiotL.f);
		setMouseE("imgutils/magenBlueLit.png");
	}

	function handleMOut(){
		setLight(false);
		setMouseE("imgutils/magenBlueStatic.png");
		setOtiot(getOtiot(pos, origen));
	}

function ModalMagen(){

	if(light && origen === "Meta"){
		return(
			<div className="lightmeta">
				<img src={otiotL.f}
					alt="sof"
				/>
				<img src={otiotL.m}
					alt="betoj"
				/>
				<img src={otiotL.i}
					alt="hithil"
				/>
			</div>
		)
	}
	else{
		if(light && origen != "Meta"){
			return(
				<div className="lighthebrew">
					<img src={otiotL.f}
						alt="sof"
					/>
					<img src={otiotL.m}
						alt="betoj"
					/>
					<img src={otiotL.i}
						alt="hithil"
					/>
				</div>
			)
		}
		else{
			if(!light && origen === "Meta"){
				return(
					<div className="showmeta">
						<img src={otiot.f}
							alt="sof"
						/>
						<img src={otiot.m}
							alt="betoj"
						/>
						<img src={otiot.i}
							alt="hithil"
						/>
					</div>
				)
			}
			else{
				return(
					<div className="showhebrew">
						<img src={otiot.f}
							alt="sof"
						/>
						<img src={otiot.m}
							alt="betoj"
						/>
						<img src={otiot.i}
							alt="hithil"
						/>
					</div>
				)
			}
		}
	}
}

  return (
    <div className='popup-box' >
      <div className='box' >
        <button className="close-icon" onClick={() => { ooMagen(null) }}>&#x2716;</button>
				<img className="boxmg" src={mouseE}
					alt="magen"
					onMouseEnter={handleMEnter}
					onMouseOut={handleMOut}
        />
				<ModalMagen />
      </div>
    </div>
    // <div className="magenbg">
    //   <button className="buttonmagen" onClick={()=>{ooMagen(null)}}>
    //     &#x2716;</button>
    //   <img src="imgutils/magen2.png" alt="magen" />
    //   <img className="name" src={getName(pos)} alt="magen" />
    // </div>
  )
}

export default Magen
