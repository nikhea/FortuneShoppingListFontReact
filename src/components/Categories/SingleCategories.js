import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';
import PropTypes from 'prop-types';
import { getONECATEGORIES, removeCATEGORIE } from '../../actions/CategoriesActions';
import { connect } from 'react-redux';
import Spinner from '../../utils/Spinner';
// import ItemsList from '../Items/itemsList';
import ItemsTest from '../Items/ItemsTest';
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
		console.log(_id);
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
		const { categories: { categorie: { Categories }, isLoading } } = this.props;

		if (typeof Categories == 'undefined') {
			// if (isLoading) {
			return <Spinner />;
			// }
		} else {
			return (
				<div>
					<Link to={Routes.CategoriesList}>Go Back</Link>
					<button
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
					{/* <ItemsList /> */}
					<ItemsTest Cid={Categories._id} items={Categories.items}/>
				</div>
			);
		}
	}

	// return (
	// 	<div>
	// 		{isLoading ? (
	//             <div>
	//                 {Categories.name}
	//         </div>
	// 		) : (
	// 		<Spinner/>
	// 		)}
	// 	</div>
	// );
}

const mapStateToProps = (state) => {
	return {
		categories: state.categorieReducer
	};
};

export default withRouter(connect(mapStateToProps, { getONECATEGORIES, removeCATEGORIE })(SingleCategories));
