import React from "react";
import {getGridN} from "./utils";


function GridMeta(){

	const path ="otiotmeta/";
	const author = "Rashbi";

	function RendM(){
		return(
			<div className="gridr">
				{getGridN(path, author)}
			</div>
		);
	}

	return(
		<>
			<RendM />
		</>
	);
}

export default GridMeta;
