import React from 'react';

import { Link } from 'react-router-dom';

const categoriesItems = ({ categorie }) => {
	const { name, description, _id, date } = categorie;
	return (
		<div data-aso='fade-up'>
			{/* <Link to={`/catagoriesList/${_id}`}>View Items</Link> */}
			<Link
				to={{
					pathname: `/catagoriesList/${_id}`,
					state: { categorie }
				}}
			>
				<div>
					<h1>{name}</h1>
					<p>{description}</p>
					<p>Created_At: {date}</p>
				</div>
			</Link>
		</div>
	);
};

export default categoriesItems;
