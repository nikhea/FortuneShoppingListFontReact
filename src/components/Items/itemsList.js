import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../../actions/ItemsActions';
import Spinner from '../../utils/Spinner';
import ItemsItem from './ItemItems';

class ItemsList extends Component {
	state = {
		id: this.props.categorie._id
	};

	componentDidMount() {
		setTimeout(() => {
			this.props.getItem(this.state.id);
			this.props.items.isLoading = false;
		}, 10);
	}

	render() {
		const { items: { items }, isLoading } = this.props.items;
		console.log(items);
		if (typeof items == 'undefined') {
			if (isLoading) {
				return <Spinner />;
			}
		} else {
			return items.map((item) => <ItemsItem key={item._id} item={item} title="Items" />);
		}

		return <div />;
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.ItemReducer,
		categorie: state.categorieReducer.categorie.Categories
	};
};
export default connect(mapStateToProps, { getItem })(ItemsList);
