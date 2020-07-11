import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Routes from './Routes';
import Categories from '../components/Categories';
import SingleCategories from '../components/Categories/SingleCategories';
import AddCATEGORIE from '../components/Categories/addCategories';
import Home from '../components/Home/Home';
import AddItem from '../components/Items/AddItems';
class Router extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path={Routes.Home} component={Home} />
					<Route exact path={Routes.CategoriesList} component={Categories} />
					<Route exact path={Routes.CategoriesForm} component={AddCATEGORIE} />
					<Route exact path={Routes.CategoriesItems} component={SingleCategories} />
					<Route exact path={Routes.ItemsForm} component={AddItem} />
				</Switch>
			</div>
		);
	}
}

export default Router;
