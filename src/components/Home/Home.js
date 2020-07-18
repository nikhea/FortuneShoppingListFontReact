import React from 'react';
import './Home.scss';

import { Container } from 'react-bootstrap';
import { Fragment } from 'react';
import Header from './Seaction/Header';
import Seaction1 from './Seaction/Seaction1';
import Seaction2 from './Seaction/Seaction2';
import Seaction3 from './Seaction/Seaction3';
import Seaction4 from './Seaction/Seaction4';
import Seaction5 from './Seaction/Seaction5';
import Seaction6 from './Seaction/Seaction6';
import Seaction7 from './Seaction/Seaction7'
import Seaction8 from './Seaction/Seaction8'
import Footer from '../Layout/Footer'
const Home = () => {
	return (
		<Fragment>
			<Header />
			<Container>
				<Seaction1 />
				<Seaction2 />
				<Seaction3 />
			</Container>
			<Seaction4 />

			<Seaction5 />
			<Seaction6 />
			<Seaction7/>
			<Seaction8/>
			<Footer/>
		</Fragment>
	);
};

export default Home;
