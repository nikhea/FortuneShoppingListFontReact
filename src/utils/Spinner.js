import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Spinner, Container } from 'react-bootstrap';
import './Spinner.scss'
const Spinners = (props) => {
	// const fun = () => {
	return (
		<div style={divStyle}>
			<Container>
				{' '}
				{/* <Spinner style={SpinnerStyle} animation="border" role="status" /> */}
				{/* <Spinner animation="grow" size="sm" />
				<Spinner animation="grow" />
				<Spinner animation="grow" size="sm" />
				<Spinner animation="grow" /> */}
				<span className='spinner'>Loading...</span>
				{/* <Spinner animation="grow" size="sm" />
				<Spinner animation="grow" />
				<Spinner animation="grow" size="sm" />
				<Spinner animation="grow" /> */}
			</Container>
		</div>
	);
	// };
	// return (
	// 	<div>
	// 		<div>{fun()}</div>
	// 	</div>
	// );
};
const divStyle = {
	display: 'flex'
};

const SpinnerStyle = {
	transform: 'skew(03)'
};

export default Spinners;
