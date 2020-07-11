import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';
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
				<Alert variant="warning" style={{ textAlign: 'center', marginTop: '2em', width: '100%' }}>
					Please Enter All Fields
				</Alert>
			);
		} else {
			dispatch(addCATEGORIE(addCategorie), () => {
				props.history.push('/categoriesList');

				setName('');

				setDiscription('');
			});
		}
	};

	return (
		<Container style={Containerstyle}>
			<Alert.Heading>{err}</Alert.Heading>

			<Form onSubmit={handleSubmit} style={Formstyle}>
				<Form.Group>
					<Form.Label>title</Form.Label>
					<Form.Control name={name} id={name} onChange={(e) => setName(e.target.value)} required />
				</Form.Group>

				<Form.Group>
					<Form.Label>description</Form.Label>
					<Input
						type="textarea"
						name={description}
						id={description}
						onChange={(e) => setDiscription(e.target.value)}
						required
					/>
				</Form.Group>
				<Button type="submit" className="btn btn-secondary mr-3">
					Add Categories{' '}
				</Button>
				<Link to={Routes.CategoriesList}>
					<Button type="submit" className="btn btn-primary">
						Cancle{' '}
					</Button>
				</Link>
			</Form>
		</Container>
	);
};
const Containerstyle = {
	display: 'flex',
	// alignItems: 'center',
	// justifyItems: 'center',
	justifyContent: 'center',
	// textAlign: 'center',
	flexDirection: 'column',
	height: '100vh'
};
const Formstyle = {
	border: '0.5px solid #333',
	margin: '2em',
	padding: '2em'
};
export default AddCATEGORIE;
