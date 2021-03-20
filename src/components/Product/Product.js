import React, {useEffect} from 'react';
import * as ReactBootstraps from 'react-bootstrap';
import  {useParams,Link} from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import axios from 'axios';
import { cartCount } from '../actions/cartCount';
import { updateCart } from '../actions/cart-action'
function Product(props) {
	
	const data = props.products;
	const {id} = useParams();
	
	let myArr = props.cartReducer.cartItems;
	function AddingCart(){
		if(!data.isInCart){
			data.isInCart = true;
			axios.put(`https://testshopping-59c29-default-rtdb.firebaseio.com/items/${data._id-1}.json`,data, {
		    headers: {
		      "isInCart":"true"
		    }})
			props.cartCount(props.cartCountReducer+1);
			myArr.push(data)
		    props.updateCart(myArr)
		}else{
			alert('is in cart')
		}
	}
	
	return (
		<ReactBootstraps.Col md={4} className="mb-2 mt-2 Product_Item">
			<ReactBootstraps.Card style={{ width: '18rem' }} className="mx-auto">
				<Link to={`/details/${data._id}`}>
					<ReactBootstraps.Card.Img variant="top" src={data.img} />
				</Link>
				<ReactBootstraps.Card.Body className="text-center">
					<div className="inCart">Already in cart</div>
					<ReactBootstraps.Card.Title>{data.title}</ReactBootstraps.Card.Title>
					<ReactBootstraps.Card.Text className="text-left">
					    {data.details}
					</ReactBootstraps.Card.Text>
					<ReactBootstraps.Card.Title>{data.price}$</ReactBootstraps.Card.Title>
					<ReactBootstraps.Button variant="dark" className="mx-auto" onClick={AddingCart}>Add Cart</ReactBootstraps.Button>
				</ReactBootstraps.Card.Body>
			</ReactBootstraps.Card>
		</ReactBootstraps.Col>
	)
}

Product.propTypes = {
	productReducer: PropTypes.object
}

const mapStateToProps = state => {
	return state
}

const mapDispatchToProps = {
	cartCount,
	updateCart
}



export default connect(mapStateToProps,mapDispatchToProps)(Product)