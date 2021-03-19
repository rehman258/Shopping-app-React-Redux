import React, {useState,useEffect} from 'react';
import * as ReactBootstraps from 'react-bootstrap';
import Product from '../Product/Product';
import { connect } from 'react-redux';

function Products({productReducer}) {
	return (
		<div>
			<h1 className="text-center pt-5 pb-5">Products</h1>
			<ReactBootstraps.Container fluid className="Products_Content">
				<ReactBootstraps.Row>
					{	
						productReducer.items.map(product => <Product 
						key={product._id} products={product} />)
					}
				</ReactBootstraps.Row>
			</ReactBootstraps.Container>
			<hr className="pb-2 pt-2" />
		</div>
	)
}

const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps)(Products)