import { Fetch_Products } from '../actions/product-action';

const initialState	= {
	fetching:true,
	fetched:false,
	items:[],
	error:{}
}

export default function productReducer(state = initialState ,{type,payload}){
	switch(type){

		case Fetch_Products:
		return {
			...state,
			items:payload
		}

		default:
		return state
	}
}