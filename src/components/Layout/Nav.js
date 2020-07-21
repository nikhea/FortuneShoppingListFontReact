import React from 'react';
import {Link} from 'react-router-dom'
import { FaShoppingCart, FaShopify } from 'react-icons/fa';
export const Nav = () => {
	return (
		<div className='Nav container'>
			{/* <FaShopify /> */}
            <Link to='/'>
            <FaShoppingCart />
            </Link>
		</div>
	);
};
