import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCATEGORIES, removeCATEGORIE } from '../../actions/CategoriesActions';
import CategoriesItems from './categoriesItems';
import Spinner from '../../utils/Spinner';

class categoriesList extends Component {
	state = {};
	componentDidMount() {
		this.props.getCATEGORIES();
		this.props.categories.isLoading = false;
	}

	render() {
		const { categories: { categories: { categories }, isLoading } } = this.props;
		// console.log(categories, isLoading);
		if (typeof categories == 'undefined') {
		   return <Spinner/>
		}
		else {
		  return	categories.map((categorie) => <CategoriesItems key={categorie._id} categorie={categorie} />)
		}
		return (
			<div>
				{isLoading ? (
					categories.map((categorie) => <CategoriesItems key={categorie._id} categorie={categorie} />)
				) : (
					<Spinner />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.categorieReducer
	};
};
export default connect(mapStateToProps, { getCATEGORIES, removeCATEGORIE })(categoriesList);
