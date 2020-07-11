import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { addItem } from '../../actions/ItemsActions';
import * as Routes from '../../Routes/Routes';
const ArticleForm = (props) => {
	const dispatch = useDispatch();

	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ description, setDiscription ] = useState('');
	const [ image, setImage ] = useState('');
	const [ err, setErr ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const addItems = {
			title,
			author,
			description,
			image
		};

		if (!title || !author || !description || !image) {
			setErr(
				<Alert variant="warning" style={{ textAlign: 'center', marginTop: '2em', width: '100%' }}>
					Please Enter All Fields
				</Alert>
			);
		} else {
			dispatch(addItem(addItems))
				.then(() => {
					props.history.push(Routes.CategoriesList);
				})
				.catch(() => {
					alert('NO');
				});
		}
	};
	const Formstyle = {
		border: '0.5px solid #333',
		margin: '2em',
		padding: '2em'
	};

	return (
		<Container>
			<Alert.Heading>{err}</Alert.Heading>

			<Form onSubmit={handleSubmit} style={Formstyle}>
				<Form.Group>
					<Form.Label>title</Form.Label>
					<Form.Control
						name={title}
						id={title}
						onChange={(e) => setTitle(e.target.value)}
						// required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>author</Form.Label>
					<Form.Control
						name={author}
						id={author}
						onChange={(e) => setAuthor(e.target.value)}
						// required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>image</Form.Label>
					<Form.Control
						name={image}
						id={image}
						onChange={(e) => setImage(e.target.value)}
						// required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>description</Form.Label>
					<Input
						type="textarea"
						name={description}
						id={description}
						onChange={(e) => setDiscription(e.target.value)}
						// required
					/>
				</Form.Group>
				<Button type="submit" className="btn btn-secondary mr-3">
					Add New Article{' '}
				</Button>
				<Link to="/articlelist">
					<Button type="submit" className="btn btn-primary">
						Cancle{' '}
					</Button>
				</Link>
			</Form>
		</Container>
	);
};

export default ArticleForm;
