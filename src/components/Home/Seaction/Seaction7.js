import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { Shop, Shop2, Shop3, Shop4, Shop5 } from '../../../imgShopping/images';

const items = [
	{
		src: `${Shop}`
	},
	{
		src: `${Shop2}`
	},
	{
		src: `${Shop3}`
	},
	{
		src: `${Shop4}`
	},
	{
		src: `${Shop5}`
	}
];
console.log(items[0].src);
const Example = (props) => {
	const [ activeIndex, setActiveIndex ] = useState(0);
	const [ animating, setAnimating ] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem
				className='ImageDiv'
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}
			>
                <div className='ImageDiv'>
                <img  src={item.src} alt={item.altText} />
                </div>
				<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
			</CarouselItem>
		);
	});

	return (
		<Carousel   className="dark" activeIndex={activeIndex} next={next} previous={previous}>
			<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
			{slides}
			<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
			<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
		</Carousel>
	);
};

export default Example;

