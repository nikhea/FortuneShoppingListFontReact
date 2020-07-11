import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';
const Home = () => {
	return (
		<div>
			<h1>Welcome</h1>
			<Link to={Routes.CategoriesList}>View Categories</Link>
		</div>
	);
};

export default Home;
