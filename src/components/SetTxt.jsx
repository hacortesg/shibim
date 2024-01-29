import React from "react";

function SetTxt({nombre, mision}){
	let msgA =`Signo ${nombre.sign}. Según sefer Yetsira autor Avraham Avinu.`;
	let msgB = "Mes correspondiente.";
	let msgBB = " Según el Zohar autor Rashbi.";
	let msgC = `La Misión en su vida está en función del nombre " `;
	let msgD = "En general consiste en que: ";
	let msgE = "Y en detalle en que: ";
	let msgF = "David haMelej lo oculta en el salmo, el ";
	let msgH = "La hora para meditar el nombre es desde: ";
	let msgI = " hasta ";
	let msgJ = " lapso sugerido. Depende del alba de su ciudad https://www.myzmanim.com/";
	if(nombre.sugerido === false){
		msgJ =" No se sugiere meditar desde las 6pm hasta las 12 medianoche";
	}


if(nombre.id){

	return (
		<div>
			<article
				className="msgtext"
				placeholder="Ser feliz"
// 				rows="7"
// 				cols="20"
				>
				<ul>
					<li>
						{msgA}
					</li>
					<li>
						{msgB}
						<em>{nombre.jodesh}</em>
						{msgBB}
					</li>
					<li>
						{msgC}
						<strong>{nombre.id}. {mision.nombre}</strong> "
					</li>
					<li>
						{msgD}
						<em>{mision.funcion}</em>
					</li>
					<li>
						{msgE}
						<em>{mision.ver}</em>
					</li>
					<li>
						{msgF}
						<strong>{mision.tehilim}</strong>
					</li>
					<li>
						{msgH}
						<strong>{nombre.hora}:{nombre.minutoi}{nombre.amI}</strong>{msgI}
						<strong>{nombre.horaf}:{nombre.minutof}{nombre.amF}</strong>
						{msgJ}
					</li>
				</ul>
			</article>
		</div>
	);
}else{
	return(
		<div>
			<article
				className="msgtext"
				placeholder="Ser Feliz"
			>. <strong>¡Ser Feliz!</strong>
			</article>
		</div>
	);
}

}
export default SetTxt;
