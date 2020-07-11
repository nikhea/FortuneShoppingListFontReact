import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';
import PropTypes from 'prop-types';
import { getONECATEGORIES } from '../../actions/CategoriesActions';
import { connect } from 'react-redux';
import Spinner from '../../utils/Spinner';
import ItemsList from '../Items/itemsList';
class SingleCategories extends Component {
	static CategoriesContext = {
		router: PropTypes.object
	};

	componentDidMount() {
		this.props.getONECATEGORIES(this.state.id);
		this.props.categories.isLoading = false;
		console.log(this.props.history);
	}
	state = {
		id: this.props.match.params._id
	};
	goBack() {
		this.props.history.push('/');
	}
	render() {
		const { categories: { categorie: { Categories }, isLoading } } = this.props;
		console.log(isLoading);
		if (typeof Categories == 'undefined') {
			// if (isLoading) {
			return <Spinner />;
			// }
		} else {
			return (
				<div>
					<Link to={Routes.CategoriesList}>Go Back</Link>
					{/* <button onClick={this.goBack}>Go Home</button> */}
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

export default withRouter(connect(mapStateToProps, { getONECATEGORIES })(SingleCategories));
