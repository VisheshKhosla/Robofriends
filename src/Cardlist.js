import React from 'react';
import Card from './Card.js';

const Cardlist=({robots})=>{
	const CardArray=robots.map((obj,ind)=>{
		return <Card  key={ind} info={obj} />;
	});

	return(
		<div>
			{CardArray}
		</div>
	);
}
export default Cardlist;