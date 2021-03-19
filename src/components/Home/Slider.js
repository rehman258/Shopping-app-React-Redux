import React from 'react'
import * as ReactBootstraps from 'react-bootstrap';
import SliderImg1 from '../../Img/SliderImg1.jpg';
import SliderImg2 from '../../Img/SliderImg2.jpg';
import SliderImg3 from '../../Img/SliderImg3.jpg';

function Slider() {
	return (
		<div>
			<ReactBootstraps.Carousel indicators={false} interval={1000000} className="Mycarousel">
			  	<ReactBootstraps.Carousel.Item className="h-100">
			  		<div className="ovar_l"></div>
			    	<img className="d-block w-100 h-100" src={SliderImg1} alt="First slide" />
			    	<ReactBootstraps.Carousel.Caption>
			      		<h3>First slide label</h3>
			      		<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			    	</ReactBootstraps.Carousel.Caption>
			  	</ReactBootstraps.Carousel.Item>

			  	<ReactBootstraps.Carousel.Item className="h-100">
			  		<div className="ovar_l"></div>
			    	<img className="d-block w-100 h-100" src={SliderImg2} alt="First slide" />
			    	<ReactBootstraps.Carousel.Caption >
			      		<h3>First slide label</h3>
			      		<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			    	</ReactBootstraps.Carousel.Caption>
			  	</ReactBootstraps.Carousel.Item>
			</ReactBootstraps.Carousel>
		</div>
	)
}

export default Slider