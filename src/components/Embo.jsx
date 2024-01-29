import React from 'react';
import { useRef, useState, useEffect } from 'react';
import {isEmbo} from './utils';

function Embo(){

	const inputFocus = useRef(null);
	const [dato, setDato] = useState('');
	const [embo, setEmbo] = useState("");
	let year;

	useEffect(() => {
			inputFocus.current.focus();
		// if (inputFocus.current === null){
		// }
// 		return(
// 		);
	}, []);

	function handleSubmit(es){
		es.preventDefault();
		if(dato>0){
			if(isEmbo(dato)){
				setEmbo("Es Embolismal");
			}else{
				setEmbo("No es Embolismal");
			}
		}
		inputFocus.current.focus();
	}

	function handleClick(ec){
		ec.preventDefault();
		inputFocus.current.focus();
	}

	function handleReset(er){
		er.preventDefault();
		setDato('');
		setEmbo("");
		inputFocus.current.focus();
	}

	function handleNumber(es){

		Number.isInteger(+es.target.value) ? setDato(es.target.value) : setDato(es.target.value.slice(0,-1));
	}

	function handleInput(ei){

	}

	function handleKey(ek){

		if(ek.key === 'Enter' && dato > 0) {
			console.log("Enter Key pressed " + dato + "res " + dato % 19);
			if(isEmbo(dato)){
				console.log("Es Embolismal");
				setEmbo("Es Embolismal");
			}else
				console.log("No es Embolismal");
				setEmbo("No es Embolismal");
// 			handleInput(ek);
		}else
		{
// 			setDato('');
			console.log("just Enter key pressed");
		}
	}

	return(
		<div>
			<form  className="formE" onSubmit={handleSubmit}>
				<label className="labelE" >Año: </label>
				<input
					ref={inputFocus}
					className="dato"
					type="text"
// 					type="text" pattern="^[0-9\b]+$"
// 					type="number" min="1" max="7000" step="1" maxLength = "4"
					placeholder="5783"
					onChange={handleNumber}
					onKeyDown={handleKey}
					value={dato}
					/>
				<label className="labelE">Tipo: </label>
				<input className="dato" readOnly={true}
					onClick={handleClick}
					type="text"
					disable="true"
					placeholder="tipo de año.."
					value={embo}
					/>
				<div className="buttoncontainer" >
					<input
					className="buttonE"
					onClick={handleSubmit}
					type="submit"
					value="Definir"
					/>
					<input
					className="buttonE"
					onClick={handleReset}
					type="submit" value="Limpiar"
					/>
				</div>
			</form>
		</div>
	);

}

export default Embo;
