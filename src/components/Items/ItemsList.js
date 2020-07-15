import React, { Component } from 'react';
import ItemsItem from './ItemItems';
import { Link } from 'react-router-dom';
// import * as Routes from '../../Routes/Routes';
class ItemsList extends Component {
	state = {
		CID: this.props.Cid,
		Cname: this.props.Cname
	};

	render() {
		return (
			<div>
				<Link
					to={{
                        pathname: `/catagoriesList/${this.state.CID}/items/add`,
                        state:{C: this.state.Cname}
					}}
				>
					ADD Item
				</Link>
				{this.props.items.length <= 0 ? (
					'No Items Pls for this Categorie please Add'
				) : (
					this.props.items.map((item) => <ItemsItem cid={this.state.CID} key={item._id} item={item} />)
				)}
			</div>
		);
	}
}

export default ItemsList;
