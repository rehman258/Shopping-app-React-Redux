import React from 'react'
import axios from 'axios';

import {connect} from 'react-redux';
import {CalcItemsCount} from '../actions/cart-action';

function CartCountItem(props) {


	const changeCountOfProduct = (calcType) =>{
		if(calcType === "inc"){
			props.elem.count = props.elem.count+1
			props.CalcItemsCount(props.elem);
		}else if(calcType === "decr"){
			if(props.elem.count > 1){
				props.elem.count = props.elem.count-1
				props.CalcItemsCount(props.elem);
			}
			
		}
	}
	
	return (
		<th className="text-center">
			<div className="dicrement" onClick={()=>changeCountOfProduct("decr")}>-</div>
				{props.elem.count}
			<div className="increment" onClick={()=>changeCountOfProduct("inc")}>+</div>
		</th>
	)
}
const mapStateToProps =state=>{
	return state
}
const mapDispatchToProps = {
	CalcItemsCount
}


export default connect(mapStateToProps,mapDispatchToProps)(CartCountItem)