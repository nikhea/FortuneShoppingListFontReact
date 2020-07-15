import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { addItem } from '../../actions/ItemsActions';

const ItemForm = (props) => {
	const dispatch = useDispatch();
	const [ name, setName ] = useState('');
	const [ price, setPrice ] = useState('');
	const [ itemImage, setitemImage ] = useState(null);
	const [ err, setErr ] = useState('');
	const _id = props.match.params._id;
	// props.location.state.C
	const handleSubmit = (e) => {
		e.preventDefault();
		const addItems = {
			name,
			price,
			itemImage
		};
		if (!name || !price || !itemImage) {
			setErr(
				<Alert variant="warning" style={AlertStyles}>
					Please Enter All Fields
				</Alert>
			);
		} else {
			dispatch(addItem(addItems, _id))
				.then(() => {
					props.history.push(`/catagoriesList/${_id}`);
				})
				.catch(() => {
					alert('NO');
				});
		}
	};

	return (
		<Container style={Containerstyle}>
			<Alert.Heading>{err}</Alert.Heading>
			<h1 className="text-center">ADD AN ITEM TO  {props.location.state.C.toUpperCase()}</h1>
			<Form onSubmit={handleSubmit} style={Formstyle}>
				<Form.Group>
					<Form.Label>Item</Form.Label>
					<Form.Control
						multiple
						name={name}
						id={name}
						onChange={(e) => setName(e.target.value)}
						// required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Price</Form.Label>
					<Form.Control
						multiple
						name={price}
						id={price}
						onChange={(e) => setPrice(e.target.value)}
						// required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>image</Form.Label>
					<Form.Control
						name={itemImage}
						id={itemImage}
						type="file"
						multiple
						onChange={(e) => setitemImage(e.target.files[0])}
						// required
					/>
					<span>
						<small className="text-secondary font-italic">max size: 5mb</small>
					</span>
				</Form.Group>

				<Button type="submit" className="btn btn-secondary mr-3">
					Add Item{' '}
				</Button>
				<Link to={`/catagoriesList/${_id}`}>
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
	justifyContent: 'center',
	flexDirection: 'column',
	height: '100vh'
};
const Formstyle = {
	border: '0.5px solid #333',
	margin: '2em',
	padding: '2em'
};
const AlertStyles = {
	textAlign: 'center',
	marginTop: '2em',
	width: '100%'
};

export default withRouter(ItemForm);
