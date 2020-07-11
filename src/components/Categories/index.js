import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';
import CategoriesList from './categoriesList';

const index = () => {
	return (
		<div>
			<Link to={Routes.CategoriesForm}>Create A New Categories</Link>
			<CategoriesList />
		</div>
	);
};

export default index;
