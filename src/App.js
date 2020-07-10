import React, { Component } from 'react';
// import 'semantic-ui-css/semantic.min.css';
import Categories from './components/Categories';


import { Route, Switch } from 'react-router-dom';
import SingleCategories from './components/Categories/SingleCategories';
import itemsList from './components/Items/itemsList';

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Categories} />
					<Route exact path="/catagoriesList/:_id" component={SingleCategories} />
				</Switch>
			</div>
		);
	}
}

export default App;
