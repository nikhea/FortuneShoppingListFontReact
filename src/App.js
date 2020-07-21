import React, { Component } from 'react';
import './Scss/App.scss';
// import './App.scss'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Routes from './Routes/Index';


class App extends Component {
	componentDidMount() {
		Aos.init({
			duration: 2000
		});
	}
	render() {
		return (
			<div>
				<Routes />
			</div>
		);
	}
}

export default App;
