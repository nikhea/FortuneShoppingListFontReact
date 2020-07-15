import React from 'react';
import { Link } from 'react-router-dom';
import { DateFormatter } from '../../utils/dateFormatter';

const categoriesItems = ({ categorie }) => {
	const { name, description, _id, date } = categorie;
	return (
		<div data-aso="fade-up">
			<Link
				to={{
					pathname: `/catagoriesList/${_id}`,
					state: { categorie }
				}}
			>
				View categorie
			</Link>

			<div>
				<h1>{name}</h1>
				<p>{description ? description : 'no description '}</p>
				<p>
					Created On: {DateFormatter.Momentdate(date)} <span>at {DateFormatter.momentTime(date)} </span>
				</p>
			</div>
		</div>
	);
};

export default categoriesItems;
