import { CART_COUNT } from '../actions/cartCount';

const initialCount = 0;

export default function cartCountReducer(state = initialCount,{type,payload}){

	switch(type){
		case CART_COUNT:
		return payload
		
		default:
		return state
	}

}