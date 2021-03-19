import { UpdateCart } from '../actions/cart-action';


const initialState	= {
	fetching:true,
	fetched:false,
	cartItems:[],
	error:{}
}

export default function cartReducer(state = initialState, {type,payload}){
	// alert(haha)
	
	switch(type){
		case UpdateCart:
		return{
			...state,
			cartItems:payload
		}
		default:
		return state
	}
}