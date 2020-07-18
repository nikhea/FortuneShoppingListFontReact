import React from 'react';
import { TimeHistory } from '../Svg/Time';
import { CardList } from '../Svg/List';
import { PersonLinesFill } from '../Svg/Person';
const Seaction2 = () => {
	return (
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
	);
};

export default Seaction2;
