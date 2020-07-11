import React from 'react';

const ItemItems = ({ item}) => {
	console.log(item);
	const { name, price, itemImage } = item;

	return (
		<div>
			<h1>Name: {name}</h1>
			<p>Price: {price}</p>
			{itemImage}
			<img src={itemImage} alt={name} />
		</div>
	);
};

export default ItemItems;
