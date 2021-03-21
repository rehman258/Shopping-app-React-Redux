import React from 'react'
import axios from 'axios';
import { CalcCount } from '../actions/cart-action';
import { cartCount } from '../actions/cartCount';
import {connect} from 'react-redux';

function CartCountItem(props) {

	const changeCountOfProduct = (calcType) =>{
		props.CalcCount(props.elem,calcType)
		if(calcType === "inc"){
			props.cartCount(props.cartCountReducer+1)
		}else if(calcType === "dicr"){
			if(props.elem.count > 1){
				props.cartCount(props.cartCountReducer-1)
			}
			
		}
	}
	
	return (
		<th className="text-center">
			<div className="dicrement" onClick={()=>changeCountOfProduct("dicr")}>-</div>
				{props.elem.count}
			<div className="increment" onClick={()=>changeCountOfProduct("inc")}>+</div>
		</th>
	)
}
const mapStateToProps =state=>{
	return state
}
const mapDispatchToProps = {
	CalcCount,
	cartCount
}


export default connect(mapStateToProps,mapDispatchToProps)(CartCountItem)