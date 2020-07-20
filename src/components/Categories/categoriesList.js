import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col} from 'reactstrap'
import { getCATEGORIES, removeCATEGORIE } from '../../actions/CategoriesActions';
import CategoriesItems from './categoriesItems';
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
					<Row >
						<Col lg='3'  xm='1'>
						{ categories.map((categorie) => <CategoriesItems key={categorie._id} categorie={categorie} />) }
						</Col>
					</Row>
				</Container>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.categorieReducer
	};
};
export default connect(mapStateToProps, { getCATEGORIES, removeCATEGORIE })(categoriesList);
