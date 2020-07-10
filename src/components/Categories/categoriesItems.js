import React from 'react';
import ItemsList from '../Items/itemsList';

import { Link } from 'react-router-dom';
import SingleCategories from './SingleCategories';

const categoriesItems = ({ categorie }) => {
	const { name, description, _id, items, date, resquest: { url } } = categorie;
	return (
		<div>
			<h1>{name}</h1>
			<p>{description}</p>
			<Link to={`/catagoriesList/${_id}`}>Go</Link>
		</div>
	);
};

export default categoriesItems;
