import React from 'react';
import { Link } from 'react-router-dom';
import { DateFormatter } from '../../utils/dateFormatter';
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';


const categoriesItems = ({ categorie }) => {
	const { name, description, _id, date } = categorie;
	return (

		<Card className="Categorie__Main" data-aos="fade-right" data-aos-delay="100">
			<CardBody>
					<Link
					// className="Categorie__Main--a btns"
					to={{
						pathname: `/catagoriesList/${_id}`,
						state: { categorie }
					}}
				>
				<CardTitle className="Categorie__Main--title">{name}</CardTitle>
				<CardSubtitle className="Categorie__Main--des">
					{description ? description : 'no description '}
				</CardSubtitle>
				<p className="Categorie__Main--time">
					{/* Created On: */}
					{DateFormatter.Momentdate(date)}
					{/* <span>at {DateFormatter.momentTime(date)} </span> */}
				</p>

			
				
				</Link>
			</CardBody>
		</Card>
		
	);
};

export default categoriesItems;
