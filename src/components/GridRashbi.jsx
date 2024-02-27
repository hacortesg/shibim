import React from "react";
import {getGridN} from "./utils";

function GridRashbi(){

	const path ="otiot/";
	const author = "Rashbi";

	function RendRsh(){
		return(
			<div className="gridr">
				{getGridN(path, author)}
			</div>
		);
	}

	return(
		<>
			<RendRsh />
		</>
	);
}

export default GridRashbi;
