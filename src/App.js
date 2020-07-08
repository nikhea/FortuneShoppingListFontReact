import React, { Component } from 'react';
// import 'semantic-ui-css/semantic.min.css';
import CategoriesList from './components/Categories/categoriesList'
class App extends Component {
	render() {
		return (
			<div className="ui container">
			   <CategoriesList/>
			</div>
		);
	}
}

export default App;
