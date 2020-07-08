import React from 'react';

const Spinner = (props) => {
	const fun = () => {
		return <h1>Loading</h1>;
	};
	return (
		<div>
			<div>{fun()}</div>
		</div>
	);
};

export default Spinner;
