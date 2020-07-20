import React from 'react';
import { Link } from 'react-router-dom';
import { DateFormatter } from '../../utils/dateFormatter';
import {Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

const categoriesItems = ({ categorie }) => {
	const { name, description, _id, date } = categorie;
	return (
		<div style={{display: 'flex'}}>
			<Card body inverse color="warning">
				<CardBody>
					<CardTitle>{name}</CardTitle>
					<CardSubtitle>{description ? description : 'no description '}</CardSubtitle>
					<p>
						Created On: {DateFormatter.Momentdate(date)} <span>at {DateFormatter.momentTime(date)} </span>
					</p>
					<Button color="secondary">
						<Link
							to={{
								pathname: `/catagoriesList/${_id}`,
								state: { categorie }
							}}
						>
							View categorie
						</Link>
					</Button>
				</CardBody>
			</Card>
		</div>
	);
};

export default categoriesItems;
