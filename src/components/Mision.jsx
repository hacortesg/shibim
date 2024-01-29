import React from "react";
import {useState, useEffect} from "react";
import {getMision, getName, getYyMmDd} from "./utils";
import SetTxt from "./SetTxt";

function Mision(){

	const [date, setDate] = useState("");
	const [text, setText] = useState("");
	const [nombre, setNombre] = useState({});
	const [mision, setMision] = useState({});

	useEffect(()=>{
		setDate(getYyMmDd);
	}, []);

	function handleDate(ed){
		ed.preventDefault();
		setDate(ed.target.value);
	}

	function handleSubmit(es){
		es.preventDefault();
		let month = date.slice(5,7);
		let day = date.slice(-2);
		let nombrel = getMision(month, day);
		setNombre (nombrel);
		setMision (getName(nombrel.id - 1));

		const msg = <em> + "enfasis" + </em>;
		setText(msg);
	}

	function handleReset(er){
		er.preventDefault();
		setDate(getYyMmDd());
		setNombre({});
		setMision({});

	}

	return (
		<div>
			<form className="formE">
				<label className="labelE">Fecha de nacimiento:</label>
				<input className="dato"
				type="Date"
				onChange={handleDate}
				value={date}
				/>
				<label className="labelE">Mision:</label>
				<SetTxt nombre={nombre} mision={mision} />
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
export default Mision
