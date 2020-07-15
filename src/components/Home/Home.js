import React from 'react';

import './Home.scss';
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import * as Routes from '../../Routes/Routes';
import { Fragment } from 'react';
import { TimeHistory } from './Svg/Time';
import { CardList } from './Svg/List';
import { PersonLinesFill } from './Svg/Person';
import ImageFeatuers from '../../imgShopping/ImageFeatuers.png';
const Home = () => {
	return (
		<Fragment>
			<header className="Header">
				<div className="container Header__Text">
					<h1>SHOPPING LIST</h1>
					<p> The easiest shopping list app ever made</p>
					<Link className="btn Header__Text--Link" to={Routes.CategoriesList}>
						{' '}
						ShoppingList
					</Link>
				</div>
			</header>
			<Container>
				<section className="fe">
					<h1 data-aos="fade-right" data-aos-delay="100">
						{' '}
						Fortune - <span>ShoppingList</span>
					</h1>
					<p data-aos="fade-left" data-aos-delay="100">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestiae inventore sequi
						facere quis quidem ut<br /> sapiente repudiandae quam porro cum, necessitatibus assumenda! A,
						porro mollitia. fortune Adipisci ullam ut quo!
					</p>
				</section>
				<section data-aos="fade-up" data-aos-delay="100" className="List ">
					<div className="List__Item__Container">
						<div className="List__Item__Container--Icon">
							<PersonLinesFill />
						</div>
						<h6 className="List__Item__Container--Num"> 1,000,000+</h6>
						<p className="List__Item__Container--Des"> Downloads all around the world - and counting.</p>
					</div>
					<div className="List__Item__Container">
						<div className="List__Item__Container--Icon">
							<TimeHistory />{' '}
						</div>
						<h6 className="List__Item__Container--Num"> 4.4 / 5</h6>
						<p className="List__Item__Container--Des">Average rating from 20,000+ ratings.</p>
					</div>
					<div className="List__Item__Container">
						<div className="List__Item__Container--Icon">
							<CardList />
						</div>
						<h6 className="List__Item__Container--Num"> 7839473974</h6>
						<p className="List__Item__Container--Des">Items added worldwide since you came here.</p>
					</div>
				</section>
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
			</Container>
			<section className="jumbotron" id="Free__Download">
				<Container>
					<h1>Free Download</h1>
					<p>Shopping list is a free app coming soon on Play store. </p>
					<a className="dbtn btn" href="/#">
						{' '}
						Free download
					</a>
				</Container>
			</section>
			<Container>
				<section className="MULTIPLE__LISTS ">
					<div data-aos="fade-in" className="MULTIPLE__LISTS__Image">
						<img src={ImageFeatuers} alt={ImageFeatuers} />
					</div>
					<div className="MULTIPLE__LISTS__Text">
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

			<section className="jumbotron" id="Free__Download">
				<Container>
					<h1>GET IN TOUCH</h1>
					<p>
						Missing a feature? Suggest an idea or vote for existing ones. Drop us an email, anytime. We
						would love to hear from you.
					</p>
					<a className="dbtn btn" href="/#">
						{' '}
						Send email
					</a>
				</Container>
			</section>
		</Fragment>
	);
};

export default Home;
