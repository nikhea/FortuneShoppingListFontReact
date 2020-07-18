import React from 'react';
import * as Routes from '../../../Routes/Routes';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<header className="Header">
			<div className="container Header__Text">
				<h1>SHOPPING LIST</h1>
				<p> The easiest shopping list app ever made</p>
				<Link className="btns Header__Text--Link" to={Routes.CategoriesList}>
					{' '}
					ShoppingList
				</Link>
			</div>
		</header>
	);
};

export default Header;
