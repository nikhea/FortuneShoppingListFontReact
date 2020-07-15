import React from 'react';

const totalPrice = ({ items }) => {
	const p = items.map((item) => item.price);
	const total = p.reduce((acc, item) => (acc += item), 0).toFixed(2);
	const income = p.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
	const expense = (p.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

	return (
		<div>
			<h1> totalPrice ${total}</h1>
			<p>income ${income}</p>
			<p>expense ${expense}</p>
		</div>
	);
};

export default totalPrice;
