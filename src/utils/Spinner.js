import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Spinner, Container } from 'react-bootstrap';
import './Spinner.scss'
const Spinners = (props) => {

	return (
		<div style={divStyle} className='background center'>
			<Container>
			{/* <span className='spinner rotation'>Loading...</span> <br/> */}
				<Spinner style={SpinnerStyle} animation="border" role="status" /> 
				{/* <FaSpinner className=' rotation'/> */}
				 {/* <Spinner animation="grow" size="sm" />
				<Spinner animation="grow" />
				<Spinner animation="grow" size="sm" />
				<Spinner animation="grow" /> */}
				
				{/* <Spinner animation="grow" size="sm" />
				<Spinner animation="grow" />
				<Spinner animation="grow" size="sm" />
				<Spinner animation="grow" /> */}
			</Container>
		</div>
	);

};
const divStyle = {
	display: 'flex'
};

const SpinnerStyle = {
	transform: 'skew(03)'
};
const background = {
	height: '20vh'
}
export default Spinners;
