import React from 'react';

const Smurf = ({ smurf, deleteSmurf }) => {
	return (
		<div>
			<span>{smurf.name}</span>
			<button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
		</div>
	);
};

export default Smurf;
