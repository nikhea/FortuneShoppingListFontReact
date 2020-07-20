import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { getCATEGORIES, removeCATEGORIE } from '../../actions/CategoriesActions';
import CategoriesItems from './categoriesItems';
import { CategoriesJumbotron } from './CategoriesJumbotron';
import Spinner from '../../utils/Spinner';

class categoriesList extends Component {
	state = {};
	componentDidMount() {
		// setTimeout(() => {
		this.props.getCATEGORIES();
		this.props.categories.isLoading = false;
		// }, 3000);
	}

	render() {
		const { categories: { categories: { categories } } } = this.props;
		if (typeof categories == 'undefined') {
			return <Spinner />;
		} else {
			return (
				<Container>
					<CategoriesJumbotron />

					<div className="Categorie">
						{categories.map((categorie) => <CategoriesItems key={categorie._id} categorie={categorie} />)}
					</div>
				</Container>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.categorieReducer
	};
};
export default connect(mapStateToProps, { getCATEGORIES, removeCATEGORIE })(categoriesList);
