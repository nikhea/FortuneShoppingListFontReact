import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';
import {Background} from '../Layout/Background'
import { addCATEGORIE } from '../../actions/CategoriesActions';

const AddCATEGORIE = (props) => {
	const dispatch = useDispatch();
	const [ name, setName ] = useState('');
	const [ description, setDiscription ] = useState('');
	const [ err, setErr ] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		const addCategorie = {
			name,
			description
		};

		if (!name || !description) {
			setErr(
				<Alert variant="warning" style={AlertStyles}>
					Please Enter All Fields
				</Alert>
			);
		} else {
			dispatch(addCATEGORIE(addCategorie))
				.then((e) => {
					props.history.push(Routes.CategoriesList);
					setName('');
					setDiscription('');
				})
				.catch(() => {
					alert('NO');
				});
		}
	};

	return (
		<Background>
			<Container style={Containerstyle}>
				<Alert.Heading>{err}</Alert.Heading>
				<h1 className="text-center" data-aos="fade-left" data-aos-delay="100">CREATE A NEW CATEGORIE</h1>
				<Form data-aos="fade-right" data-aos-delay="200" onSubmit={handleSubmit} style={Formstyle}>
					<Form.Group>
						<Form.Label>title</Form.Label>
						<Form.Control
							className="input"
							name={name}
							id={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group >
						<Form.Label>description</Form.Label>
						<Input
							className="input"
							type="textarea"
							name={description}
							id={description}
							onChange={(e) => setDiscription(e.target.value)}
							required
						/>
					</Form.Group>
					<Button type="submit" className="btn btn-secondary mr-3">
						Add Categories
					</Button>
					<Link to={Routes.CategoriesList}>
						<Button type="submit" className="btn btn-primary">
							Cancle
						</Button>
					</Link>
				</Form>
			</Container>
		</Background>
	);
};
const Containerstyle = {
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	height: '100vh',
	color: '#fff' 
};
const Formstyle = {
	border: '0.5px solid #fff',
	margin: '2em',
	padding: '2em',
	color:'#fff'
};
const AlertStyles = {
	textAlign: 'center',
	marginTop: '2em',
	width: '100%'
};
export default AddCATEGORIE;
