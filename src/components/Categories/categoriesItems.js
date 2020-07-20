import React from 'react';
import { Link } from 'react-router-dom';
import { DateFormatter } from '../../utils/dateFormatter';
import { Row, Col, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

const categoriesItems = ({ categorie }) => {
	const { name, description, _id, date } = categorie;
	return (
		// <Row>
		// {/* <Col> */}
		<Card className=" Categorie__Main">
			<CardBody>
				<CardTitle className="Categorie__Main--title">{name}</CardTitle>
				<CardSubtitle className="Categorie__Main--des">
					{description ? description : 'no description '}
				</CardSubtitle>
				<p className="Categorie__Main--time">
					{/* Created On: */}
					{DateFormatter.Momentdate(date)}
					{/* <span>at {DateFormatter.momentTime(date)} </span> */}
				</p>

				<Link
					className="Categorie__Main--a btns"
					to={{
						pathname: `/catagoriesList/${_id}`,
						state: { categorie }
					}}
				>
					View
				</Link>
			</CardBody>
		</Card>
		// </Col>
		// </Row>
	);
};

export default categoriesItems;
