import React from 'react';
import { useDispatch} from 'react-redux'
// import { connect } from 'react-redux';
import { removeItem } from '../../actions/ItemsActions';
const ItemItems = ({ item,  cid}) => {
	const dispatch = useDispatch()
	const { name, price, itemImage, _id } = item;
	let sliceImage = itemImage.slice(8);
	let renderImage = ` http://localhost:3000/${sliceImage}`;



	const removeItems = (Cid,Iid) => {
		
		dispatch(removeItem(Cid,Iid))
		console.log('yes')
	}
	return (
		<div>
			<button onClick={() => { removeItems(cid,_id)}}>removeItem</button>
			<h1>Name: {name}</h1>
			<p>Price: {price}</p>
			{/* {itemImage} */}
			{/* {z} */}
			<img src={renderImage} alt={name} />

			{/* <img src=" http://localhost:3000/2020-07-07T20:14:45.663ZblockChain.png" alt={name}/> */}
		</div>
	);
};

export default (ItemItems);
// connect(null, { removeItem })