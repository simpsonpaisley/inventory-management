import { useState, useEffect } from 'react';
import clock from '../images/clock.png';
import graph from '../images/graph.png';
import barcode from '../images/barcode.png';
import box from '../images/box.png';
import stack from '../images/stack.png';

function LandingMain() {
	const cardInfo = [
		{
			imgSrc: clock,
			title: 'Real Time Updates',
			paragraph: 'Lorem Ipsum......',
		},
		{
			imgSrc: barcode,
			title: 'Barcode Scanner Compatible',
			paragraph: 'Lorem Upsum .......',
		},
		{
			imgSrc: graph,
			title: 'Track Your Inventory Trends',
			paragraph: 'Lorem Upsum......',
		},
		{
			imgSrc: box,
			title: 'Never Run Out of Stock Again',
			paragraph: 'Lowren Upsum.....',
		},
	];
	const [showCard, setShowCard] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setShowCard((showCard + 1) % cardInfo.length);
		}, 10000);
		return () => clearInterval(interval);
	});
	return (
		<div className="landingMain">
			<h2>Master Your Inventory, Maximize Your Success.</h2>
			<div className="midSection">
				<div className="boxDisplay">
					<div className="featureBox">
						<img
							src={cardInfo[showCard].imgSrc}
							alt=""></img>
						<h3>{cardInfo[showCard].title}</h3>
						<p>{cardInfo[showCard].paragraph}</p>
					</div>
				</div>
				<img
					src={stack}
					alt="boxes"
					id="stack"></img>
			</div>
			<div className="landingText">
				<p>
					Dolor ea officia occaecat id excepteur. Labore nisi esse laboris amet
					laborum sit elit eiusmod. Officia magna nulla ad eiusmod elit. Enim
					exercitation commodo commodo enim quis qui. Labore ullamco irure esse
					incididunt enim magna cupidatat ullamco ad laboris ipsum in velit ex.
					Officia culpa duis sit eiusmod amet. Duis non excepteur pariatur ad
					voluptate. Laboris enim irure id labore eiusmod elit dolor sunt
					incididunt duis laborum consequat. Amet et sit duis deserunt. Laboris
					culpa consequat est do pariatur sit Lorem adipisicing nostrud laborum.
					Pariatur occaecat amet qui mollit excepteur dolor sit veniam qui
					pariatur veniam nostrud pariatur. Ex incididunt id incididunt et ea
					labore velit velit proident est proident dolore laborum ullamco. Minim
					eu quis eiusmod laboris labore ut aute do. Aliqua velit pariatur
					excepteur cupidatat est voluptate adipisicing nostrud fugiat fugiat
					laborum enim ea. Ipsum non dolor pariatur consectetur eu exercitation
					Lorem irure veniam nisi ullamco. Tempor cillum eu ex velit nostrud
					pariatur officia aute fugiat mollit eiusmod tempor dolor. Laborum
					proident laborum et aliqua ullamco occaecat consequat pariatur aliquip
					excepteur voluptate in.
				</p>
			</div>
		</div>
	);
}

export default LandingMain;
