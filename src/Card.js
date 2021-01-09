import React from 'react';
const Card=(props)=>{
	return (

		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${props.info.id}?size=200x200`} />
			<div>
				<h2>{props.info.name}</h2>
				<p>{`email id:${props.info.email}`}</p>
			</div>
		</div>
	);
}
export default Card; 