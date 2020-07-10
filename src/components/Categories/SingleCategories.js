import React, { Component } from 'react';
import { getONECATEGORIES } from '../../actions/CategoriesActions';
import { connect } from 'react-redux';
import Spinner from '../../utils/Spinner';
import ItemsList from '../Items/itemsList';
class SingleCategories extends Component {
	componentDidMount() {
		this.props.getONECATEGORIES(this.state.id);
		this.props.categories.isLoading = false;
	}
	state = {
		id: this.props.match.params._id
	};

	render() {
		// console.log(this.props.categories)
		// console.log(this.props.categories.isLoading);
		const { categories: { categorie: { Categories }, isLoading } } = this.props;
		// console.log(Categories);
		if (typeof Categories == 'undefined') {
			return <Spinner />;
		} else {
			return (
				<div>
					<h2>
						ShoppingList Items for <span> {Categories.name}</span>
					</h2>
					<h6>{Categories.description ? Categories.description : <p>No description pls Add</p>}</h6>
					<ItemsList />
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

export default connect(mapStateToProps, { getONECATEGORIES })(SingleCategories);
