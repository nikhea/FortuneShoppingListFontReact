import React from 'react';
import ImageFeatuers from '../../../imgShopping/ImageFeatuers.png';
const Seaction3 = () => {
	return (
		<section id="Features">
			<div id="Features__Heading">
				<h1> AWESOME FEATURES</h1>
				<p> These are the features that make Shopping List for Android so user-friendly.</p>
			</div>
			<div className="Features">
				<div
					data-aos="fade-right"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					className="Features__Item Features__right"
				>
					<div className="Features__Items">
						<h1> ADD ITEMS</h1>
						<p>Start typing the name of an item, suggestions will pop up and help you. </p>
					</div>

					<div className="Features__Items">
						<h1> MARK BOUGHT ITEMS</h1>
						<p>Keep a simple overview of what you have already bought or put in the cart. </p>
					</div>

					<div className="Features__Items">
						<h1> EASY SORTING</h1>
						<p> Easily move items on the list using the drag&drop icon on the side.</p>
					</div>
				</div>
				<div data-aos="zoom-in-down" className="Features__Image">
					<img src={ImageFeatuers} alt={ImageFeatuers} />
				</div>
				<div
					data-aos="fade-left"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					className="Features__Item Features__Left"
				>
					<div className="Features__Items">
						<h1> MULTI-LIST</h1>
						<p> Create as many lists as you prefer and separate items by store.</p>
					</div>
					<div className="Features__Items">
						<h1> SMART SUGGESTIONS</h1>
						<p> The app learns your shopping habits and personalizes the suggestions for you.</p>
					</div>
					<div className="Features__Items">
						<h1>TRANSLATED INTO 18+ LANGUAGES </h1>
						<p>Missing a language? Help us translate the app here. </p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Seaction3;
