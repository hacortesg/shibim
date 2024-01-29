import React from "react"
import {jodesh as list} from "../data/jodesh";
import {seventyTwo as shore} from "../data/seventytwo";

export function getImgMagen(id) {
  return (
    "imgland/nombre" + id + ".png"
  );
}

export function getOtiot(id, origin){
	let otiot = {f:"", m:"", i:""};
	let hebreo = shore[id-1].nombre;
	let path = "otiot/";

	if(origin === "Rashbi"){
	// selecciona las letras de los archivos
		otiot.f = path + hebreo.slice(-1) + ".png";
		otiot.m = path + hebreo.slice(1,2) + ".png";
		otiot.i = path + hebreo.slice(0,1) + ".png";
	}

	if(origin === "Ramjal"){
		hebreo = shore[id-1].ramjal;
		otiot.f = path + hebreo.slice(-1) + ".png";
		otiot.m = path + hebreo.slice(1,2) + ".png";
		otiot.i = path + hebreo.slice(0,1) + ".png";
	}
	path ="otiotmeta/";
	if(origin === "Meta"){
		hebreo = shore[id-1].nombre;
		otiot.f = path + hebreo.slice(-1) + ".png";
		otiot.m = path + hebreo.slice(1,2) + ".png";
		otiot.i = path + hebreo.slice(0,1) + ".png";
	}

	return(
		otiot
	);
}

export function getLightOtiot(id, origin){
	let lite = {f:"", m:"", i:""};
	let hebreo = shore[id-1].nombre;
	let path = "otiotlit/";
	if(origin === "Rashbi"){
		lite.f = path + hebreo.slice(-1) + ".png";
		lite.m = path + hebreo.slice(1,2) + ".png";
		lite.i = path + hebreo.slice(0,1) + ".png";
	}
	if(origin === "Meta"){
		path = "otiotmeta/";
		lite.f = path + hebreo.slice(-1) + ".png";
		lite.m = path + hebreo.slice(1,2) + ".png";
		lite.i = path + hebreo.slice(0,1) + ".png";
	}
	if(origin === "Ramjal"){
	  hebreo = shore[id-1].ramjal;
		path = "otiotlit/";
		lite.f = path + hebreo.slice(-1) + ".png";
		lite.m = path + hebreo.slice(1,2) + ".png";
		lite.i = path + hebreo.slice(0,1) + ".png";
	}

	return(
		lite
	);
}

export function isEmbo(year) {
  let flag = false;
  let rest = year % 19;
  if (rest === 0 || rest === 3 || rest === 6 || rest === 8 || rest === 11 || rest === 14 || rest === 17) {
    flag = true;
  }
  return (
    flag
  );
}

export function getMision(month, day){
  let via=true;
  let yom, nombre, jodesh, sign;
  let limite;

  let indice = list.map((it)=>{
    if(it.jodeshi === +month && +day >= it.yomi){
      nombre = it.idNombre;
      yom = it.yomi;
			jodesh = it.jodesh;
			sign = it.sign;
    }
    if (it.jodeshf === +month && +day <= it.yomf){
        nombre = it.idNombre;
        yom = it.yomf;
				limite = it.diffYamim;
				jodesh = it.jodesh;
				sign = it.sign;
				via = false;
    }
  });

// 			console.log(`MesN ${month}  DiaN ${day}  Mision ${via}`)
	if(via){
		let i = 0;
		yom--;
		do{
			yom+=5;
			if(day > yom){
				i++;
			}else
			{
				break;
			}
		}while(i<5 )
		nombre+=i;
	}else{
		let i = 5;
		do{
			yom-=5;
			if(day <= yom ){
				i--;
			}else{
				break;
			}
		}while(i>0)
		nombre+=i;
	}

	let hora = Math.floor(nombre / 3);
	let minutof = (nombre % 3) * 20;
	let minutoi = minutof - 20;
	let sugerido = true;
	let flagAmI = true;
	let flagAmF = true;
	let amI = "am";
	let amF = "am";

	if(hora >=12 && hora <= 18 ){
		sugerido = false;
	}

	hora += 6;
	let horaf = hora;

	if(minutof === 0){
		minutoi = 40;
		hora--;
		minutof = "00".toString();
	}
	if(minutoi === 0){
		minutoi ="00".toString();
	}

	if(hora >= 12 && hora <= 23){
		flagAmI = false;
	}
	if(hora >= 24){
		hora -= 24;
	}
	if(flagAmI === false){
		amI = "pm";
	}

	if(horaf >= 12 && horaf <= 23){
		flagAmF = false;
	}
	if(horaf >= 24){
		horaf -= 24;
	}
	if(flagAmF === false){
		amF = "pm";
	}


	const dato = {
		id: nombre,
		jodesh: jodesh,
		sign: sign,
		hora: hora,
		horaf: horaf,
		minutoi: minutoi,
		minutof: minutof,
		amI: amI,
		amF : amF,
		sugerido: sugerido
	};

	return (
		dato
	);
}

export function getName(pos){
	const item = shore[pos];
	return (
		item
	);
}

export function getYyMmDd(){
	const now = new Date();
	let mes = now.getMonth();
	mes++;
	if(mes < 10){
		mes = `0${mes}`.toString();
	}
	let formatDate = `${now.getFullYear()}-${mes}-${now.getDate()}`;

	return(formatDate);
// 		console.log(formatDate);
}

export function getWH(){
	const wSize =useRef([window.innerWidth, window.innerHeight]);
	return (wSize.current[0]);
}
