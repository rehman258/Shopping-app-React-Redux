import {DEFAULTFILLCART, UpdateCart , DeleteItemCart,CALCTYPESETED } from '../actions/cart-action';


const initialState	= {
	fetching:true,
	fetched:false,
	cartItems:[],
	error:{}
}
export default function cartReducer(state = initialState, {type,payload}){
	switch(type){

		case DEFAULTFILLCART:
		return {
			...state,
			cartItems:payload
		}

		case UpdateCart:
			let newCartItems = [...state.cartItems,payload]
			return{
				...state,
				cartItems:newCartItems
			}

		case DeleteItemCart:
			let filteredDeleteItem = state.cartItems.filter(item =>
				item._id !== payload._id
			)
			return{
				...state,
				cartItems:filteredDeleteItem
			}

		case CALCTYPESETED:
		// let calcedItemtt = [...state.cartItems,payload]
		let calcedItem = state.cartItems.map(item=> item._id === payload._id ? payload :item)
		return {
			...state,
			cartItems:calcedItem
		}

		default:
		return state
	}
}