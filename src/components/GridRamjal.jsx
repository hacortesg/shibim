import React from "react";

import {getGridN} from "./utils";

function GridRamjal(){

	const path ="otiot/";
	const author = "Ramjal";

	function RendRm(){
		return(
			<div className="gridr">
				{getGridN(path, author)}
			</div>
		);
	}

	return(
		<>
			<RendRm />
		</>
	);
}

export default GridRamjal;
