import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import ImageFeatuers from '../../../imgShopping/ImageFeatuers.png';

const Seaction5 = () => {
	return (
		<Jumbotron>
			<Container>
				<section className="MULTIPLE__LISTS">
					<div data-aos="fade-right" className="MULTIPLE__LISTS__Text">
						<h2>SMART SUGGESTIONS </h2>
						<p>An easier and faster way to create your shopping list.</p>

						<ul>
							<li>^ Start typing and tap on a suggested item</li>
							<li>^ Learns your shopping habits over time</li>
							<li>^ Makes personalized suggestions</li>
						</ul>
					</div>
					<div data-aos-delay="300" data-aos="fade-up" className="MULTIPLE__LISTS__Image">
						<img src={ImageFeatuers} alt={ImageFeatuers} />
					</div>
				</section>
			</Container>
		</Jumbotron>
	);
};

export default Seaction5;
