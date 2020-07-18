import React from 'react';
import { Container } from 'react-bootstrap';
import ImageFeatuers from '../../../imgShopping/ImageFeatuers.png';

const Seaction5 = () => {
	return (
		<Container>
			<section className="MULTIPLE__LISTS ">
				<div data-aos-delay="300" data-aos="fade-up" className="MULTIPLE__LISTS__Image">
					<img src={ImageFeatuers} alt={ImageFeatuers} />
				</div>
				<div  data-aos="fade-left"className="MULTIPLE__LISTS__Text">
					<h2>MULTIPLE LISTS </h2>
					<p>Create separate lists to organize your shopping trips best. </p>

					<ul>
						<li>^ Separate by store</li>
						<li>^ Add as many as you wish</li>
						<li>^ Easy overview on how many items are missing</li>
					</ul>
				</div>
			</section>
		</Container>
	);
};

export default Seaction5;
