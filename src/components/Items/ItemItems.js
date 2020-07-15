import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../actions/ItemsActions';
import { ImageUrl } from '../../actions/Url';
import { DateFormatter } from '../../utils/dateFormatter';
const ItemItems = ({ item, cid }) => {
	const dispatch = useDispatch();
	const { name, price, itemImage, _id, date } = item;
	const sign = price < 0 ? '-' : '+';
	let sliceImage = itemImage.slice(8);

	const removeItems = (Cid, Iid) => {
		dispatch(removeItem(Cid, Iid))
			.then((result) => {
				console.log('yes', result);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<button
				disable="true"
				onClick={() => {
					removeItems(cid, _id);
				}}
			>
				removeItem
			</button>
			<h1>Name: {name}</h1>
			<p>
				Price: {sign}${Math.abs(price)}
			</p>
			<p>
				Created On: {DateFormatter.Momentdate(date)} <span>at {DateFormatter.momentTime(date)} </span>
			</p>
			<img src={`${ImageUrl}/${sliceImage}`} alt={name} />
		</div>
	);
};

export default ItemItems;
