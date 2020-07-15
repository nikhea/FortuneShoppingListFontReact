import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Routes from '../../Routes/Routes';
import { getONECATEGORIES, removeCATEGORIE } from '../../actions/CategoriesActions';
import Spinner from '../../utils/Spinner';
import ItemsList from '../Items/ItemsList';
import TotalPrice from '../Items/totalPrice';
class SingleCategories extends Component {
	static CategoriesContext = {
		router: PropTypes.object
	};

	componentDidMount() {
		this.props.getONECATEGORIES(this.state.id);
		this.props.categories.isLoading = false;
	}
	state = {
		id: this.props.match.params._id
	};
	removeCategorie(_id) {
		this.props
			.removeCATEGORIE(_id)
			.then(() => {
				this.props.history.push(Routes.CategoriesList);
			})
			.catch(() => {
				alert('Not Removed');
			});
	}
	render() {
		const { categories: { categorie: { Categories } } } = this.props;
		if (typeof Categories == 'undefined') {
			return <Spinner />;
		} else {
			return (
				<div>
					<TotalPrice items={Categories.items} />
					<Link to={Routes.CategoriesList}>Go Back</Link>
					<button
						disable="true"
						onClick={() => {
							this.removeCategorie(Categories._id);
						}}
					>
						Remove
					</button>
					<h2>
						ShoppingList Items for <span> {Categories.name}</span>
					</h2>
					<h6>{Categories.description ? Categories.description : <p>No description pls Add</p>}</h6>
					<ItemsList Cname={Categories.name} Cid={Categories._id} items={Categories.items} />
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.categorieReducer
	};
};

export default withRouter(connect(mapStateToProps, { getONECATEGORIES, removeCATEGORIE })(SingleCategories));
