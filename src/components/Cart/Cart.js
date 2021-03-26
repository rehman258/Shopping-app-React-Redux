import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types'
import '../css/Cart.css';

/*Components */
import CartCountItem from './CartCountItem';
/**/
import { DeleteItemCartAction } from '../actions/cart-action';


function Cart(props) {
	const [total,setTotal] = useState(0);
	useEffect(()=>{
		let initTotal = 0;
		props.cartReducer.cartItems.map(item=> initTotal += item.count*item.price)
		setTotal(initTotal);
	},[props.cartReducer])
	
	/*  DELETING FROM CART ANT DATABASE*/

	const DeleteFromCart =(data)=>{
		data.isInCart = false;
		axios.put(`https://testshopping-59c29-default-rtdb.firebaseio.com/items/${data._id-1}.json`,data, {
		    headers: {
		      "isInCart":"false"
		}})
		props.DeleteItemCartAction(data)
	}
	return (
		<div>
			<form>
				<div className="container-fluid mt-5">
		        <h2 className="mb-5 text-center">Shopping Cart</h2>
		        <div className="row justify-content-center">
		            <div className="col-md-8">
		                <div className="table-responsive">
		                    <table id="myTable" className="table">
		                        <thead>
		                            <tr>
		                                <th>Product</th>
		                                <th>Name</th>
		                                <th className="text-center">Count</th>
		                                <th className="text-center">Price</th>
		                                <th className="text-right"><span id="amount" className="amount">Amount</span> </th>
		                                <th></th>
		                            </tr>
		                        </thead>
		                        <tbody>
		                        	{
		                        		props.cartReducer.cartItems.map(elem => (
		                        			<tr className="cart_item" key={elem._id}>
			                        			<th>
			                        				<img src={elem.img} alt="" />
			                        			</th>
			                        			<th>{elem.title}</th>
			                        			<CartCountItem elem={elem}/>
			                        			<th className="text-center">$ {elem.price}</th>
			                        			<th className="text-right pr-3">$ {elem.count * elem.price}</th>
			                        			<th onClick={()=>DeleteFromCart(elem)}>remove</th>
		                           			 </tr>
		                        		))
		                        	}
		                        </tbody>
		                        <tfoot>
		                            <tr>
		                                <td colSpan="4"></td><td align="right">

		                                	<strong>
		                                		<span className="mr-1">TOTAL =</span>
		                                		<span className="mr-1">$</span>
		                                		<span id="total" className="total">
		                                		{total}
		                                		</span>
		                                	</strong>
		                                </td>
		                            </tr>
		                        </tfoot>
		                    </table>
		                </div>
		            </div>
		        </div>
		    </div>
			</form>
		</div>
	)
}

Cart.propTypes ={
	cartReducer: PropTypes.object
}

const mapStateToProps = state =>{
	return state
}
const mapDispatchToProps = {
	DeleteItemCartAction,
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)