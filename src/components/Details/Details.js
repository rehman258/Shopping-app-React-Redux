import React from 'react';
import * as ReactBootstraps from 'react-bootstrap';
import {useParams,Link} from 'react-router-dom';
import '../css/Details.css'
import { connect } from 'react-redux';


function Details(props) {
	const {id} = useParams();
	let DetailsProduct = props.product.find(item => item._id === parseInt(id))
	
	return (
		<div>
			<ReactBootstraps.Col md={12} className="DetailsItem mx-auto">
				<ReactBootstraps.Container>
				    <ReactBootstraps.Row>
						<ReactBootstraps.Col sm={12} md={6} className="ItemImg">
							<div className="inCart">Already in cart</div>
							<img src={`../${DetailsProduct.img}`}  alt="" />
						</ReactBootstraps.Col>
						<ReactBootstraps.Col sm={12} md={6}  className="pl-5">
							<div className="Detail_Item_Content">
								<div><h1>{DetailsProduct.title}</h1></div>
								<div><p>{DetailsProduct.details}</p></div>
								<div><h3>{DetailsProduct.price} $</h3></div>
								<button className="mt-3">Add Cart</button>
							</div>
						</ReactBootstraps.Col>
					</ReactBootstraps.Row>
				</ReactBootstraps.Container>
			</ReactBootstraps.Col>	
					
		</div>
	)
}

const mapStateToProps = products => ({
	product:products.product
})

export default connect(mapStateToProps)(Details)